// const getUser = (id, cb)=>{
//     const user ={
//         name: "Mariangely",
//         id: id
//     }
//     if (id == 2) cb('User not exist')
//     else cb(null, user)
// }

// getUser(1, (err, user)=>{
//     if (err) return console.log(err)
//     console.log(`User name is ${user.name}`)
// })

const users = [
    {
        id:1,
        name: 'Mariangely'
    },
    {
        id:2,
        name: 'Sara'
    },
    {
        id:3,
        name: 'Camila'
    }
]

const emails = [
    {
        id:1,
        email: 'mariangely@gmail.com'
    },
    {
        id:2,
        email: 'sara@gmail.com'
    }
]

const getUser = (id,cb)=>{
    const user = users.find(user=>user.id == id)
    if (!user) cb (`Not exist a user with id ${id}`)
    else cb (null, user)  
}
const getEmail = (user,cb)=>{
    const email = emails.find(email=>email.id == user.id)
    if (!email) cb (`${user.name} hasn't email`)
    else cb (null, {
        id: user.id,
        name: user.name,
        email: email.email
    }) 
}
getUser(2, (err,user)=>{
    if (err) return console.log(err)

    getEmail(user, (err,res)=>{
        if(err) return console.log(err)
        console.log(res);
    })
})