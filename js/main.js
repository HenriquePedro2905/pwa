document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('submit-btn');

    formLogin.addEventListener('click', (event) => {
        event.preventDefault();

        let modal = document.getElementById('modal');

        let name = document.getElementById('name').value;
        let city = document.getElementById('city').value
        let namePrint = document.getElementById('namePrint');
        let cityPrint = document.getElementById('cityPrint');

        if(name !== "" && city !== ""){
            namePrint.innerText = `seu nome: ${name}`;
            cityPrint.innerText = `sua cidade: ${city}`;;
            modal.showModal();
        }
    });
});

function fecharModal(){
    let formLogin = document.getElementById('login-form');
    let modal = document.getElementById('modal');

    modal.close();
    formLogin.reset();
}