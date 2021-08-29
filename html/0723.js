window.onload=function() {
    
}
function displayAppPic() {
    document.getElementById("app_tooltip_qrcode").innerHTML="<img src=\"images/imgapp.png\">";
    document.getElementById("app_tooltip_qrcode").style.display="";
}
function picMove() {
    document.getElementById("app_tooltip_qrcode").innerHTML="";
    document.getElementById("app_tooltip_qrcode").style.display="none";
}
function bgcChange() {
    document.getElementById("btnbaidu").style.background="rgb(62, 126, 214)";
}
function bgcRecovery() {
    document.getElementById("btnbaidu").style.background="#38f";

    
}