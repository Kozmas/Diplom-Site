$(document).ready(function () {

    $("#sozsob").on("click", function() {
        let name=$("#nazv").val()
        let startdate=$("#startdate").val()
        let enddate=$("#enddate").val()
        let opisanie=$("#opis").val()
        console.log(opisanie)
        let chphoto=document.getElementById('foto').files[0];
        
        let id=localStorage.getItem("id");
console.log(chphoto)
        let form=new FormData()
        form.append("title",name)
        form.append("dateend",enddate)
        form.append("datestart",startdate)
        form.append("image",chphoto)
        form.append("description",opisanie)
        form.append("id",id)
        
      
      
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/ivents/add",
            data: form ,
            
              cache: false,
              contentType: false,
              processData: false
             
            
    })
    .then(data=>{
console.log(data) 

if (data=="ok") {
    alert("Событие создано!")
    
}

    })




    })
})