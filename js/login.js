$(document).ready(function () {

    $("#login").on("click", function() {
        let email=$("#email").val()
        let password=$("#userPassword").val()
        

        let form=new FormData()
        form.append("password",password)
        form.append("email",email)
        
      
      
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/user/login",
            data: form ,
            
              cache: false,
              contentType: false,
              processData: false
             
            
    })
    .then(data=>{

    
console.log(data) 
if(data!="no user"){
    localStorage.setItem("id", data.uid);
    location.href="./index.html"
    
}

 
    })




    })
    $("#regis").on("click", function() {
        location.href="./reg.html"
    })
})

