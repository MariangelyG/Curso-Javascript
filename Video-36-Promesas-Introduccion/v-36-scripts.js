const users = [{ id:1, name: 'Mariangely' },{ id:2, name: 'Sara' },{ id:3, name: 'Camila' }]

const emails = [{ id:1, email: 'mariangely@gmail.com' },{ id:2, email: 'sara@gmail.com' }]

const getUser = (id)=>{
    const user = users.find(user=>user.id == id)
    return promise = new Promise ((resolve, reject)=>{
        if (!user) reject(`Doesn't exist a user with id ${id}`)
        else resolve(user)  
    })
    
}

const getEmail = (user)=> {
    const email =emails.find(email => email.id == user.id)
    return promise = new Promise((resolve, reject) => {
        if (!email) reject(`${user.name} hasn't email`)
        else resolve({
            id: user.id,
            name:user.name,
            email: email.email
        }) 
    })
}

getUser(1) 
    .then(user=> getEmail(user))
    .then(res => console.log(res))
    .catch(err=> console.log(err))

    
// getUser(3) 
// .then(getEmail)
// .then(console.log)
// .catch(console.Log)



