const usuarios = [
    {
        nome: 'Jorge',
        techs: ['HTML5','CSS','JS','React','React-Native']
    },
    {
        nome: 'Joelton',
        techs: ['HTML','CSS','JS','React']
    },
    {
        nome: 'Willian',
        techs: ['HTML','JS','React-Native']
    }
];

/*USUÁRIOS E TECNOLOGIAS*/
function users(u) {
    let aUser = [];
    for (let i = 0; i < u.length; i++) {
        let aTech = [];
        for (let j= 0; j < u[i].techs.length; j++) {
            aTech.push(u[i].techs[j]);
        }
        aUser.push(`${u[i].nome} trabalha com: ${aTech}`);        
    }
    return aUser;
}
console.log(users(usuarios));

/*BUSCA POR TECNOLOGIAS*/
function checaCSS(t) {
    for (let j = 0; j < t.length; j++) {
        if (t[j] === 'CSS') {
            return true;
        }
    }
}

function techs (users) {
    let uCSS = [];
    for (let i = 0; i < users.length; i++) {
        const usuarioCSS = checaCSS(users[i].techs);

        if (usuarioCSS) {
            uCSS.push(`O usuário ${users[i].nome} utiliza CSS.`)
        }
    }
    return uCSS;
}
console.log(techs(usuarios));

/*SOMA DE DESPESAS E RECEITAS*/
const clientes = [
    {
      nome: 'Salvio',
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: 'Marcio',
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: 'Lucia',
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ]

  function somaNumeros(numeros) {
      let opr = 0;
      for (let i = 0; i < numeros.length; i++) {
          opr = opr + numeros[i];
      }
      return opr;
  }

  function calculaSaldo(receitas, despesas) {
      let sumRec = somaNumeros(receitas);
      let sumDesp = somaNumeros(despesas);
      let total = sumRec - sumDesp;
      
      return total;
  }

  function clientUser(users) {
      let client = [];

      for (let i = 0; i < users.length; i++) {
          let total = calculaSaldo(users[i].receitas, users[i].despesas);

          if (total < 0) {
              client.push(`${users[i].nome}  possui saldo NEGATIVO de ${total}`)
          } else if (total > 0) {
              client.push(`${users[i].nome}  possui saldo POSITIVO de ${total}`)
          }
      }
      return client;
  }

  console.log(clientUser(clientes));