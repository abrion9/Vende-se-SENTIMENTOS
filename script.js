// Método simples
const titulo = document.createElement("h1");
titulo.textContent = "Vende-se Sentimentos";
document.body.appendChild(titulo);

// Método complexo
const produto = document.createElement("div");
produto.classList.add("produto");

const nome = document.createElement("h2");
nome.textContent = "Vende-se Sentimentos";
produto.appendChild(nome);

const descricao = document.createElement("p");
descricao.textContent = `
Sente-se sozinho? Triste? Ansioso?

Não se preocupe, eu posso ajudá-lo!

Estou vendendo meus sentimentos!

Tenho uma grande variedade de sentimentos à sua disposição, incluindo:

Amor
Alegria
Paz
Esperança
Cura
Força
Proteção
Coragem
E muito mais!
`;
produto.appendChild(descricao);

const preco = document.createElement("p");
preco.textContent = "R$ 9,90";
produto.appendChild(preco);

// Adicionando o produto ao DOM
document.body.appendChild(produto);
