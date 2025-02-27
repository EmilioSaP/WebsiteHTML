/*console.log("Hola desde JavaScript!1!!!")
confirm("Permitir virus?")*/

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("submitBtn").addEventListener("click", function () {

        let email = document.getElementById("exampleInputEmail1").value;
        let password = document.getElementById("exampleInputPassword1").value;

        if (email === "admin" && password === "password") {                     // EMAIL = asmin        // PASSWORD = password
            window.location.href = "./styles/index.html"; // RIr a index.html
        } else {
            alert("Contraseña o usuario incorrecto");
        }
    });
});
//funcionaa
//