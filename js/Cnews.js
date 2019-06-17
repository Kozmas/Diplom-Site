$(document).ready(function () {

    $("#post").on("click", function() {
        let title=$("#zagol").val()
        let discription=$("#text").val()
        let id=localStorage.getItem("id");

        let form=new FormData()
        form.append("title",title)
        form.append("discription",discription)
        form.append("user_id",id)
        
      
      
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/news/add",
            data: form ,
            
              cache: false,
              contentType: false,
              processData: false
             
            
    })
    .then(data=>{

    
console.log(data) 
if(data!="no user"){
 localStorage.setItem("id", data.uid);
    //location.href="./index.html"
    
}

 
    })




    })
    
})

