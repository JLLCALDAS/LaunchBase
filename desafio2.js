const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
};

console.log(`A empresa ${empresa.nome} está localizada na ${empresa.endereco.rua}, ${empresa.endereco.numero}`);

const dev = {
    nome: 'Jorge',
    idade: 35,
    techs: [
        {                   
          nome: 'C++',
          espec: 'Desktop' 
        },
        {
          nome: 'JavaScript',
          espec: 'Web/Mobile'
        },
        {
          nome: 'Python',
          espec: 'Data Sciense'
        },
    ]
};

console.log(`O dev ${dev.nome} tem ${dev.idade}, e utiliza a tecnologia ${dev.techs[0].nome} com especialidade ${dev.techs[0].espec}`);