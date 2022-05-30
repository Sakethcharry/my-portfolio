
//  Change Navbar Color on scroll 

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.backgroundColor = "white";
    }
    else {
        document.getElementById("navbar").style.backgroundColor = "transparent";

    }
}

const scriptURL = '.'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thanks for Contacting..! Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
})