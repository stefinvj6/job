import axios from "axios";

const companylogo = document.getElementById("company-logo")
const jobTitle = document.getElementById("jobTitle")
const company = document.getElementById("company")
const location = document.getElementById('location')
const jobTime = document.getElementById("job-time")
const description = document.getElementById("description")
const requirements = document.getElementById("requirements")
const salery = document.getElementById('salery')
const jobType = document.getElementById('job-type')
const about = document.getElementById('about')

const applyJob = document.getElementById("view-job-button")

const url = new URL (document.URL)
const searchParams= url.searchParams
const id = searchParams.get("id")

axios.get("http://localhost:6302/jobo/"+id)
.then(response=>{
    console.log(response.data)
    const viewjobs=response.data
    companylogo.src=viewjobs.company_logo
    jobTitle.innerHTML=viewjobs.job_role
    company.innerHTML=viewjobs.company_name
    location.innerHTML=viewjobs.company_Address
    jobTime.innerHTML=viewjobs.job_type
    description.innerHTML=viewjobs.job_description
    requirements.innerHTML=viewjobs.job_requirements
    salery.innerHTML=viewjobs.job_salery 
    about.innerHTML=viewjobs.about 
})
.catch(err =>{
    console.log(err)
})

    applyJob.addEventListener("click",()=>{
        const tokenCookie=document.cookie
        const tokenCookieSplit=tokenCookie.split("=")
        const token = tokenCookieSplit[1]
        console.log(token)
        console.log(id)

        axios
        .post("http://localhost:6302/apply",
            {
                job:id
            },
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        .then((response)=>{
            console.log(response.data)            
        })
        .catch((err)=>{
            console.log(err)
        })    
    })