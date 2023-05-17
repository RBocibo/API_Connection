function listPosts()
{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
        if(response.ok) {
            return response.json();
        }
        throw new Error('Request failed');
    })
    .then(function(data){
        var results = document.getElementById('result');
       // results.innerHTML = 'result';
        data.forEach(function(item) {
            var listItem = document.createElement('li');
            listItem.textContent = JSON.stringify(item, null, 2);
            results.appendChild(listItem);
        });
        //results.textContent = JSON.stringify(data);
        //console.log(data);
    })
    .catch(function(error){
        console.log(error);
    });
  
}

function getPostById()
{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function(response) {
        if(response.ok) {
            return response.json();
        }
        throw new Error('Request failed');
    })
    .then(function(data){
        var results = document.getElementById('result');

        results.textContent = JSON.stringify(data);
    })
    .catch(function(error){
        console.log(error);
    });
}

function createPost()
{
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    //userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

export {listPosts}
export {getPostById}
export {createPost}