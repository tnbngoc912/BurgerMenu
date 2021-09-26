
(function () {

const toggle = document.getElementById('toggle');
const overlay = document.getElementById('overlay');
const btnCloseSidebar = document.getElementsByClassName('wrapper-icon-close');
const buttonContainer = document.getElementsByClassName('header__container-filter');
const overlayMask = document.getElementsByClassName('overlay-mask');
var coll = document.getElementsByClassName("collapsible");
var i;


var toggleClick = () => {
    overlay.classList.add('open')
overlayMask[0].classList.add('enabled');
buttonContainer[0].classList.add('active');
}

var handleClickCloseSidebar = () => {
    overlay.classList.remove('open');
    buttonContainer[0].classList.remove('active');
    overlayMask[0].classList.remove('enabled');
}

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
        content.style.display = "none";
        } else {
        content.style.display = "block";
        }
    });
    }


toggle.addEventListener('click', toggleClick);
btnCloseSidebar[0].addEventListener("click", handleClickCloseSidebar);

})();