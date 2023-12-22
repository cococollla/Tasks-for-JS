function MyPromiseAll(promiseArr) {
    let result = Array(promiseArr.length);
    let counter = 0;

    return new Promise((resolve, reject) => {
        promiseArr.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((item) => {
                    counter += 1;
                    result[index] = item;

                    if (counter === promiseArr.length) {
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