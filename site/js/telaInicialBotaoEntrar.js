const buttonEntrar = document.querySelector(".botaoEntrar")

if (sessionStorage.getItem("logado") === "true") {
    buttonEntrar.textContent = "Logado"

} else {
    buttonEntrar.textContent = "Entrar"
}