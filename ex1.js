// ex. 1
// Promise['Method'] -> ~ all that always returns either it's success or error
// [ 'success', 'error' ]

Promise.allSettled([
        Promise.resolve('success'),
        Promise.reject('error'),
        Promise.resolve('success'),
    ])
    .then(results => {
        console.log(results.map((el) => el?.value ? el.value : el.reason))
    })