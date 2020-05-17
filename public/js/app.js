//pontuacao dos jogadores
var pontuacao = [0, 0];
//pontuacao da rodada atual
var pontuacaoRodada = 0;
//jogador atual
var jogadorAtual = 0;
var dado = Math.floor(Math.random() * 6) + 1;
var passado = [0, 0]

//document.querySelector('#pontuacao-rodada-0').textContent = dado;
var botaoLancarDado = document.querySelector("#botao-lancar-dado");


var pontuacaoRodada0 = document.querySelector('#pontuacao-rodada-0');
var pontuacaoRodada1 = document.querySelector('#pontuacao-rodada-1');
var pontuacaoGlobal0 = document.querySelector('#pontuacao-global-0');
var pontuacaoGlobal1 = document.querySelector('#pontuacao-global-1');
var valorDado = document.querySelector('#valor-dado');

var pontuacoesGlobais = [pontuacaoGlobal0, pontuacaoGlobal1];
var pontuacoesRodadas = [pontuacaoRodada0, pontuacaoRodada1];
// BOTAO LANCAR DADO
botaoLancarDado.addEventListener("click", function () {
     var dado = Math.floor(Math.random() * 6) + 1;
     valorDado.textContent = dado;
     if (dado == 1 && passado[1 - jogadorAtual] != 1) {

          pontuacoesRodadas[jogadorAtual].textContent = 0;
          pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
          passado[jogadorAtual] = 1;
          jogadorAtual = 1 - jogadorAtual;
     }
     else if (dado == 1 && passado[1 - jogadorAtual] == 1) {
          console.log("RESULTADO DO JOGO: ");
          console.log(pontuacao)
          console.log("JOGADOR 1: " + pontuacao[0]);
          console.log("JOGADOR 2: " + pontuacao[1]);
          var winner;
          if (pontuacao[0] > pontuacao[1]) {
               winner = 0;
          } else {
               winner = 1;
          }
          Swal.fire({
               title: 'Parabens JOGADOR' + (winner + 1),
               text: "Vc venceu esta partida",
               icon: 'success',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Novo Jogo ?'
          }).then((result) => {
               if (result.value) {
                    newGame();
               }
          })
     }
     else {
          pontuacao[jogadorAtual] += dado;
          pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
          pontuacoesRodadas[jogadorAtual].textContent = dado;
     }
})
// BOTAO PASSAR A VEZ
var botaoPassarVez = document.querySelector('#botao-passar-vez');
botaoPassarVez.addEventListener("click", function () {
     passAway();
});
// BOTAO NOVO JOGO
var botaoNovoJogo = document.querySelector('#botao-novo-jogo');
botaoNovoJogo.addEventListener("click", function () {
     newGame();
})
function newGame() {
     console.log("NOVO JOGO INICIADO");
     // TIMER PRA SORTEAR PRIMEIRO JOGADOR :)
     let timerInterval
     Swal.fire({
          title: 'Sortendo o JOGADOR!',
          html: 'E o novo jogador sera sorteado em <b></b> milisegundos',
          timer: 2000,
          timerProgressBar: true,
          onBeforeOpen: () => {
               Swal.showLoading()
               timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                         const b = content.querySelector('b')
                         if (b) {
                              b.textContent = Swal.getTimerLeft()
                         }
                    }
               }, 100)
          },
          onClose: () => {
               clearInterval(timerInterval)
          }
     }).then((result) => {
          pontuacao = [0, 0];
          passado = [0, 0];
          pontuacaoRodada = 0;
          pontuacoesGlobais[0].textContent = 0;
          pontuacoesGlobais[1].textContent = 0;

          pontuacoesRodadas[0].textContent = 0;
          var random = Math.random() * 10;
          jogadorAtual = (random > 5) ? 1 : 0;
          console.log(random)
          pontuacoesRodadas[1].textContent = 0;
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
               Swal.fire({
                    title: 'E o JOGADOR Sorteado E...!',
                    html: 'Jogador' + (jogadorAtual + 1) + ", Pode INICIAR O JOGO :)",

               })
          }
     })
}
function passAway() {
     if (passado[1 - jogadorAtual] === 1) {
          Swal.fire('Cuidado Jogador ' + (jogadorAtual + 1) + " Vc nao pode passar a vez!")
     }else{

          console.log("JOGADOR " + jogadorAtual);
          console.log("PASSA A VEZ PARA:");
          passado[jogadorAtual] = 1;
          jogadorAtual = 1 - jogadorAtual;
          console.log("JOGADOR: " + (jogadorAtual + 1));
          Swal.fire(
               'O JOGADOR' + ((1 - jogadorAtual) + 1) + " PASSOU a  vez para o JOGADOR" + (jogadorAtual + 1),
               'Sera que foi uma boa escolha ?',
               'question'
          )
     }
}
function endGame(){

}