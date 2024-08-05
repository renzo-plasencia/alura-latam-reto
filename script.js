let palabraEncriptar = ''; //Palabra para encriptar
let palabraDesencriptar = ''; //Palabra para desencriptar

function obtener_input(id){
    let texto;
    texto = document.getElementById(id).value;
    return texto;
}

function encriptar(palabra_entrada){
    let nuevaPalabra = '';

    for (let i = 0; i < palabra_entrada.length; i++){
        switch (palabra_entrada[i]){
            case 'a':
                nuevaPalabra = nuevaPalabra + 'ai';
                break;

            case 'e':
                nuevaPalabra = nuevaPalabra + 'enter';    
                break;

            case 'i':
                nuevaPalabra = nuevaPalabra + 'imes';
                break;

            case 'o':
                nuevaPalabra = nuevaPalabra + 'ober';    
                break;

            case 'u':
                nuevaPalabra = nuevaPalabra + 'ufat';
                break;

            default:
                nuevaPalabra = nuevaPalabra + palabra_entrada[i];
                break;
        }
    }

    return nuevaPalabra;
}

function encriptarTexto(){
    let palabraOriginal;
    let palabraEncriptada;

    palabraOriginal = obtener_input('input_text');
    palabraEncriptada = encriptar(palabraOriginal);
    mostrarTexto(palabraEncriptada)
}

function desencriptar(palabra_entrada){
    let nuevaPalabra;
    nuevaPalabra = palabra_entrada
        .replace(/ai/g,'a')
        .replace(/enter/g,'e')
        .replace(/imes/g,'i')
        .replace(/ober/g,'o')
        .replace(/ufat/g,'u');

    return nuevaPalabra;
}

function desencriptarTexto(){
    let palabraOriginal;
    let palabraDesencriptada;

    palabraOriginal = obtener_input('input_text');
    palabraDesencriptada = desencriptar(palabraOriginal);
    mostrarTexto(palabraDesencriptada)
}

function mostrarTexto(palabraCambio){
    if (palabraCambio != ""){
        document.getElementById('mensaje-final__content_id').style.display = "none"
        document.getElementById('mensaje-final__encript_id').style.display = "block"
        document.querySelector('#mensaje-final__texto').innerHTML = palabraCambio;
    } else {
        document.getElementById('mensaje-final__encript_id').style.display = "none"
        document.getElementById('mensaje-final__content_id').style.display = "flex"
    }
}
 
const copiarText = async () => {
    try {
        let texto = document.getElementById('mensaje-final__texto').innerHTML;
        if (texto != ''){
            document.getElementById('mensaje-final__texto').select();
            document.getElementById('mensaje-final__texto').setSelectionRange(0, 99999);
            await navigator.clipboard.writeText(texto);
        }
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}

