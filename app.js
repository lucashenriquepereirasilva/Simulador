/**
 *  Simulador dos operadores lógicos AND - OR - NOT 
 *  @author Lucas henrique pereira silva
 */

let receive; // Armazena o parâmetro (valor) recebido do HTML
// As variáveis abaixo são usadas para identificar se o interruptor está ligado ou desligado
// (false = desligado | true = ligado)
let sw1 = false;
let sw2 = false;
// A variável abaixo é usada para identificar se a lâmpada está quebrada
let sw3 = false;

function sw(receive) {

    // Lógica para alternar os estados dos interruptores
    if (receive === 1 && sw1 === false) {
        document.getElementById('sw1').src = "img/swon.png";
        sw1 = true;
    } else if (receive === 1 && sw1 === true) {
        document.getElementById('sw1').src = "img/swoff.png";
        sw1 = false;
    }

    if (receive === 2 && sw2 === false) {
        document.getElementById('sw2').src = "img/swon.png";
        sw2 = true;
    } else if (receive === 2 && sw2 === true) {
        document.getElementById('sw2').src = "img/swoff.png";
        sw2 = false;
    }

    // Lógica para a lâmpada quebrada (NOT)
    if (receive === 3) {
        let som = new Audio(); // Cria um objeto de áudio
        som.src = "sound/glassbreaking.wav";
        som.play();
        // Troca a imagem da lâmpada para "broken.jpg" (quebrada)
        document.getElementById('lamp').src = "img/broken.jpg";
        sw3 = true; // A lâmpada agora está quebrada
    }

    // Lógica para controle da lâmpada
    if (sw3 === true) {
        // Se a lâmpada estiver quebrada, não importa o estado dos interruptores
        return;
    }

    // Lógica para operador AND (a lâmpada acende apenas se ambos os interruptores estiverem ligados)
    if (sw1 === true && sw2 === true) {
        document.getElementById('lamp').src = "img/on.jpg";
    } 
    // Lógica para operador OR (a lâmpada acende se pelo menos um interruptor estiver ligado)
    else if (sw1 === true || sw2 === true) {
        document.getElementById('lamp').src = "img/on.jpg";
    }
    // Se nenhum dos interruptores estiver ligado, a lâmpada ficará desligada
    else {
        document.getElementById('lamp').src = "img/off.jpg";
    }
}
