function moveDivBanner() {
	document.getElementById('banner').style = 'animation-name: moveBanner; animation-duration: 10s; animation-fill-mode: forwards;'
}

var users = {'admin': ['administrador', 'admin', 'admin']}

function verificarDados(user) {
	for(var i of Object.keys(users)){
		if(user == i){
			return true
		}
	}
	return false
}

function receberDadosParaLogin() {
	var email = document.getElementById('email').value
	var senha = document.getElementById('senha').value
	
	if([email, senha].indexOf('') == -1 && verificarDados(email)){
		if(users[email][2] == senha){
			alert('Login efetuado!')
		}else{
			alert("Senha incorreta!")
		}
	}else{
		alert("Usuário não encontrado!")
	}
}

function criarConta() {
	var senha = document.getElementById('senha').value
	var nome = document.getElementById('email').value
	var email = document.getElementById('email').value
	var confirme_senha = document.getElementById('senha-confirme').value
	var username = document.getElementById('username').value

	if([senha, nome, email, username, confirme_senha].indexOf('') == -1 && senha == confirme_senha && !verificarDados(email)){
		users[email] = {'nome':nome, 'username':username, 'senha': senha}
		alert("Usuário cadastrado com sucesso!")
	}else if(senha != confirme_senha){
		alert("Erro na confirmação de senha!")
	}else if(!verificarDados()){
		alert("Já existe um usuário cadastrado com esse email!")
	}else{
		alert("Preencha os dados corretamente!")
	}
}