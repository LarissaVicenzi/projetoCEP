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
}, 50);

// Evento do botão da modal para o seu fechamento
const fecharBtn = document.querySelector('#fecharModal');
fecharBtn.onclick = () => {
    modal.classList.add('opacity-0'); //deixando no padrão do HTML - volta ao original
    modal.classList.remove('opacity-100'); 

    setTimeout(() => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}, 300);
};
}

// Função para limpar todos os campos do formulário 

export function limparCampos() {
    // Pegar o formulário 
    const form = document.querySelector('#enderecoForm');

    // Percorrer o form com um forEach para cada input
    form.querySelectorAll('input').forEach(input => input.value = '');
}

// Função para a máscara no CEP 

export function aplicarMascaraCep(inputElement) {
    // estamos pegando o que foi digitado ou colado no campo de texto
    // por ser uma entrada, essa função será executada para cada número digitado 
    inputElement.addEventListener('input', (e) =>{

    // Usando o parâmetro 'e' como target ==> cada um dos números digitados 
    let value = e.target.replace(/\D/g, '');

    if(value.length > 5){
        value = value.slice(0, 5) = '-' = value.slice(5, 8);
    }
    // atualizando a visualização do elemento input
    e.target.value = value;
    })
}