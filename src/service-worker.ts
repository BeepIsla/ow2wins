/// <reference lib="webworker" />
import { build, files, version } from "$service-worker";

const worker = self as unknown as ServiceWorkerGlobalScope;
const cacheName = `cache-${version}`;

// Cache all files
worker.addEventListener("install", (ev: ExtendableEvent) => {
	ev.waitUntil(
		(async () => {
			const cache = await caches.open(cacheName);
			await cache.addAll([...build, ...files]);
			await worker.skipWaiting();
		})()
	);
});

// Delete old caches
worker.addEventListener("activate", (ev: ExtendableEvent) => {
	ev.waitUntil(
		(async () => {
			const keys = await caches.keys();
			for (const key of keys) {
				if (key !== cacheName) {
					await caches.delete(key);
				}
			}
			await worker.clients.claim();
		})()
	);
});

// Return from cache if possible
worker.addEventListener("fetch", (ev: FetchEvent) => {
	if (ev.request.method !== "GET") {
		return;
	}

	const url = new URL(ev.request.url);
	if (url.protocol !== "http" && url.protocol !== "https") {
		return;
	}

	ev.respondWith(
		(async () => {
			let resp = await caches.match(ev.request);
			if (!resp) {
				resp = await fetch(ev.request);

				const cache = await caches.open(cacheName);
				cache.put(ev.request, resp);
			}

			return resp;
		})()
	);
});
