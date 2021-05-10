// Catch errors since some browsers throw when using the new `type` option.
// https://bugs.webkit.org/show_bug.cgi?id=209216
try {
    // Create the performance observer.
    const po = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            console.log(entry)
            console.log('Time to first byte', entry.responseStart);
        }
    });
    // Start listening for `navigation` entries to be dispatched.
    po.observe({type: 'navigation', buffered: true});
} catch (e) {
    // Do nothing if the browser doesn't support this API.
}