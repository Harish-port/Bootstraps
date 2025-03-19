function likeTheVideo(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${username} like your video`)
        }, 100)
    })
}
function shareTheVideo(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${username} share your video`)
        }, 100)
    })
}
function downloadTheVideo(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`${username} download your video`)
        }, 100)
    })
}

Promise.allMyPolyfill = (promises) => {
    return new Promise((resolve, reject) => {
        let results = [];
        if (!promises.length) {
            resolve(results);
            return
        }
        let pending = promises.length;
        promises.forEach((promise, idx) => {
            Promise.resolve(promise).then((res) => {
                results[idx] = res;
                pending--;
                if (pending === 0) {
                    resolve(results);
                    return
                }
            }, reject)
        })
    })
}

Promise.allMyPolyfill([likeTheVideo("Harish"), shareTheVideo("Ramesh"), downloadTheVideo("Suresh")]).then((res) => {
    console.log(res, "result");
}).catch((err) => {
    console.log(err, "error");
})