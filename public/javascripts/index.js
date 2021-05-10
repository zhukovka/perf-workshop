// Catch errors since some browsers throw when using the new `type` option.
// https://bugs.webkit.org/show_bug.cgi?id=209216
try {
    // Create the performance observer.
    const po = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            // If transferSize is 0, the resource was fulfilled via the cache.
            console.log(entry.name, 'cached:', entry.transferSize === 0);
            console.log(entry);
        }
    });
    // Start listening for `resource` entries to be dispatched.
    po.observe({type: 'resource', buffered: true});
} catch (e) {
    // Do nothing if the browser doesn't support this API.
}
//TODO: decrease duration of resources loading