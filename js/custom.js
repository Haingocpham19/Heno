//click ontop
var fixed = document.querySelector('.fixed');
var mybutton = document.getElementById("back-to-top");
window.onscroll = function() {
  scrollFunction()
};

// Bind your button click, scroll direction and effect speed
document.getElementById("back-to-top").onclick = function() {
  topFunction(); 
}
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    fixed.style.boxShadow = "0 0 6px #2c1818";
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
    fixed.style.boxShadow = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;  
  document.documentElement.scrollTop = 0;
}
//click show menu mobile
document.getElementById("btn-more-ne").addEventListener("click", function(e) {
    let check = document.querySelector('.more-menu').style.display;
    if(check==="block"){
      ShowHideMenuMobile();
    }
    else{
      ShowMoreMenuMobile();
    }
})
function ShowMoreMenuMobile(){
  document.querySelector('.more-menu').setAttribute("style","display:block !important;");
}
function ShowHideMenuMobile(){
  document.querySelector('.more-menu').setAttribute("style","display:none !important;");
}