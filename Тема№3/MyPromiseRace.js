function MyPromiseRace(...promises) {

    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            Promise.resolve(promise)
            .then(resolve)
            .catch(reject);
        });
    });
}