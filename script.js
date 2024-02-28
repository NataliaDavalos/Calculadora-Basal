let button = document.getElementById("btn-calcular");
let mensajeResultado = document.getElementById("Resultado");
let resultado = 0;
let resultadoDia;
let mensajeResultado2 = document.getElementById("Resultado2");
let mensajeResultado3 = document.getElementById("Resultado3");
let mensajeMetodo = document.getElementById("metodo");

button.addEventListener("click", calcular)

function calcular() {
    const input = document.getElementById("peso");
    const peso = input.value;

    if (peso <= 30) {
        mensajeMetodo.textContent = "Metodo: Holliday-Segar";

        if (peso <= 10) {
            resultado = peso * 100;
        }
        
        mensajeResultado.textContent = "Mantenimiento: " + (resultado/24) + "cc/hr";
        mensajeResultado2.textContent = "m+m/2 " + (resultadoDia * 1.5)+ " cc/hr";
        mensajeResultado3.textContent = "Volumen diario: " + resultado + "cc";
        

        // Ejemplo: peso = 15 kg
        if (peso > 10 && peso <= 20) {

            resultado = 1000 + ((peso - 10) * 50);
            resultadoDia = (resultado / 24);

        }
        mensajeResultado.textContent = "Mantenimiento: " + resultadoDia + "cc/hr";
        mensajeResultado2.textContent = "m+m/2: " + (resultadoDia * 1.5)+ " cc/hr";
        mensajeResultado3.textContent = "Volumen diario: " + resultado + "cc";

        if (peso > 20 && peso <= 30) {

            resultado = 1500 + ((peso - 20) * 20);

        }
        resultadoDia = Math.round(resultado / 24);
        mensajeResultado.textContent = "Mantenimiento: " + resultadoDia + "cc/hr";
        mensajeResultado2.textContent = "m+m/2: " + (resultadoDia * 1.5)+ " cc/hr";
        mensajeResultado3.textContent = "Volumen diario: " + resultado + "cc";

    }

    else {
        mensajeMetodo.textContent = "Metodo: Superficie Corporal";
        console.log(superficieCorporal(peso));
        resultado = (((peso * 4) + 7) / (peso + 90));
        let resultado1500 = resultado * 1500
        let resultado2000 = resultado * 2000


        mensajeResultado.textContent = "El resultado * 1500 es: " + Math.round(resultado1500) + " cc" + "El resultado * 2000 es: " + Math.round(resultado2000) + " cc";
        mensajeResultado2.textContent = "m+m/2 " + (resultadoDia * 1.5)+ " cc/hr";



    }



}

function hollidaySegar(peso) {
    return "holliday";
}

function superficieCorporal(peso) {
    return "superficie";
}