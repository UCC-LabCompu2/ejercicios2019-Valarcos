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

function convertir(unidad, valor){

    if(isNaN(valor)){
        alert("Se ingreso un valor invalido en " + unidad);
        document.lasUnidades.yarda.value = "";
        document.lasUnidades.metro.value = "";
        document.lasUnidades.pulgada.value = "";
        document.lasUnidades.pie.value = "";
    } else if (unidad == "metro") {
        document.lasUnidades.pulgada.value = valor * 39.3701;
        document.lasUnidades.pie.value = valor * 3.28084;
        document.lasUnidades.yarda.value = valor * 1.09361;
    } else if (unidad == "pulgada") {
        document.lasUnidades.metro.value = valor * 0.0254;
        document.lasUnidades.pie.value = valor * 0.08333;
        document.lasUnidades.yarda.value = valor * 0.027778;
    } else if (unidad == "pie") {
        document.lasUnidades.metro.value = valor * 0.3048;
        document.lasUnidades.pulgada.value = valor * 12;
        document.lasUnidades.yarda.value = valor * 0.333333;
    } else if (unidad == "yarda") {
        document.lasUnidades.metro.value = valor * 0.9144;
        document.lasUnidades.pulgada.value = valor * 36;
        document.lasUnidades.pie.value = valor * 3;
    }
    /*if(isNaN(valor_elem)){
            alert("El valor de "+id_elem+" debe ser numerico.");
            document.getElementById(id_elem).value = '';
        }

        if(!isNaN(valor_elem)){
            if(id_elem=='metro'){
                document.getElementById("pulgada").value = valor_elem*39.3701;
            }
        }*/

}

function suma(){
    document.opeMat.sum_total.value= Number(document.opeMat.sum_num1.value) + Number(document.opeMat.sum_num2.value)
}

function resta(){
    document.opeMat.res_total.value= Number(document.opeMat.res_num1.value) - Number(document.opeMat.res_num2.value)
}

function mult(){
    document.opeMat.mul_total.value= Number(document.opeMat.mul_num1.value) * Number(document.opeMat.mul_num2.value)
}
function div(){
    document.opeMat.div_total.value= Number(document.opeMat.div_num1.value) / Number(document.opeMat.div_num2.value)
}

function gradosRad(id_elem, valor){
    if (id_elem=="grados"){
        document.getElementById("radianes").value= valor*Math.PI/180;
    }
    if (id_elem=="radianes"){
        document.getElementById("grados").value= valor*180/Math.PI;
    }
}

function mostOcultDiv(id_elem){
    if (id_elem=="ocultarDiv"){
        document.getElementById("unDiv").style.display= 'none';
        /*con esta linea previa estoy modificando el estilo del display del elemento
        * que esta seleccionado por el id*/
    }
    if (id_elem=="mostrarDiv"){
        document.getElementById("unDiv").style.display= 'block';
    }
}