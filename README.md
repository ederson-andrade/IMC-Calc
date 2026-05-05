# Calculadora de IMC

Uma aplicação React simples para calcular o Índice de Massa Corporal (IMC) com base na altura e peso fornecidos pelo usuário.

## Funcionalidades

- Formulário para inserir altura (em metros) e peso (em kg)
- Validação de entrada
- Cálculo do IMC com simulação de carregamento
- Exibição do resultado e classificação do IMC com cores indicativas (verde para normal, laranja para quase, vermelho para extremos)
- Dicas rápidas personalizadas para cada categoria
- Avisos médicos para casos de baixo peso ou obesidade
- Interface responsiva para desktop, tablet e mobile (incluindo modo paisagem)

## Classificações do IMC

- Abaixo de 17: Abaixo do peso (vermelho) - Com aviso médico
- 17 - 18.5: Quase abaixo do peso (laranja)
- 18.5 - 24.9: Peso normal (verde)
- 25 - 27: Quase acima do peso (laranja)
- 27 - 30: Sobrepeso (vermelho) - Com aviso médico
- 30 ou mais: Obesidade (vermelho) - Com aviso médico

## Como executar

1. Instale as dependências: `npm install`
2. Execute o servidor de desenvolvimento: `npm run dev`
3. Abra o navegador em `http://localhost:5176`

## Tecnologias utilizadas

- React
- Vite
- CSS para estilização responsiva

Site desenvolvido por Ederson Andrade. 2026
