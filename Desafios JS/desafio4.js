const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
  }

  function createTransaction(transaction) {
      user.transactions.push(transaction);

      user.balance = user.balance + alterBalance(transaction);
  }

  function alterBalance(tr) {
      let value = 0;
      if (tr.type == 'credit') {
          value = tr.value;
      } else if (tr.type == 'debit') {
          value = tr.value * -1;
      }
      return value;
  }

  function getHigherTransactionByType(type) {  
    let vlrMaximo = 0;
    const ftType = tp => tp.type == type;
    let max = Math.max.apply(null,user.transactions.filter(ftType).map(m => m.value));
    const filter = user.transactions.filter(ftType);

    for (let higher = 0; higher < filter.length; higher++) {    
        if (filter[higher].value == max) {
            vlrMaximo = filter[higher];
        }
    }
    console.log(vlrMaximo);
  }

  function getAverageTransactionValue() {
      const sum = user.transactions.reduce((a, b) => {return a + b.value},0);
      console.log(sum / user.transactions.length);
  }

  function getTransactionsCount() {
    const typeCredit = tpc => tpc.type == 'credit';
    const typeDebit = tpd => tpd.type == 'debit';
    const countCredit = user.transactions.filter(typeCredit).length;
    const countDebit = user.transactions.filter(typeDebit).length;

    console.log(`credit: ${countCredit}, debit: ${countDebit}`);
  }

  createTransaction({type: 'credit', value: 5.50});
  createTransaction({type: 'credit', value: 12.00});  
  createTransaction({type: 'credit', value: 4.00});  
  createTransaction({type: 'debit', value: 4.85});
  createTransaction({type: 'debit', value: 2.25});  

  console.log(user);

  getHigherTransactionByType('credit');
  getHigherTransactionByType('debit');

  getAverageTransactionValue();

  getTransactionsCount();