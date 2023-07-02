let submit = document.getElementById("feedback-submit");
let input = document.getElementById("feedback-input");
let submission = document.getElementById("feedback-submission");
let submit = document.getElementById("feedback-submit");
const submitButton = document.getElementById("submitButton");

submit.addEventListener("click", ()=>{
    if(input.value.length<=0){
        console.log("please enter a valid name");
        return;
    }
    if(input.value.length>200){
        console.log("please enter the minimum characters");
        return;
    } 

})

// function render(){
//     let p = document.createElement("p");
//     p.classList.remove("feedback-submit")
//     p.classList.add("add")
//     p.innerHTML="Thank You For Your Valuable Feedback";
//     submission.appendChild(p);
//     input.value="" ; 
// }
submision.addEventListener("click", ()=>{
    console.log("hi")
})
console.log(submitButton)