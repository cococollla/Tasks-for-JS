function MyDelay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(console.log("Hello")), ms)
    });
}