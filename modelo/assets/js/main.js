function creatTable() {
  let number = document.getElementById("number").value;
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${number} x ${i} = ${number * i}\n`;
  }
  document.getElementById("table").textContent = result;
}

document.getElementById("botao-gerar-tabela").addEventListener("click", creatTable);