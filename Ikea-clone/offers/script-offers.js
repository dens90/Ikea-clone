const bodyContainer = document.querySelector('.body-container');
const footer = document.getElementById("footer");
let userBtn = document.getElementById("user-btn");
let closeSide = document.getElementById("close-side");
let shareBtn = document.getElementById("share");
let closeSidebarCta = document.getElementById("close-cta-sidebar");


/* Open when someone clicks on the hamburger */
function openNav() {
    document.getElementById("sideNav").style.width = "480px";
    bodyContainer.style.opacity = '.40';
    bodyContainer.style.display = 'block';
}

function openNav2() {
    document.getElementById("sideNav").style.width = "100%";
    bodyContainer.style.opacity = '.40';
    bodyContainer.style.display = 'block';
}


/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("sideNav").style.width = "0%";
    bodyContainer.style.opacity = '1';
    bodyContainer.style.display = 'none';
}
//menu destra cliccando condividi

function openCta() {
    document.getElementById("cta-sidebar").style.width = "460px";
    document.getElementById("cta-sidebar").style.padding = "0 3rem 2rem 3rem";
    bodyContainer.style.opacity = '.40';
    bodyContainer.style.display = 'block';
}

function closeCta() {
    document.getElementById("cta-sidebar").style.width = "0";
    document.getElementById("cta-sidebar").style.padding = "0";
    bodyContainer.style.opacity = '1';
    bodyContainer.style.display = 'none';
}

shareBtn.addEventListener("click", openCta);
closeSidebarCta.addEventListener("click", closeCta);
bodyContainer.addEventListener("click", closeCta);

//icone cta sulla sinistra compaiono e cambiano colore allo sroll

window.onscroll = function () { CTA() };
let startingHeight = document.documentElement.scrollHeight - footer.clientHeight - window.innerHeight;

function CTA() {
    if (document.documentElement.scrollTop <= document.documentElement.scrollHeight / 3) {
        document.getElementById("white").style.display = "flex";
        document.getElementById("white").style.height = "fit-content";
        document.getElementById("go-up").style.display = "none";
        document.getElementById("black").style.display = "none";
    } else if (document.documentElement.scrollTop > document.documentElement.scrollHeight / 3 && document.documentElement.scrollTop < startingHeight) {
        document.getElementById("white").style.height = "100px";
        document.getElementById("white").style.display = "flex";
        document.getElementById("go-up").style.display = "flex";
        document.getElementById("black").style.display = "none";
    } else if (document.documentElement.scrollTop >= startingHeight){
        document.getElementById("white").style.display = "none";
        document.getElementById("black").style.display = "flex";
        document.getElementById("go-up").style.display = "flex";
    }
}



// Menu da destra , cliccando profilo

function open() {
    document.getElementById("user-side").style.width = "400px";
    bodyContainer.style.opacity = '.40';
    bodyContainer.style.display = 'block';
}

function close() {
    document.getElementById("user-side").style.width = "0";
    bodyContainer.style.opacity = '1';
    bodyContainer.style.display = 'none';
}


userBtn.addEventListener("click", open);
closeSide.addEventListener("click", close);
bodyContainer.addEventListener("click", close);
bodyContainer.addEventListener("click", closeNav);


class Registration {
    constructor(email, password, name, surname, nationality) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.nationality = nationality;
    }
}
let data = [];
function addUser(mail, password, name, surname, nation) {
    let registration = new Registration(mail, password, name, surname, nation);
    data.push({ mail, password, name, surname, nation });
    console.log(data);
}
let password = document.querySelector('input[type="password"]');
function controlPass() {
    let errore = document.getElementById("errore");
    let passValue = document.querySelector('input[type="password"]').value;
    if (passValue.length <= 8) {
        errore.innerHTML = "Minimo 8 caratteri";
        errore.style.display = "block";
        errore.style.fontFamily = "bold";
    } else {
        errore.style.display = "none";
        errore.innerHTML = "";
    }
}
password.addEventListener("focusout", controlPass);
let confirmPass = document.getElementById("confirm");
confirmPass.addEventListener("focusout", (e) => {
    let equalPass = document.getElementById("equal-pass");
    let confirmValuePass = document.getElementById("confirm").value;
    let passValue = document.querySelector('input[type="password"]').value;
    if (passValue != confirmValuePass) {
        equalPass.style.display = "block";
        equalPass.innerHTML = "Invalid password";
    } else {
        equalPass.style.display = "none";
        equalPass.innerHTML = "";
    }
});
const btn = document.getElementById("button");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    let mail = document.querySelector('input[type="email"]').value;
    let password = document.querySelector('input[type="password"]').value;
    let name = document.querySelector('input[name="name"]').value;
    let surname = document.querySelector('input[name="surname"]').value;
    let nation = document.querySelector("#country").value;
    addUser(mail, password, name, surname, nation);
    localStorage.setItem("users", JSON.stringify(data));
});
let answer = document.getElementById("excuse");
let local = localStorage.getItem("users");
let obj = JSON.parse(local);
if (obj[0].mail === "dens90@hotmail.it") {
    answer.innerHTML = "sei gia registrato";
}
let mail = document.getElementById("mail").value;
let idMail = document.getElementById("mail");


const errorDOM = document.getElementById('error');
const validateEmail = (mail) => {
    const email_regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return mail === "" ? "empty" : email_regex.test(String(mail).toLowerCase());
};
idMail.addEventListener('blur', (e) => {
    e.preventDefault();
    let valueMail = document.getElementById('mail').value;
    let result = validateEmail(valueMail);
    errorDOM.innerText = result === "empty" ? "Enter an email address" : result ? 'Email valid' : 'Email invalid';
})
