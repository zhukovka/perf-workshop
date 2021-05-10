function doMyTask() {
    let i = 0;
    let limit = Math.pow(10, 9);
    while (i < limit) {
        i++;
    }
    console.log('doMyTask i', i);
}
// Catch errors since some browsers throw when using the new `type` option.
// https://bugs.webkit.org/show_bug.cgi?id=209216
try {
    // Create the performance observer.
    const po = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            // Log the entry and all associated details.
            console.log(entry.toJSON());
        }
    });
    // Start listening for `measure` entries to be dispatched.
    po.observe({type: 'measure', buffered: true});
} catch (e) {
    // Do nothing if the browser doesn't support this API.
}
// Record the time immediately before running a task.
performance.mark('myTask:start');
doMyTask();
// Record the time immediately after running a task.
performance.mark('myTask:end');

// Measure the delta between the start and end of the task
performance.measure('myTask', 'myTask:start', 'myTask:end');