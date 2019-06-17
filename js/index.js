$(document).ready(function () {


$("#rmenu").on("click", function() {
    location.href="./Cnews.html"
})
function ok(){
    $.ajax({
        type: "get",
        url: "http://localhost:3000/news/all/2000/0",  
        
})
.then(data=>{
    
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
})