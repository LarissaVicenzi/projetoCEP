// Importação das funções
import { mostrarModal, aplicarMascaraCep } from "./utils.js";

// Elementos básicos do DOM
const buscarCepBtn = document.querySelector('#buscarCep');
const enderecoForm = document.querySelector('#enderecoForm');
const cepInput = document.querySelector('#cep');
const mostrarDados = document.querySelector('#mostrarDados');

// Chamas a função aplicar máscara 
aplicarMascaraCep(cepInput);

