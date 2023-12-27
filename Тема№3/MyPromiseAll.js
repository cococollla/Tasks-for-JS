function MyPromiseAll(...promises) {
    let result = Array(promises.length);
    let counter = 0;

    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((item) => {
                    counter += 1;
                    result[index] = item;

                    if (counter === promises.length) {
                        resolve(result);
                        console.log(result);
                    }
                })
                .catch((error) => {
                    reject(error);
                    console.log(error);
                });
        });
    });
}