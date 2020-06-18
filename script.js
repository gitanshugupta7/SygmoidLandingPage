document.getElementById("service1").addEventListener("click",function() {
    document.getElementById("service1exp").textContent = "Ideation was clicked 1";
    document.getElementById("service2exp").textContent = "Ideation was clicked 2";
    document.getElementById("service3exp").textContent = "Ideation was clicked 3";
    document.getElementById("service1").style.color = "#ffaa34";
    document.getElementById("service2").style.color = "black";
    document.getElementById("service3").style.color = "black";
    document.getElementById("service4").style.color = "black";

    document.getElementById("service3exp").style.color = "black";
    document.getElementById("service3exp").style.boxShadow = "0px 0px 0px 0px";
    document.getElementById("service3exp").style.border = "1px solid #e0e7ea";

});
document.getElementById("service2").addEventListener("click",function() {
    document.getElementById("service1exp").textContent = "p&p was clicked 1";
    document.getElementById("service2exp").textContent = "p&p was clicked 2";
    document.getElementById("service3exp").textContent = "p&p was clicked 3";
    document.getElementById("service1").style.color = "black";
    document.getElementById("service2").style.color = "#ffaa34";
    document.getElementById("service3").style.color = "black";
    document.getElementById("service4").style.color = "black";

    document.getElementById("service3exp").style.color = "black";
    document.getElementById("service3exp").style.boxShadow = "0px 0px 0px 0px";
    document.getElementById("service3exp").style.border = "1px solid #e0e7ea"; 

});
document.getElementById("service3").addEventListener("click",function() {
    document.getElementById("service1exp").textContent = "p&e  was clicked 1";
    document.getElementById("service2exp").textContent = "p&e  was clicked 2";
    document.getElementById("service3exp").textContent = "p&e  was clicked 3";
     document.getElementById("service1").style.color = "black";
    document.getElementById("service2").style.color = "black";
    document.getElementById("service3").style.color = "#ffaa34";
    document.getElementById("service4").style.color = "black";

    document.getElementById("service3exp").style.color = "black";
   document.getElementById("service3exp").style.boxShadow = "0px 0px 0px 0px";
   document.getElementById("service3exp").style.border = "1px solid #e0e7ea";

});
document.getElementById("service4").addEventListener("click",function() {
    document.getElementById("service1exp").textContent = "D&E was clicked";
    document.getElementById("service2exp").textContent = "D&E was clicked 2";
    document.getElementById("service3exp").textContent = "D&E was clicked 3";
   document.getElementById("service1").style.color = "black";
    document.getElementById("service2").style.color = "black";    
     document.getElementById("service3").style.color = "black";
    document.getElementById("service4").style.color = "#ffaa34";

    document.getElementById("service3exp").style.color = "black";
    document.getElementById("service3exp").style.boxShadow = "0px 0px 0px 0px";
    document.getElementById("service3exp").style.border = "1px solid #e0e7ea";

});
document.getElementById("service1exp").addEventListener("click", function(){
    document.getElementById("service1exp").style.color = "#0a6cf4";
    document.getElementById("service2exp").style.color = "black";
    document.getElementById("service3exp").style.color = "black";

    document.getElementById("service1exp").style.border = "0px";
    document.getElementById("service2exp").style.border = "1px solid #e0e7ea";
    document.getElementById("service3exp").style.border = "1px solid #e0e7ea";

    document.getElementById("service1exp").style.boxShadow = "0px 0px 34px 0px rgba(0, 0, 0, 0.08)";
    document.getElementById("service2exp").style.boxShadow = "0px 0px 0px 0px";
    document.getElementById("service3exp").style.boxShadow = "0px 0px 0px 0px";

    document.getElementById("service_image").style.backgroundImage = "url('')";
})
document.getElementById("service2exp").addEventListener("click", function(){
    document.getElementById("service2exp").style.color = "#0a6cf4";
    document.getElementById("service1exp").style.color = "black";
    document.getElementById("service3exp").style.color = "black";
    document.getElementById("service_image").style.backgroundImage = "url('')";

    document.getElementById("service2exp").style.border = "0px";
    document.getElementById("service1exp").style.border = "1px solid #e0e7ea";
    document.getElementById("service3exp").style.border = "1px solid #e0e7ea";

    document.getElementById("service2exp").style.boxShadow = "0px 0px 34px 0px rgba(0, 0, 0, 0.08)";
    document.getElementById("service1exp").style.boxShadow = "0px 0px 0px 0px";
    document.getElementById("service3exp").style.boxShadow = "0px 0px 0px 0px";

})
document.getElementById("service3exp").addEventListener("click", function(){
    document.getElementById("service3exp").style.color = "#0a6cf4";
    document.getElementById("service1exp").style.color = "black";
    document.getElementById("service2exp").style.color = "black";
    document.getElementById("service_image").style.backgroundImage = "url('')";

    document.getElementById("service3exp").style.border = "0px";
    document.getElementById("service1exp").style.border = "1px solid #e0e7ea";
    document.getElementById("service2exp").style.border = "1px solid #e0e7ea";

    document.getElementById("service3exp").style.boxShadow = "0px 0px 34px 0px rgba(0, 0, 0, 0.08)";
    document.getElementById("service1exp").style.boxShadow = "0px 0px 0px 0px";
    document.getElementById("service2exp").style.boxShadow = "0px 0px 0px 0px";

});
document.getElementById("transform1").addEventListener("click", function(){
   document.getElementById("transformtxt1").textContent = "ai coe 1";
   document.getElementById("transformtxt2").textContent = "ai coe 2";
   document.getElementById("transformtxt3").textContent = "ai coe 3";
   document.getElementById("transformtxt4").textContent = "ai coe 4"; 
//    document.getElementById("transform_image").style.backgroundImage = "url('')";
   document.getElementById("transform1").style.color = "#0a6cf4";
   document.getElementById("transform2").style.color = "black";
   document.getElementById("transform3").style.color = "black";

   document.getElementById("transform1").style.fontFamily = "ProximaBold";
   document.getElementById("transform1").style.borderBottom = "2px solid #0a6cf4";

   document.getElementById("transform2").style.fontFamily = "ProximaRegular";
   document.getElementById("transform2").style.borderBottom = "0px";

   document.getElementById("transform3").style.fontFamily = "ProximaRegular";
   document.getElementById("transform3").style.borderBottom = "0px";

   
});
document.getElementById("transform2").addEventListener("click", function(){
   document.getElementById("transformtxt1").textContent = "rpa ai 1";
   document.getElementById("transformtxt2").textContent = "rpa ai 2";
   document.getElementById("transformtxt3").textContent = "rpa ai 3";
   document.getElementById("transformtxt4").textContent = "rpa ai 4"; 
//    document.getElementById("transform_image").style.backgroundImage = "url('')";
   document.getElementById("transform2").style.color = "#0a6cf4";
   document.getElementById("transform1").style.color = "black";
   document.getElementById("transform3").style.color = "black";

   document.getElementById("transform2").style.fontFamily = "ProximaBold";
   document.getElementById("transform2").style.borderBottom = "2px solid #0a6cf4";

   document.getElementById("transform1").style.fontFamily = "ProximaRegular";
   document.getElementById("transform1").style.borderBottom = "0px";

   document.getElementById("transform3").style.fontFamily = "ProximaRegular";
   document.getElementById("transform3").style.borderBottom = "0px";
   
});
document.getElementById("transform3").addEventListener("click", function(){
   document.getElementById("transformtxt1").textContent = "business ai 1";
   document.getElementById("transformtxt2").textContent = "business ai 2";
   document.getElementById("transformtxt3").textContent = "business ai 3";
   document.getElementById("transformtxt4").textContent = "business ai 4"; 
//    document.getElementById("transform_image").style.backgroundImage = "url('')";
   document.getElementById("transform3").style.color = "#0a6cf4";
   document.getElementById("transform1").style.color = "black";
   document.getElementById("transform2").style.color = "black";

   document.getElementById("transform3").style.fontFamily = "ProximaBold";
   document.getElementById("transform3").style.borderBottom = "2px solid #0a6cf4";

   document.getElementById("transform2").style.fontFamily = "ProximaRegular";
   document.getElementById("transform2").style.borderBottom = "0px";

   document.getElementById("transform1").style.fontFamily = "ProximaRegular";
   document.getElementById("transform1").style.borderBottom = "0px";
});
document.getElementById("solution1").addEventListener("click", function(){
    document.getElementById("solution1").style.color = "#0a6cf4";
    document.getElementById("solution2").style.color = "black";
    document.getElementById("solution3").style.color = "black";
    document.getElementById("solution_image").style.backgroundImage = "url('')";
    
    document.getElementById("solution1").style.fontFamily = "ProximaBold";
    document.getElementById("solution1").style.borderBottom = "2px solid #0a6cf4";
 
    document.getElementById("solution2").style.fontFamily = "ProximaRegular";
    document.getElementById("solution2").style.borderBottom = "0px";
 
    document.getElementById("solution3").style.fontFamily = "ProximaRegular";
    document.getElementById("solution3").style.borderBottom = "0px";

});
document.getElementById("solution2").addEventListener("click", function(){
    document.getElementById("solution2").style.color = "#0a6cf4";
    document.getElementById("solution1").style.color = "black";
    document.getElementById("solution3").style.color = "black";
    document.getElementById("solution_image").style.backgroundImage = "url('')";

    document.getElementById("solution2").style.fontFamily = "ProximaBold";
    document.getElementById("solution2").style.borderBottom = "2px solid #0a6cf4";
 
    document.getElementById("solution1").style.fontFamily = "ProximaRegular";
    document.getElementById("solution1").style.borderBottom = "0px";
 
    document.getElementById("solution3").style.fontFamily = "ProximaRegular";
    document.getElementById("solution3").style.borderBottom = "0px";
});
document.getElementById("solution3").addEventListener("click", function(){
    document.getElementById("solution3").style.color = "#0a6cf4";
    document.getElementById("solution1").style.color = "black";
    document.getElementById("solution2").style.color = "black";
    document.getElementById("solution_image").style.backgroundImage = "url('')";

    document.getElementById("solution3").style.fontFamily = "ProximaBold";
    document.getElementById("solution3").style.borderBottom = "2px solid #0a6cf4";
 
    document.getElementById("solution2").style.fontFamily = "ProximaRegular";
    document.getElementById("solution2").style.borderBottom = "0px";
 
    document.getElementById("solution1").style.fontFamily = "ProximaRegular";
    document.getElementById("solution1").style.borderBottom = "0px";
});

