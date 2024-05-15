var btn_on = document.getElementById("btn-on");
var btn_off = document.getElementById("btn-off");
var img_on_bulb = document.getElementById("img_on_bulb");

btn_on.addEventListener("click" , function(){
     img_on_bulb.src = "images-bulb/bulb-on-yellow-removebg-preview.png";
    });
btn_off.addEventListener("click" , function(){
     img_on_bulb.src = "images-bulb/bulb-off-removebg-preview.png";
})