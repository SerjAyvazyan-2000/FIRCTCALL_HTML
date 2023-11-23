

const menuBg = document.querySelector('.header_menu_bg');
const menuNav = document.querySelector('.menu_block');
const burger = document.querySelector('.burger_menu');
const headerLanguage = document.querySelector('.mobile_header_language');
const labelCheek = document.querySelector('.remember_me');
const img = document.querySelector('.telephone_sales_img');

function openMenu() {
    menuNav.classList.add('active');
    burger.classList.add('active');
    menuBg.classList.add('active');
}

function closeMenu() {
    menuNav.classList.remove('active');
    menuBg.classList.remove('active');
    burger.classList.remove('active');
}

burger.addEventListener("click", function (e) {
    if (menuNav.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
});

document.addEventListener("click", function (e) {
    if (!menuNav.contains(e.target) && !burger.contains(e.target)) {
        closeMenu();
    }
});
const onMouseOut = ()=>{
    img.classList.remove('hover')

}
const mouseOver = ()=>{
    img.classList.add('hover')

}


const openSubTools = () => {
    if (headerLanguage.classList.contains('active')) {
        headerLanguage.classList.remove('active');
    } else {
        headerLanguage.classList.add('active');
    }
};

// VALIDATE INPUT


function validateForm() {
    let isValid = true;

    const fullName = document.forms["consultationForm"]["fullName"].value;
    const email = document.forms["consultationForm"]["email"].value;
    const phoneNumber = document.forms["consultationForm"]["phoneNumber"].value;

    // Очищаем сообщения об ошибках
    document.getElementById("fullNameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneNumberError").innerText = "";

    if (fullName === "") {
        document.getElementById("fullNameError").innerText = "Please enter your full name";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("emailError").innerText = "Please enter your email";
        isValid = false;
    }


    if (phoneNumber === "") {
        document.getElementById("phoneNumberError").innerText = "Please enter your phone number";
        isValid = false;
    }

    return isValid;
}

function handleSubmit(event) {
    event.preventDefault()
    if (validateForm()) {
        // Если форма валидна, обрабатываем данные (например, отправляем на сервер)
        alert("Form submitted successfully!");
    }
}
const handleChangeCheek = () => {
    console.log(labelCheek)
    if (labelCheek.classList.contains('active')) {
        labelCheek.classList.remove('active');
    } else {
        labelCheek.classList.add('active');
    }
};