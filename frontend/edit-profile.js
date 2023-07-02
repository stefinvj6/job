const { default: axios } = require("axios")

    const form = document.getElementById("form")

    if(!document.cookie){
        window.location.href='./index.html'
    }

    const tokenCookie=document.cookie
    const tokenCookieSplit = tokenCookie.split("=")
    const token =tokenCookieSplit[1]

    form.addEventListener("submit",(e)=>{
        e.preventDefault();

        const firstName = form["firstName"].value
        const lastName = form["lastName"].value
        const profilePicture = form["profilePicture"].value
        const domain = form["domain"].value
        const contactNumber = form["contactNumber"].value
        const eMail = form["eMail"].value
        const github = form["github"].value
        const place = form["place"].value
        const description = form["description"].value
        const education = form["education"].value
        const certificates = form["certificates"].value
        const skills = form["skills"].value
        const projects = form["projects"].value

        const editprofile={
            firstName:firstName,
            lastName:lastName,
            profilePicture:profilePicture,
            domain:domain,
            contactNumber:contactNumber,
            eMail:eMail,
            github:github,
            place:place,
            description:description,
            education:education,
            certificates:certificates,
            skills:skills,
            projects:projects
        }
        
        axios.post('http://localhost:6302/profile',editprofile,{
           headers:{
               "Authorization":`Bearer ${token}`,
            }, 
        })
        .then(response =>{
            console.log(response.data)
            window.location.href='./profile.html'
        })
        .catch(err =>{
            console.log(err)
        })
    })
