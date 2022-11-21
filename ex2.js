// ex. 2
// differences between  Promise.race()  VS  Promise.any();
// with words / examples


//The Promise.any() method continue working until it finds the first fullfilled promise (only fullfilled promise fits, just settled one doesn't):

const promisesAny = [
    new Promise(resolve => setTimeout(resolve, 2000, 'retard')),
    Promise.reject('error'),
    new Promise(someResolve => someResolve('mr. instant')),
]

Promise.any(promisesAny)
    .then(result => {
        console.log(result) // prints 'mr. instant'
    })
    .catch(error => console.error(error.message))

//in the case of the Promise.race() method - it returns the first settled value, despite either it was rejected or fullfilled:

Promise.race([
        Promise.reject('the rejectiest one'),
        new Promise(resolve => resolve('candidate nr. 1')),
        new Promise(resolve => resolve('the last'))
    ])
    .then(result => {
        console.log(result) 
    })
    .catch(error => console.error(error)) // error: 'the rejectiest one'