document.getElementById("adoption1").addEventListener("click", function(){
    document.getElementById("adoptiontxt1").textContent = "E&B 1";
    document.getElementById("adoptiontxt2").textContent = "E&B 2";
    document.getElementById("adoptiontxt3").textContent = "E&B 3";
    document.getElementById("adoption_image").style.backgroundImage = "url('')";
    document.getElementById("adoption1").style.color = "#0a6cf4";
    document.getElementById("adoption2").style.color = "black";
    document.getElementById("adoption3").style.color = "black";
    document.getElementById("adoption4").style.color = "black";

    

});

document.getElementById("adoption2").addEventListener("click", function(){
    document.getElementById("adoptiontxt1").textContent = "SE 1";
    document.getElementById("adoptiontxt2").textContent = "SE 2";
    document.getElementById("adoptiontxt3").textContent = "SE 3";
    document.getElementById("adoption_image").style.backgroundImage = "url('')";
    document.getElementById("adoption2").style.color = "#0a6cf4";
    document.getElementById("adoption1").style.color = "black";
    document.getElementById("adoption3").style.color = "black";
    document.getElementById("adoption4").style.color = "black";
});

document.getElementById("adoption3").addEventListener("click", function(){
    document.getElementById("adoptiontxt1").textContent = "DS 1";
    document.getElementById("adoptiontxt2").textContent = "DS 2";
    document.getElementById("adoptiontxt3").textContent = "DS 3";
    document.getElementById("adoption_image").style.backgroundImage = "url('')";
    document.getElementById("adoption3").style.color = "#0a6cf4";
    document.getElementById("adoption1").style.color = "black";
    document.getElementById("adoption2").style.color = "black";
    document.getElementById("adoption4").style.color = "black";
});

document.getElementById("adoption4").addEventListener("click", function(){
    document.getElementById("adoptiontxt1").textContent = "NT 1";
    document.getElementById("adoptiontxt2").textContent = "NT 2";
    document.getElementById("adoptiontxt3").textContent = "NT 3";
    document.getElementById("adoption_image").style.backgroundImage = "url('')";
    document.getElementById("adoption4").style.color = "#0a6cf4";
    document.getElementById("adoption1").style.color = "black";
    document.getElementById("adoption3").style.color = "black";
    document.getElementById("adoption2").style.color = "black";
});

document.getElementById("pluslogo").onmouseover = function(){
    document.getElementById("plusdisplay").style.display = "inline-block";
};