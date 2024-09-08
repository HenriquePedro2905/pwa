document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('login-form');
    const formRegister = document.getElementById('registerForm');
    const apiUrl = "http://localhost:8080";

    formLogin.addEventListener('click', (event) => {
        event.preventDefault();

        let modal = document.getElementById('modal');

        const name = document.getElementById('name').value;
        const city = document.getElementById('city').value
        let namePrint = document.getElementById('namePrint');
        let cityPrint = document.getElementById('cityPrint');

        if(name !== "" && city !== ""){
            namePrint.innerText = `seu nome:${name}`;
            cityPrint.innerText = `sua cidade:${city}`;;
            modal.showModal();
        }
    });
});

function fecharModal(){
    let modal = document.getElementById('modal');

    modal.close()
}