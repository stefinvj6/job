import axios from "axios";

axios.get("http://localhost:6302/jobo")
.then(response =>{
    displayJobs(response.data);
})
.catch(err =>{
    console.log(err);
})

const jobList = document.getElementById("job-list");

function displayJobs(jobsArray){
    for(let i=0;i<jobsArray.length;i++){
        console.log(jobsArray[i]);
        const li = document.createElement("li");
        li.classList.add("job-list-items");
        li.innerHTML=""
        li.innerHTML=
        
            ` <article>
                    <img id="image-logo" class="image-logo" src="${jobsArray[i].company_logo}" alt="company logo"><br>
                    <span class="job-company">${jobsArray[i].company_name}
                    </span>
                    <h5 class="job-role">${jobsArray[i].job_role}</h5><br>
                    <div class="job-needs">
                        <SPAN class="job-location">${jobsArray[i].company_Address}</SPAN><br>
                        <span class="job-experience">${jobsArray[i].company_name}</span><br>
                        <span class="job-type">${jobsArray[i].job_type}</span><br>
                        <span class="job-salery">${jobsArray[i].job_salery}</span><br>
                        <span class="job-posted">${jobsArray[i].job_Posted}</span>
                    </div>
                </article> ` 

        jobList.append(li);
        
        li.addEventListener("click",(e)=>{
            console.log(jobsArray[i]._id)
            window.location.href='/view-job.html?id='+jobsArray[i]._id
        })
    }
}