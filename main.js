function enterSearch() {
    if(event.keyCode == 13){
        myFunction();  // 실행할 이벤트
    }
}
function myFunction() {
    var x = document.getElementById("bin").value;
    window.location.href = "http://192.168.0.20/" + x + ".html";
}