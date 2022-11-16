// ex. 3
// add error handling for fetch (based on statuses, ok property)

fetch('https://jsonplaceholder.typicode.com/post')
  .then(res => {
    if(!res.ok) throw new Error(`Error fetching, status is ${res.status}`)
    return res.json();
  })
  .then((json) => console.log(json))
  .catch(error => console.error(error.message));