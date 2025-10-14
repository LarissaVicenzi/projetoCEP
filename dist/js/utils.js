// Função para normalização do CEP - será usada quando formos buscar o cep 
// Remove tudo aquilo que não é número e deixa fixo em 8 carcteres 
// D = qualquer tipo de caracter que não seja um número | g = global 

export function limparCep(valor){
    return valor.replace(/\D/g, '').slice(0,8)
}

// Função para montar o modal 

export function mostrarModal(mensagem){

// Recuperar a Modal do HTML
const modal = document.querySelector('#alertModal');
// Recuperar o elemento p que receberá as mensagens de erro 
const mensagemElemento = document.querySelector ('#alertMessage');

// Atualizar as mensagens quando o usuário cometer algum erro 
mensagemElemento.textContent = mensagem;

// Exibir a modal
modal.classList.remove('hidden');
modal.classList.add('flex');

// Criando a função de tempo para fazer o efeito de opacidade
setTimeout(() => {
    modal.classList.remove('opacity-0');
    modal.classList.add('opacity-100');
}, 50)
}