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
