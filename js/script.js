$(document).ready(
    function () {
        $("body").css("opacity", "1");    
    }
)

//breadcrumb function
var poca_boxNodeList = document.getElementsByClassName("poca_box");
//$(".poca_box").css("border", "2px solid #b3b3b3");

var poca_subNodeList = document.getElementsByClassName("poca_sub");
//$(".poca_sub").css("background", "#b3b3b3");


var pb = poca_boxNodeList.length;
var ps = poca_subNodeList.length;
var i;
  
for (i = 0; i < ps; i++){
    poca_boxNodeList[i].onclick = function() {
        //remove styling from all breadcrumb
        $(".poca_box").css("border", "2px solid #b3b3b3");
        $(".poca_sub").css("background", "#b3b3b3");

        //add styling to clicked breadcrumb
        var child = this.firstElementChild;
        child.style.background = "#0073B1";

        var parent = child.parentElement;
        parent.style.border = "2px solid #0073B1"; //code valid up till this point :)
      
    }

    
}
//end of breadcrumb function



//projects hover function
var animatedBoxNodeList = document.getElementsByClassName("animated-box");
var lb = animatedBoxNodeList.length;
var j;

for (j = 0; j < lb; j++) {

    animatedBoxNodeList[j].onmouseover = function () {
    //now refer to child (live-btn)
        var liveBtn = this.lastElementChild;
    liveBtn.style.opacity = "1";  
    }

    animatedBoxNodeList[j].onmouseout = function () {
    //now refer to child (live-btn)
    var liveBtn = this.lastElementChild;
    liveBtn.style.opacity = "0";  
    }
}
//end of projects hover function


//field identifier function 
var inputsNodeList = document.getElementsByClassName("input"); 
var inputs_length = inputsNodeList.length;
var n;
for (n = 0; n < inputs_length; n++) {
    inputsNodeList[n].onfocus = function () {
        var field = this.parentElement;
        input = field.lastElementChild;

        input.style.border = "1px solid #005bb1";
        input.style.borderLeft = "none";

        var identifier = field.firstElementChild;
        identifier.style.width = "4px";
    }
    
    inputsNodeList[n].onblur = function () {
        var field = this.parentElement;
        input = field.lastElementChild;

        input.style.border = "1px solid #005bb142";
        input.style.borderLeft = "1px solid #005bb142";

        var identifier = field.firstElementChild;
        identifier.style.width = "0px";
   }
}
function extendTextArea() {
    $("#message-area").css("height", "300px");
    $("#textarea").css("border", "1px solid #005bb1");
}
function contractTextArea() {
    $("#message-area").css("height", "40px")
    $("#textarea").css("border", "1px solid #005bb142");
}
//end of identifier function


//braedcrumb triggered functions
function GoToHome() {
    $("#homepage").css("margin-left", "0");
    $("body").css("background", "white");

    //set animation to current and clear animation from every other animated element
    $(".role").css("animation", ".5s slideUp linear both");
    $(".salute").css("animation", ".5s slideUp2 linear both");
    $("#p1").css("animation", "");
    $("#content").css("animation", "");
    $(".animated-box").css("animation", "");
}
function GoToAbout() {
    $("#homepage").css("margin-left", "-20%");
    $("body").css("background", "#005bb1");

    //bug fix from clicking "see more" on welcome page
    $(".poca_box").css("border", "2px solid #b3b3b3");
    $(".poca_sub").css("background", "#b3b3b3");
    $("#br2").css("border", "2px solid #0073B1");
    $("#br-in-2").css("background", "#0073B1");
    //end of bug fix

    //set animation to current and clear animation from every other animated 
    $(".role").css("animation", "");
    $(".salute").css("animation", "");
    $("#p1").css("animation", "2s slideUp linear both");
    $("#content").css("animation", "");
    $(".animated-box").css("animation", "");
}
function GoToEducation() {
    $("#homepage").css("margin-left", "-40%");
    $("body").css("background", "white");

    //set animation to current and clear animation from every other animated 
    $(".role").css("animation", "");
    $(".salute").css("animation", "");
    $("#p1").css("animation", "");
    $("#content").css("animation", "2s slideUp linear both");
    $(".animated-box").css("animation", "");
}
function GoToProjects() {
    $("#homepage").css("margin-left", "-60%");
    $("body").css("background", "#005bb1");

    //set animation to current and clear animation from every other animated 
    $(".role").css("animation", "");
    $(".salute").css("animation", "");
    $("#p1").css("animation", "");
    $("#content").css("animation", "");
    $("#proj-ani-1").css("animation", ".9s popout linear .4s both");
    $("#proj-ani-2").css("animation", ".9s popout linear .8s both");
    $("#proj-ani-3").css("animation", ".9s popout linear 1.2s both");
    $("#proj-ani-4").css("animation", ".9s popout linear 1.6s both");
    $("#proj-ani-5").css("animation", ".9s popout linear 2s both");
    $("#proj-ani-6").css("animation", ".9s popout linear 2.4s both");
}
function GoToContact() {
    $("#homepage").css("margin-left", "-80%");
    $("body").css("background", "white");

    //set animation to current and clear animation from every other animated 
    $(".animated-box").css("animation", "");


}





