function enviarContacto() {
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");
    if (!nombre.value) {
        alert("Por favor, ingresa tu nombre.");
    }
    if (!email.value) {
        alert("Por favor, ingresa tu email.");
    }
    if (!mensaje.value) {
        alert("Por favor, ingresa tu mensaje.");
    }
    if (nombre.value && email.value && mensaje.value) {
        alert("Gracias por tu mensaje!");
    }
    nombre.value = "";
    email.value = "";
    mensaje.value = "";
}

function mouseEnterImg() {
    document.getElementById("profilePic").classList.add("profile-pic-hover");
}

function mouseLeaveImg() {
    document.getElementById("profilePic").classList.remove("profile-pic-hover");
    
}