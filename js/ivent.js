$(document).ready(function (){


    $("#rmenu").on("click", function() {
        location.href="./Cevent.html"
    })

function ok(){
    $.ajax({
        type: "get",
        url: "http://localhost:3000/ivents/all/2000/0",  
        
})
.then(data=>{
    for(let i=0; i<data.length;i++){
        data[i]['idatestart']=dateFormat(data[i]['idatestart'])
        data[i]['idateend']=dateFormat(data[i]['idateend'])
    }
    console.log(data)
    var json = JSON.parse(JSON.stringify({data:data}));
     
    var rawTamplate = document.getElementById("SearchData").innerHTML;
    var compiledTamplate = Handlebars.compile(rawTamplate);
    var genHTML = compiledTamplate(json);
     
  
    var Catalog = document.getElementById("cont");
    Catalog.innerHTML = genHTML;



})

}

ok()

function dateFormat(date) {
    return moment(date).format('DD.MM.YYYY');
  }

  $(document).on("click",".signin",function() {
      let iid=$(this).attr("iid")
      let uid=localStorage.getItem("id")
    $.ajax({
        type: "GET",
        url: `http://localhost:3000/ivents/join/${iid}/${uid}`
        
})

.then(data=>{
    if(data=="ok"){
        alert("Вы записаны.")
    }
})
})
})
