$(document).ready(function () {

  let id=localStorage.getItem(`id`)
    var Catalog = $.ajax({
      url: `http://localhost:3000/user/get/${id}`,
      method: "GET"
    });
    
    Catalog.done(function (data) {
         console.log(data);
         
        $("#username").text(`${data.uname} ${data.usurname}`)
        $("#mail").val(data.umail)
        $("#password").val(data.upass)
        $("#userimage").attr("src",`http://localhost:3000/${data.photo}`)
        

        $("#changephoto").on("click", function() {
          
          
         
          
          let chphoto=document.getElementById('foto').files[0];
          
          let id=localStorage.getItem("id");
          console.log(chphoto)
          let form=new FormData()
          form.append("image",chphoto)
          form.append("id",id)
          
        
        
          $.ajax({
              type: "POST",
              url: "http://localhost:3000/user/photo",
              data: form ,
              
                cache: false,
                contentType: false,
                processData: false
          
              })
              .then(data=>{
          console.log(data) 
          
          if (data=="ok") {
              alert("Вы сменили фото.")
              
          }
          
              })


    });
    
  })
    
  })