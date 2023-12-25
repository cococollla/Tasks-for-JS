function MyPromiseRace(...promises) {

    return new Promise((resolve, reject) => {
        promises.forEach(p => p.then(resolve).catch(reject));
    });
}