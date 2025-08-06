document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();

  // Pega valores do formulário
  const nome = document.getElementById('nome').value.trim();
  const idade = parseInt(document.getElementById('idade').value);
  const alturaCm = parseFloat(document.getElementById('altura').value);
  const peso = parseFloat(document.getElementById('peso').value);
  const sexo = document.getElementById('sexo').value;
  const objetivo = document.getElementById('objetivo').value;
  const atividade = document.getElementById('atividade').value;

  // Calcula IMC (peso / altura² em metros)
  const alturaM = alturaCm / 100;
  const imc = peso / (alturaM * alturaM);

  // Calcula TMB (usando fórmula de Harris-Benedict simplificada)
  let tmb;
  if (sexo === 'masculino') {
    tmb = 88.36 + (13.4 * peso) + (4.8 * alturaCm) - (5.7 * idade);
  } else {
    tmb = 447.6 + (9.2 * peso) + (3.1 * alturaCm) - (4.3 * idade);
  }

  // Salva tudo no localStorage para a outra página ler
  localStorage.setItem('nome', nome);
  localStorage.setItem('idade', idade);
  localStorage.setItem('peso', peso);
  localStorage.setItem('altura', alturaM.toFixed(2)); // salvar em metros formatado
  localStorage.setItem('sexo', sexo);
  localStorage.setItem('objetivo', objetivo);
  localStorage.setItem('atividade', atividade);
  localStorage.setItem('imc', imc.toFixed(2));
  localStorage.setItem('tmb', Math.round(tmb));

   // Redireciona para a página de resultados
    window.location.href = 'resultado.html';
  });

