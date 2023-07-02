const { default: axios } = require("axios");
const form = document.getElementById("form")

if(document.cookie){
    window.location.href="./profile.html"
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const username = form["username"].value
    const password = form["password"].value

    if(isEmpty(username)|| isEmpty(password)){
        console.log("value cannot be empty")
        return;
    }
    const posted ={
        username:username,
        password:password
    }
    axios.post("http://localhost:6302/user/login", posted)
    .then(response =>{
        let comparisionResult=response.data.comparisionResult
            const token =response.data.token
            document.cookie=`token=${token}`
            window.location.href='./profile.html'
    }).catch(err =>{
        console.log("login failed" + err)
    })
})
function isEmpty(value){
    if(value===""|| value==null){
        return true
    }return false
}