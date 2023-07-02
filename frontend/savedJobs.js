import axios from "axios";
const jobList = document.getElementById("job-list");
const logo = document.getElementById("company-logo");
const company_name = document.getElementById("company-name");
const job_role = document.getElementById("job-role")
const location = document.getElementById("location")
const experience = document.getElementById("experience")
const job_type = document.getElementById("job-type")
const job_salery = document.getElementById("job-salery")
const job_Posted = document.getElementById("job-posted")
const remove= document.getElementById("remove")

// const url = new URL (document.URL)
// console.log(url)
// const searchParams= url.searchParams
// console.log(searchParams)
// const id = searchParams.get("id")
// console.log(id)

const tokenCookie=document.cookie
const tokenCookieSplit=tokenCookie.split("=")
const token = tokenCookieSplit[1]

axios.get("http://localhost:6302/apply",{
    headers:{
        Authorization:`Bearer ${token}`
    }
})
.then((response)=>{ ``
    console.log(response.data)
    appliedJobs(response.data)
    // appliedJobs(response.data)
}).catch((err)=>{
    console.log("error"+err)
})

function appliedJobs(jobsArray){
    for(let i=0;i<jobsArray.length;i++){
        const Apply =jobsArray[i].job
        // console.log(jobsArray[i].job);
        console.log(Apply)
        // console.log(apply._id)
        const li = document.createElement("li");
        li.classList.add("job-list-items");
        li.innerHTML=""
        li.innerHTML=
        
            ` <article>
                    <img class="image-logo" src="google-logo.jpg" alt=""><br>
                    <span class="job-company">${Apply.company_name}
                    </span>
                    <h5 class="job-role">${Apply.job_role}</h5><br>
                    <div class="job-needs">
                        <SPAN class="job-location">${Apply.company_Address}</SPAN><br>
                        <span class="job-experience">${Apply.company_name}</span><br>
                        <span class="job-type">${Apply.job_type}</span><br>
                        <span class="job-salery">${Apply.job_salery}</span><br>
                        <span class="job-posted">${Apply.job_Posted}</span> 
                    </div>
                </article> `              

        jobList.append(li);

        const button = document.createElement("button")
        button.innerHTML="remove"
        button.classList.add("remove")
        li.append(button)   

        // li.addEventListener("click",(e)=>{
        //     console.log(jobsArray[i].job._id)
        //     window.location.href='./view-job.html?id='+jobsArray[i].job._id
        // })

        button.addEventListener("click",()=>{
            // console.log("removed")
            // console.log(Apply._id)
            const id = Apply._id
            console.log(id)
                axios
                .delete(`http://localhost:6302/apply/${id}`,{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }   
                })
                .then((response)=>{
                    console.log(response)
                })
                .catch((err)=>{
                    console.log(err)
                }) 
        })
    }
}