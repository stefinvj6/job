const { default: axios } = require("axios")

const profilePicture = document.getElementById("profilePicture")
const firstName = document.getElementById("firstName")
const domain = document.getElementById("domain")
const description = document.getElementById("description")
const contactNumber = document.getElementById("contactNumber")
const eMail = document.getElementById("eMail")
const github = document.getElementById("github")
const place = document.getElementById("place")
const education = document.getElementById("education")
const certificates = document.getElementById("certificates")
const projects = document.getElementById("projects")
const skills = document.getElementById("skills")

if(!document.cookie){
    window.location.href='/job.html'
    return
}

const tokenCookie=document.cookie
const tokenCookieSplit = tokenCookie.split("=")
const token =tokenCookieSplit[1]
console.log(token)

axios.get("http://localhost:6302/profileMe",{
    headers:{
        "Authorization":`Bearer ${token}`
    }
})
.then(response=>{
    if(!response.data){
        window.location.href='./edit-profile.html'
    }
    console.log(response.data)
    const profile=response.data

    firstName.innerHTML=profile.firstName
    profilePicture.src=profile.profilePicture
    domain.innerText=profile.domain
    description.innerText=profile.description
    contactNumber.innerText=profile.contactNumber
    eMail.innerText=profile.eMail
    github.innerText=profile.github
    place.innerText=profile.place
    education.innerText=profile.education
    certificates.innerText=profile.certificates
    projects.innerText=profile.projects
    skills.innerText=profile.skills

}).catch((err)=>{
    console.log(err)
})