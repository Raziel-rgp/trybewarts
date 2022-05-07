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

function check() {
  const botao = document.getElementById('submit-btn');
  const checker = document.getElementById('agreement');
  botao.disabled = true;
  botao.style.backgroundColor = 'rgb(182, 181, 181)';
  botao.style.cursor = 'progress';
  checker.addEventListener('click', () => {
    // alert('checado')
    botao.disabled = false;
    botao.style.backgroundColor = 'darkslateblue';
    botao.style.cursor = 'pointer';
  });
}
check();

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
