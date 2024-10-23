let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const palpites = document.querySelector('.palpites');
const textoAbaixo = document.querySelector('.textoAbaixo');
const envioPalpite = document.querySelector('.envioPalpite');
const campoPalpite = document.querySelector('.campoPalpite');
let contagemPalpites = 1;
let botaoReiniciar;

function verificarPalpite() {
    const palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = "Números anteriores: ";
    }

    palpites.textContent += palpiteUsuario + " ";

     if (palpiteUsuario === numeroAleatorio) {
        textoAbaixo.textContent = "finalmente acertou";
        document.body.style.backgroundColor = '#549e5a';
        setTimeout(() => {
            document.body.style.transition = 'background-color 1s ease';
            document.body.style.backgroundColor = '';
        }, 1000);
        finalizarJogo();
        } else if (contagemPalpites === 10) {
            textoAbaixo.textContent = "SEU ANIMAL!!!";
            finalizarJogo();
        } else {
            if (palpiteUsuario < numeroAleatorio) {
                textoAbaixo.textContent = "BAIXO DEMAIS!!!!!!"
                document.body.style.backgroundColor = '#ff4a4a';
                setTimeout(() => {
                    document.body.style.transition = 'background-color 0.5s ease';
                    document.body.style.backgroundColor = '';
                }, 1000);
            } else if (palpiteUsuario > numeroAleatorio) {
                textoAbaixo.textContent = "ALTO DEMAIS!!!!!!";
                document.body.style.backgroundColor = '#ff4a4a';
                setTimeout(() => {
                    document.body.style.transition = 'background-color 0.5s ease';
                    document.body.style.backgroundColor = '';
                }, 1000);
            }
        }

        contagemPalpites++;
        campoPalpite.value = "";
        campoPalpite.focus();
   }

   envioPalpite.addEventListener('click', verificarPalpite)

   function finalizarJogo() {
    campoPalpite.disable = true;
    envioPalpite.disable = true;
    botaoReiniciar = document.createElement('button');
    document.body.appendChild(botaoReiniciar);
    botaoReiniciar.addEventListener('click', reiniciarJogo);
   }


   function reiniciarJogo() {
    contagemPalpites = 1;
    const paragrafosReiniciar = document.querySelectorAll('.paragrafosResultado p');
    for (const paragrafosReiniciar of paragrafosReiniciar) {
        paragrafosReiniciar.textContent = "";
    }

    botaoReiniciar.parentNode.removeChild(botaoReiniciar);
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = "";
    campoPalpite.focus();
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
   }