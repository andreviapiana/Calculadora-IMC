import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { notANumber, calculateIMC } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = function(event) {
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

    if (weightOrHeightIsNotANumber) {
        AlertError.open();
        return;
    }

    AlertError.close();

    const result = calculateIMC(weight, height);
    displayResultMessage(result);
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`;
    Modal.message.innerText = message;

    if (result < 15) {
        Modal.weightMessage.innerText = "Você está abaixo do peso!"
    } else if (result >=15 && result <25) {
        Modal.weightMessage.innerText = "Você está no peso ideal!"
    } else if (result >=25 && result <30) {
        Modal.weightMessage.innerText = "Você está levemente acima do peso!"
    } else if (result >=30 && result <35) {
        Modal.weightMessage.innerText = "Você está com obesidade grau 1!"
    } else if (result >=35 && result <40) {
        Modal.weightMessage.innerText = "Você está com obesidade grau 2!"
    } else {
        Modal.weightMessage.innerText = "Tá gordão hein?! Bora pra academia!"
    }

    Modal.open();

}

//Fechar a janela de erro ao digitar no campo
inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();