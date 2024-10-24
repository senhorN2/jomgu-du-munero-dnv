let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const palpites = document.querySelector('.palpites');
const textoAbaixo = document.querySelector('.textoAbaixo');
const envioPalpite = document.querySelector('.envioPalpite');
const campoPalpite = document.querySelector('.campoPalpite');
const botaoReiniciar = document.querySelector('.botaoReiniciar')
let contagemPalpites = 1;

palpites.textContent = "Números anteriores: ";
textoAbaixo.textContent = "< / >";

function verificarPalpite() {
    const palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = "Números anteriores: ";
    }

    palpites.textContent += palpiteUsuario + " ";

     if (palpiteUsuario === numeroAleatorio) {
        textoAbaixo.opacity = '1';
        textoAbaixo.textContent = "FINALMENTE ACERTOU!!!!!!";
        document.body.style.backgroundColor = '#549e5a';
        textoAbaixo.style.color = '#ffffff';
        textoAbaixo.style.textShadow = '0.05em 0.05em 0em #28a745, -0.05em 0.05em 0em #28a745,  0.05em -0.05em 0em #28a745, -0.05em -0.05em 0em #28a745';
        setTimeout(() => {
            textoAbaixo.style.textShadow = '0em 0em 0em black';
        }, 2000);
        setTimeout(() => {
            document.body.style.transition = 'background-color 1s ease';
            document.body.style.backgroundColor = '';
        }, 1000);
        finalizarJogo();


        } else if (contagemPalpites === 10) {
            textoAbaixo.textContent = "SEU ANIMAL!!!";
            document.body.style.backgroundColor = '#ff4a4a';
            textoAbaixo.style.opacity = '100%';
            setTimeout(() => {
                document.body.style.transition = 'background-color 0.5s ease';
                document.body.style.backgroundColor = '';
            }, 1000);
            setTimeout(() => {
                textoAbaixo.style.opacity = '0%';
            }, 2800);
            textoAbaixo.style.textShadow = '0.05em 0.05em 0em #ff4a4a, -0.05em 0.05em 0em #ff4a4a,  0.05em -0.05em 0em #ff4a4a, -0.05em -0.05em 0em #ff4a4a';
            finalizarJogo();
        } else {


            if (palpiteUsuario < numeroAleatorio) {
                textoAbaixo.textContent = "BAIXO DEMAIS!!!!!!"
                document.body.style.backgroundColor = '#ff4a4a';
                textoAbaixo.style.opacity = '100%';
                textoAbaixo.style.textShadow = '0.05em 0.05em 0em #ff4a4a, -0.05em 0.05em 0em #ff4a4a,  0.05em -0.05em 0em #ff4a4a, -0.05em -0.05em 0em #ff4a4a';
                setTimeout(() => {
                    textoAbaixo.style.textShadow = '0em 0em 0em black';
                }, 2000);
                setTimeout(() => {
                    textoAbaixo.style.opacity = '0%';
                }, 2800);
                setTimeout(() => {
                    document.body.style.transition = 'background-color 0.5s ease';
                    document.body.style.backgroundColor = '';
                }, 1000);


            } else if (palpiteUsuario > numeroAleatorio) {
                textoAbaixo.textContent = "ALTO DEMAIS!!!!!!";
                document.body.style.backgroundColor = '#ff4a4a';
                textoAbaixo.style.opacity = '100%';
                textoAbaixo.style.textShadow = '0.05em 0.05em 0em #ff4a4a, -0.05em 0.05em 0em #ff4a4a,  0.05em -0.05em 0em #ff4a4a, -0.05em -0.05em 0em #ff4a4a';
                setTimeout(() => {
                    textoAbaixo.style.textShadow = '0em 0em 0em black';
                }, 2000);
                setTimeout(() => {
                    textoAbaixo.style.opacity = '0%';
                }, 2800);
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
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    envioPalpite.style.backgroundColor = '#d3d3d3';
    envioPalpite.style.cursor = 'not-allowed';
    envioPalpite.style.boxShadow = 'none';
   }

   function reiniciarJogo() {
    contagemPalpites = 1;
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = "";
    campoPalpite.focus();
    envioPalpite.style.cursor = 'pointer';
    envioPalpite.style.backgroundColor = '#28a745';
    palpites.textContent = "Números anteriores: ";
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    document.body.appendChild(botaoReiniciar);
    const paragrafosReiniciar = document.querySelectorAll('.paragrafosResultado p');
    for (const paragrafosReiniciar of paragrafosReiniciar) {
        paragrafosReiniciar.textContent = "";
        campoPalpite.disabled = false;
        envioPalpite.disabled = false;
        campoPalpite.value = "";
        campoPalpite.focus();
        numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    }
   }