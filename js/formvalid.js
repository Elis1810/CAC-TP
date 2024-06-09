/*
const form = document.getElementById('formnew')
const nombre = document.getElementById('nombrenew')
const apellido = document.getElementById('apellidonew')
const email = document.getElementById('emailnew')

form.addEventListener ('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl= element.parentElement;
    const errorDisplay = inputControl.queryselector('#error');
    errorDisplay.innerText = message;
    inputControl.classlist.add('error');
    inputControl.classlist.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.queryselector('.error');
    errorDisplay.innerText = '';
    inputControl.classlist.add('success');
    inputControl.classlist.remove('error');
}

const validateInputs = () => {
    const nombrevalue = nombre.value.trim();
    const apellidovalue = apellido.value.trim();
    const emailvalue = email.value.trim();

    if (nombrevalue === ''){
        setError(nombre, 'El nombre es requerido');
    } else {
        setSuccess(nombre)
    }

}
*/
function validationform(){
    document.getElementById("errorp").innerHTML=""
    if(document.formfill.nombrenew.value ==""){
        document.getElementById("errorp").innerHTML="Por favor ingresa un nombre para enviar el mensaje";
        
    }
    if(document.formfill.apellidonew.value ==""){
        document.getElementById("errorp").innerHTML=document.getElementById("errorp").innerHTML + "<br>Por favor ingresa un apellido para enviar el mensaje";
    
    }
    if(document.formfill.emailnew.value ==""){
        document.getElementById("errorp").innerHTML=document.getElementById("errorp").innerHTML + "<br>ingresa un Email para contactarnos para enviar el mensaje";
    
    }
    if(document.formfill.telnew.value ==""){
        document.getElementById("errorp").innerHTML=document.getElementById("errorp").innerHTML + "<br>ingresa un telefono para que podamos contactarte";
    
    }
    if(document.formfill.comentarioform.value ==""){
        document.getElementById("errorp").innerHTML=document.getElementById("errorp").innerHTML + "<br>Por favor ingresa un comentario para que podamos ayudarte cuando te contactemos";
    
    }
    return false;
}