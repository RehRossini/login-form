//função de pegar o elemento de showPass e abrir ou fechar o olho
function showPass(){
    const eye = document.getElementById('olho');
    const eyeSlash = document.getElementById('olho-barra');
    const fieldPass = document.getElementById('field-password');

    if(eye.style.display === 'none'){
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fieldPass.type = 'text';
    } else{
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fieldPass.type = 'password';
    }
};


//Evita que a página recarregue e mostra um alert
document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault();
    alert('Logado!')
})