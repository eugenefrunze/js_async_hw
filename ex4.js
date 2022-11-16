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
            argsToFunction.push(callback)
            functionAsCallback.call(this, ...argsToFunction)
        })
    }
}

const someAsyncFunction = (num1, num2, callback) => {
    if (!num1 || !num2) {
        return callback(new Error('truobles with arguments'), null)
    }
    return callback(null, num1 + num2)
}

const promisifiedFunction = promisify(someAsyncFunction)


promisifiedFunction(6, 2).then(result => console.log(result))