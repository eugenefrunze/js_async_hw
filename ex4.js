// ex. 4
// write a promisify function,
// like a wrapper for other functions

// you should pass a callback to it, and arguments to that callback

// const promisify = (functionAsCallback, ...argsToFunction) => {
//
//   // your code should go here
//
// }

// it should return a promise, so you can call .then on this function
// const promisifiedFunction = promisify(someAsyncFunction, [args])
// .then(result => {
//   console.log(result)
// })

const promisify = (functionAsCallback, ...argsToFunction) => {
    return function (...argsToFunction) {
        return new Promise((resolve, reject) => {
            function callback(error, result) {
                if (error) {
                    return reject(error)
                } else {
                    return resolve(result)
                }
            }
            argsToFunction.unshift(callback)
            functionAsCallback.call(this, ...argsToFunction)
        })
    }
}

const someAsyncFunction = (callback, ...args) => {
    if(args.length === 0){
        callback(new Error('gimme some args'), null)
    } else {
        args.length === 1 ? callback(null, args[0]) : callback(null, args.reduce((sum, el) => sum + el))
    }
}

const promisifiedFunction = promisify(someAsyncFunction, 50)

promisifiedFunction(2, 7)
    .then(res => console.log(res))
    .catch(error => console.error(error.message))