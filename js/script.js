let userName = prompt("Как вас зовут?").toLowerCase().trim();
if (userName === "alex") {
   let numderCash = +prompt("Номер счёта?").trim();
   if (numderCash === 7777) {
      let balans = 10000;
      let chekBalans = confirm("Вы хотите узнать баланс");
      if (chekBalans === true) {
         alert(`Bаш баланс ${balans}`);
         let drop = confirm(`Вы хотите обналичить денги?`);
         if (drop === true) {
            let cashDrop = +prompt("Сколько обналичить?");
            if (cashDrop <= balans) {
               alert("Все хорошо!");
               alert(`Вы сняли ${cashDrop} баксов `);
               let cashtotal = balans - cashDrop;
               alert(`У вас в балансе ${cashtotal}`);
            } else {
               alert("Недостаточно средств!");
            }
         } else {
            alert("Пока!");
         }
      } else {
         let drop = confirm(`Вы хотите обналичить денги?`);
         if (drop === true) {
            let cashDrop = +prompt("Сколько обналичить?");
            if (cashDrop <= balans) {
               alert("Все хорошо!");
               alert(`Вы сняли ${cashDrop} баксов `);
               let cashtotal = balans - cashDrop;
               alert(`У вас в балансе ${cashtotal}`);
            } else {
               alert("Недостаточно средств!");
            }
         } else {
            alert("Пока!");
         }
      }
   } else {
      alert("Пользователь не был найден!");
   };
} else {
   alert("Пользователь не был найден!");
};