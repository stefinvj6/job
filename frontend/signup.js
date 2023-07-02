import axios from "axios";

const form = document.getElementById("form")

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const username=form["username"];
    const password=form["password"];
    const email=form["email"]

    const userDetails = {
        username:username.value,
        password:password.value,
        email:email.value
    }

    const addUser = (userDetails) =>{
        axios.post("http://localhost:6302/user",userDetails)
        .then(response =>{
            console.log(response.data)
            window.location.href='.\index.html'
        }).catch(err =>{
            console.log(err)
        })
    }
    addUser(userDetails)
    form.reset()
})