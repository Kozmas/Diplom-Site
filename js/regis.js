$(document).ready(function () {

    $("#regis").on("click", function() {
        let email=$("#email").val()
        let name=$("#name").val()
        let surname=$("#fam").val()
        let password=$("#userPassword").val()

        let form=new FormData()
        form.append("name",name)
        form.append("email",email)
        form.append("password",password)
        form.append("surname",surname)
      
      
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/user/reg",
            data: form ,
            
              cache: false,
              contentType: false,
              processData: false
             
            
    })
    .then(data=>{
console.log(data) 
if(data=="ok"){
    location.href="./login.html"
} 

if(data=="user exists"){
    alert("Пользователь уже существует")
}




    })




    })
})


