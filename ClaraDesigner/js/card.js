
const cardContainer = document.getElementById('card-container');

// Array de dados dos filmes (simulando um banco de dados)
const card_itens = [
    {
        titulo: 'Alongamento: Gel na tips',
        imagem: './img/transferir (15) (1).jpeg',
        descricao: 'Alongamento e modelagem com gel acrílico, curado por luz UV/LED, para unhas mais longas e resistentes.',
        valor:'R$100,00'
    },
    {
        titulo: 'Alongamento: Postiça realista ',
        imagem: './img/transferir (5).jpg',
        descricao: 'Alongamento e modelagem com gel acrílico, curado por luz UV/LED, para unhas mais longas e resistentes.',
        valor:'R$100,00'
    },
    {
        titulo: 'Banho de Gel',
        imagem: './img/transferir (3).jpg"',
        descricao: 'É uma técnica que cria uma camada protetora nas unhas naturais usando o mesmo gel utilizado para alongar unhas. ',
        valor:'R$100,00'
    },
    {
        titulo: 'Pedicure',
        imagem: './img/transferir (4).jpg',
        descricao: ' É um tratamento que inclui corte das unhas, remoção de cutículas, hidratação e massagem, deixando os pés renovados.',
        valor:'R$100,00'
    },
    
];

// Função para criar um card
function criarCard(card_itens) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
       
        <img class="card-img-top" src="${card_itens.imagem}" alt="Card image cap">
        <div class="card-body">
          <p class="card-text titulo_card">${card_itens.titulo}</p>
          <p class="card-text descricao">${card_itens.descricao}</p>
          <p class="card-text valor">${card_itens.valor}</p>
          <a class="a" href="https://wa.me/5571988979574?text=Olá%20,%20gostaria%20de%20mais%20informa%20%C3%A7%ões" target="_blank">Quero agendar</a>

        </div>  
          
    `;

    return card;
}

// Adicionando os cards ao container
card_itens.forEach(card_itens => {
    const novoCard = criarCard(card_itens);
    cardContainer.appendChild(novoCard);
});

