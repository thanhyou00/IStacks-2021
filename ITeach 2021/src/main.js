

    var like =1;
// check like #2f3542  #1e90ff
function checklike() {
    var x = document.querySelectorAll("#check");
    var i;
    for (i = 0; i < x.length; i++) {
      if(like%2==0) {
        x[i].style.color = "#2f3542";
      } else{
        x[i].style.color = "#1e90ff";  
      }
    }
    like++;
}