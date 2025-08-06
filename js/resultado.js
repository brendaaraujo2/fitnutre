document.getElementById("btnIA").addEventListener("click", function () {
  const imc = document.getElementById("imc").textContent;
  const gasto = document.getElementById("gasto").textContent;

  // Dados simulados ou recuperados do sessionStorage
  const nome = "Brenda";
  const idade = sessionStorage.getItem("idade") || "30";
  const sexo = sessionStorage.getItem("sexo") || "feminino";
  const peso = sessionStorage.getItem("peso") || "67.1";
  const altura = sessionStorage.getItem("altura") || "1.56";
  const treino = sessionStorage.getItem("diasTreino") || "5";
  const estiloTreino = "leve, com foco em musculação e esteira";
  const objetivo = "perder gordura sem perder massa muscular";
  const foco = "gordura localizada na barriga e nas costas";
  const focoTreino = "musculação e esteira, com treinos leves e focados em resistência";

  const preferencias = [
    "Inclui carne vermelha na dieta",
    "Evita pasta de amendoim",
    "Prefere refeições noturnas leves",
    "Faz iogurte e coalhada caseiros",
    "Costuma treinar após o café da manhã"
  ];

  const mensagem = `Olá! Gostaria de uma dieta personalizada com base nos meus dados abaixo:

👤 **Nome**: ${nome}  
🎂 **Idade**: ${idade}  
⚧️ **Sexo**: ${sexo}  
⚖️ **Peso**: ${peso} kg  
📏 **Altura**: ${altura} m
🏋️‍♂️ **Treino**: ${focoTreino}  
🏋️‍♀️ **Estilo de treino**: ${estiloTreino}  
📆 **Dias de treino por semana**: ${treino}  
🎯 **Objetivo**: ${objetivo}  
📍 **Foco**: ${foco}

📊 **IMC**: ${imc}  
🔥 **Gasto calórico diário estimado**: ${gasto} kcal

🍽️ **Preferências alimentares**:
${preferencias.map(p => `• ${p}`).join('\n')}

Por favor, monte um plano alimentar equilibrado e saudável, com sugestões de refeições leves à noite, e que ajude a alcançar esse objetivo sem comprometer a massa muscular.`;

  navigator.clipboard.writeText(mensagem).then(() => {
    alert("Mensagem copiada! Agora é só colar no ChatGPT.");
    window.open("https://chat.openai.com/", "_blank");
  }).catch(err => {
    alert("Erro ao copiar mensagem. Tente novamente.");
    console.error(err);
  });
});
