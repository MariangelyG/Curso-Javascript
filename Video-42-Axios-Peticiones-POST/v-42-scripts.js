const button = document.getElementById('button')

button.addEventListener('click', () =>{
    axios({
        method: 'POST',
        url:'https://jsonplaceholder.typicode.com/posts',
        data:{
            title: 'A new post',
            body: 'lorem ipsum jbngoui jbfuib jkhefouihe jkhnfie',
            userId: 1
        }
    }).then(res=> console.log(res.data))
    .catch(err => console.log(err))
})