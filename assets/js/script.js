
document.getElementById("years_exp").innerHTML= "34";
document.getElementById("domains_served").innerHTML= "7+";
document.getElementById("monthly_consultants").innerHTML= "100+";
document.getElementById("database").innerHTML= "3M+";
document.getElementById("valued_customers").innerHTML= "15+";

function FunctionValidation() {
    let company_name = document.getElementById("comp_name").value;
    let user_name = document.getElementById("name").value;
    let user_number = document.getElementById("number").value;
    let user_email = document.getElementById("email").value;
    let user_massage = document.getElementById("input_massage").value;


    if (company_name === "") {
        document.getElementById("c_name").innerHTML="Please Write Your Company Name !";
    } else {
        document.getElementById("c_name").style.display="none";
    } 
    if(user_name === "") {
        document.getElementById("u_name").innerHTML="Please Write Your Name !";
    } else {
        document.getElementById("u_name").style.display="none";
    } 
    if(user_number === "") {
        document.getElementById("u_number").innerHTML="Please Write Your Number !";
    } else {
        document.getElementById("u_number").style.display="none";
    } 
    if (user_email === "") {
        document.getElementById("u_email").innerHTML="Please Write Your Email Address !";
    } else {
        document.getElementById("u_email").style.display="none";
    }
    if (user_massage === "") {
        document.getElementById("text-aria").innerHTML="Please Write Your Summary max-10 woeds !";
    } else {
        document.getElementById("text-aria").style.display="none";
    }
}


// navbar toggle responsive

function navtoggle() {

    let nav = document.getElementById("main_navbar");

    if (nav.style.display == "flex") {
        nav.style.display="none";
    } else {
        nav.style.display="flex"
    }
}