const perguntas = [
    {
      pergunta: "O que é agronegócio?",
      respostas: [
        "Um sistema de produção agrícola voltado exclusivamente para subsistência.",
        "Apenas o conjunto de atividades de produção agrícola nas fazendas.",
        "Um conjunto de operações de produção e distribuição de suprimentos agrícolas, produção nas fazendas, processamento de produtos e sua distribuição.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual país é o maior produtor de soja do mundo?",
      respostas: [
        "Estados Unidos",
        "Brasil",
        "Argentina",
      ],
      correta: 1
    },
    {
      pergunta: "O que caracteriza a agricultura de precisão?",
      respostas: [
        "Uso intensivo de mão de obra.",
        "Aplicação de técnicas agrícolas antigas e tradicionais.",
        "Uso de tecnologias como GPS, sensores e sistemas de informação para aumentar a eficiência da produção agrícola.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual desses produtos é um dos principais itens do agronegócio brasileiro para exportação?",
      respostas: [
        "Café",
        "Soja",
        "Trigo",
      ],
      correta: 1
    },
    {
      pergunta: "O que são commodities agrícolas?",
      respostas: [
        "Produtos agrícolas diferenciados por qualidade e marca.",
        "Produtos agrícolas com preço definido pela qualidade.",
        "Produtos agrícolas básicos, padronizados e com preço definido pelo mercado global.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é uma prática comum em sistemas de agricultura sustentável?",
      respostas: [
        "Uso intensivo de fertilizantes químicos.",
        "Rotação de culturas para manter a saúde do solo.",
        "Desmatamento para expansão agrícola.",
      ],
      correta: 1
    },
    {
      pergunta: "Em que consiste a silvicultura dentro do contexto do agronegócio?",
      respostas: [
        "Cultivo exclusivo de plantas ornamentais.",
        "Produção intensiva de monoculturas agrícolas.",
        "Cultivo de florestas para fins comerciais, como madeira e papel.",
      ],
      correta: 2
    },
    {
      pergunta: "O que significa a sigla 'IBGE' no contexto do agronegócio brasileiro?",
      respostas: [
        "Instituto Brasileiro de Geografia e Estatística",
        "Instituição Brasileira de Garantia do Exportador",
        "Instituto Brasileiro de Gestão e Economia",
      ],
      correta: 0
    },
    {
      pergunta: "Qual dessas tecnologias NÃO é comumente associada ao agronegócio moderno?",
      respostas: [
        "Inteligência Artificial",
        "Drones para mapeamento de lavouras",
        "Máquinas de escrever para controle de estoque",
      ],
      correta: 2
    },
    {
      pergunta: "O Brasil é um dos maiores exportadores mundiais de qual desses produtos?",
      respostas: [
        "Chá",
        "Carne bovina",
        "Azeite de oliva",
      ],
      correta: 1
    },
  ];
  
    // vai procurar pela tag id quiz 
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
    // loop ou laço de repetição
  for(const item of perguntas) {
    // ta clonando o template
    const quizItem = template.content.cloneNode(true)
    // modificando o h3, para ficar igual o que quer (pergunta)
    quizItem.querySelector('h3').textContent = item.pergunta
    // loop ou laço de repetição
  for(let resposta of item.respostas) {
    //pesquisando tudo que tem dentro do dl e dt e clonando
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    // quer colocar dentro do span, um texto que é a resposta feita a cima
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    } 
    
    // coloca na tela
    quizItem.querySelector('dl').appendChild(dt)
  }
    // remove a "Resposta A" da tela
    quizItem.querySelector('dl dt').remove()
    // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }