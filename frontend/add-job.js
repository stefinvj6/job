import axios from "axios";

const form = document.getElementById("form")

form.addEventListener("submit", (e) => {   
    e.preventDefault();

        const company_logo=form["company_logo"];
        const company_name=form["company_name"];
        const job_role=form["job_role"];
        const job_salery=form["job_salery"];
        const job_type=form["job_type"];
        const job_requirements=form["job_requirements"];
        const job_description=form["job_description"];
        const contact_number=form["contact_number"];
        const company_Address=form["company_Address"];
        const about=form["about"];
        const job_Posted=form["job_Posted"];


        const newJob = {
            company_logo:company_logo.value,
            company_name:company_name.value,
            job_role:job_role.value,
            job_salery:job_salery.value,
            job_type:job_type.value,
            job_requirements:job_requirements.value,
            job_description:job_description.value,
            contact_number:contact_number.value,
            company_Address:company_Address.value,
            about:about.value,
            job_Posted:job_Posted.value
        }

        const addJob  = (newJob) =>{
            axios.post("http://localhost:6302/jobo",newJob )
            .then(response =>{
                console.log(response)
            })
            .catch(err =>{
                console.log(err);
            })
        }      

    addJob(newJob)

    console.log(newJob)
    
    form.reset()
})