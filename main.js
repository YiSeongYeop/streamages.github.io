function enterSearch() {
    if(event.keyCode == 13){
        myFunction();  // 실행할 이벤트
    }
}
function myFunction() {
    var x = document.getElementById("bin").value;
    window.location.href = "https://yiseongyeop.github.io/streamages.github.io/" + x + ".html";
}