function retryPromise(fn, retries = 3, delay = 1000) {
    return new Promise((resolve, reject) => {
        const attempt = (n) => {
            fn().then(resolve).catch((err) => {
                if (n === 0) reject(err);
                else setTimeout(() => attempt(n - 1), delay)
            })
        }
        attempt(retries);
    })
};

let count = 0;

const unStableApi = () => {
    return new Promise((resolve, reject) => {
        count++;
        console.log("Attempt", count);
        count < 3 ? reject("Failed") : resolve("Succeed")
    })
};

retryPromise(unStableApi, 5, 1000).then(res => console.log(res)).catch(err => console.log(err));