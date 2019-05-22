/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function saludar(){
    alert("Hola Mundo!");
}

function convertir(id_elem, valor_elem){

    if(isNaN(valor_elem)){
        alert("El valor de "+id_elem+" debe ser numerico.");
        document.getElementById(id_elem).value = '';
    }

    if(!isNaN(valor_elem)){
        if(id_elem=='metro'){
            document.getElementById("pulgada").value = valor_elem*39.3701;
        }
    }

}