addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    let url = new URL(request.url);
    let destination = "https://xprmin.tadenmin.site"; // Your target site

    url.hostname = new URL(destination).hostname;

    let modifiedRequest = new Request(destination + url.pathname + url.search, {
        method: request.method,
        headers: request.headers
    });

    return fetch(modifiedRequest);
}
