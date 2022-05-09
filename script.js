//  03)
function login() {
  const botao = document.getElementById('submit');
  const inputEmail = document.getElementById('email');
  const inputSenha = document.getElementById('senha');
  const email = 'tryber@teste.com';
  botao.addEventListener('click', () => {
    // console.log('tipo input email: ',typeof inputEmail.value);
    // console.log('email: ',inputEmail.value);
    // console.log('tipo input senha: ',typeof inputSenha.value);
    // console.log('senha: ',parseInt(inputSenha.value));
    if (inputEmail.value === email && inputSenha.value === '123456') {
      alert('Olá, Tryber!');
    } else alert('Email ou senha inválidos.');
  });
}
login();

// 18)
function check() {
  const botao = document.getElementById('submit-btn');
  const checker = document.getElementById('agreement');
  botao.disabled = true;
  checker.addEventListener('click', () => {
    if (checker.checked === true) {
      botao.disabled = false;
      botao.style.backgroundColor = 'darkslateblue';
      botao.style.cursor = 'pointer';
    } else {
      botao.disabled = true;
      botao.style.backgroundColor = 'rgb(182, 181, 181)';
      botao.style.cursor = 'not-allowed';
    }
  });
}
check();

// 20)
function contador() {
  const text = document.getElementsByTagName('textarea')[0];
  const cont = document.getElementById('counter');
  text.addEventListener('keyup', () => {
    const valores = text.value.length;
    cont.innerText = (500 - valores);
    // console.log('valores: ', text.value.length );
    // console.log('contador: ', 500-valores);
  });
}
contador();

// 21)
// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const casa = document.getElementById('house');
const familia = document.querySelectorAll('#input');
let valor = '';
const materias = document.querySelectorAll('.subject');
const valorMaterias = [];
const avaliacao = document.querySelectorAll('.input');
let nota = '';
const obs = document.getElementById('textarea');
const botao = document.getElementById('submit-btn');
const form = document.getElementById('evaluation-form');

function forFamilia() {
  for (let index = 0; index < familia.length; index += 1) {
    if (familia[index].checked === true) {
      valor = familia[index].value;
    }
  }
}

function forMaterias() {
  for (let index = 0; index < materias.length; index += 1) {
    if (materias[index].checked === true) {
      valorMaterias.push(` ${materias[index].value}`);
    }
  }
}

function exibir() {
  botao.addEventListener('click', () => {
    forFamilia();
    forMaterias();
    for (let index = 0; index < avaliacao.length; index += 1) {
      if (avaliacao[index].checked === true) {
        nota = avaliacao[index].value;
      }
    }
    while (form.firstChild) { form.removeChild(form.firstChild); }
    const p = document.createElement('p');
    p.innerText = `Nome: ${nome.value} ${sobrenome.value}\n Email: ${email.value}
    Casa: ${casa.value}\n Família: ${valor} \n Matérias: ${valorMaterias} \n Avaliação: ${nota}\n
    Observações: ${obs.value}`;
    form.append(p);
  });
}
exibir();
