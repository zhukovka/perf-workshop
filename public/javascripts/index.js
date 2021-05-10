// Catch errors since some browsers throw when using the new `type` option.
// https://bugs.webkit.org/show_bug.cgi?id=209216
try {
    const po = new PerformanceObserver((entryList) => {
        const firstInput = entryList.getEntries()[0];

        // Measure First Input Delay (FID).
        const firstInputDelay = firstInput.processingStart - firstInput.startTime;

        // Measure the time it takes to run all event handlers
        // Note: this does not include work scheduled asynchronously using
        // methods like `requestAnimationFrame()` or `setTimeout()`.
        const firstInputProcessingTime = firstInput.processingEnd - firstInput.processingStart;

        // Measure the entire duration of the event, from when input is received by
        // the browser until the next frame can be painted after processing all
        // event handlers.
        // Note: similar to above, this value does not include work scheduled
        // asynchronously using `requestAnimationFrame()` or `setTimeout()`.
        // And for security reasons, this value is rounded to the nearest 8ms.
        const firstInputDuration = firstInput.duration;

        // Log these values the console.
        console.log({
            firstInputDelay,
            firstInputProcessingTime,
            firstInputDuration,
        });
        console.log(firstInput)
    });

    po.observe({type: 'first-input', buffered: true});
} catch (error) {
    // Do nothing if the browser doesn't support this API.
}
document.getElementById('btn').addEventListener('click', () => {
    console.log('btn click');
})
//TODO:
// 1. make firstInputDelay bigger
// 2. make firstInputProcessingTime bigger
