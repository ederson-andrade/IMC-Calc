import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [imc, setImc] = useState(null)
  const [classification, setClassification] = useState('')
  const [color, setColor] = useState('')
  const [tips, setTips] = useState([])
  const [medicalAdvice, setMedicalAdvice] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const parseNumber = (value) => {
    const normalized = value.toString().trim().replace(',', '.')
    const parsed = parseFloat(normalized)
    return isNaN(parsed) ? NaN : parsed
  }

  const parseHeight = (value) => {
    const raw = value.toString().trim()
    const normalized = raw.replace(',', '.')
    const parsed = parseFloat(normalized)

    if (isNaN(parsed) || parsed <= 0) {
      return NaN
    }

    if (parsed >= 100 && parsed <= 300) {
      return parsed / 100
    }

    return parsed
  }

  const getClassification = (bmi) => {
    if (bmi < 17) {
      return { class: 'Abaixo do peso', color: 'red', tips: ['Aumente a ingestão calórica com alimentos nutritivos.', 'Inclua proteínas, carboidratos complexos e gorduras saudáveis na dieta.', 'Pratique exercícios de fortalecimento muscular.'], medical: 'Consulte um médico ou nutricionista para avaliar sua saúde.' }
    } else if (bmi < 18.5) {
      return { class: 'Quase abaixo do peso', color: 'orange', tips: ['Mantenha uma dieta equilibrada com foco em nutrientes.', 'Monitore seu peso regularmente.', 'Considere atividades físicas leves.'], medical: '' }
    } else if (bmi < 25) {
      return { class: 'Peso normal', color: 'green', tips: ['Continue com hábitos saudáveis.', 'Mantenha uma alimentação balanceada e exercícios regulares.'], medical: '' }
    } else if (bmi < 27) {
      return { class: 'Quase acima do peso', color: 'orange', tips: ['Reduza o consumo de açúcares e gorduras saturadas.', 'Aumente a atividade física.', 'Monitore porções de alimentos.'], medical: '' }
    } else if (bmi < 30) {
      return { class: 'Sobrepeso', color: 'red', tips: ['Adote uma dieta com déficit calórico.', 'Pratique exercícios aeróbicos e musculação.', 'Busque acompanhamento profissional.'], medical: 'Consulte um médico para avaliar riscos à saúde.' }
    } else {
      return { class: 'Obesidade', color: 'red', tips: ['Procure ajuda médica para um plano de perda de peso.', 'Combine dieta e exercício.', 'Monitore condições de saúde associadas.'], medical: 'Procure ajuda médica imediatamente para prevenir complicações.' }
    }
  }

  const calculateIMC = () => {
    setError('')
    const h = parseHeight(height)
    const w = parseNumber(weight)
    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      setError('Por favor, insira valores válidos para altura e peso.')
      return
    }
    setLoading(true)
    setTimeout(() => {
      const bmi = w / (h * h)
      setImc(bmi.toFixed(2))
      const result = getClassification(bmi)
      setClassification(result.class)
      setColor(result.color)
      setTips(result.tips)
      setMedicalAdvice(result.medical)
      setLoading(false)
    }, 1000) // Simulate loading
  }

  const isFormValid = (() => {
    const h = parseHeight(height)
    const w = parseNumber(weight)
    return height && weight && !isNaN(h) && !isNaN(w) && h > 0 && w > 0
  })()

  return (
    <div className="app">
      <h1>Calculadora de IMC</h1>
      <form className="form">
        <div className="input-group">
          <label htmlFor="height">Altura (m):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Ex: 1.75"
            step="0.01"
          />
        </div>
        <div className="input-group">
          <label htmlFor="weight">Peso (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Ex: 70"
            step="0.1"
          />
        </div>
        <button
          type="button"
          onClick={calculateIMC}
          disabled={!isFormValid || loading}
          className="calculate-btn"
        >
          {loading ? 'Calculando...' : 'Calcular IMC'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {imc && !loading && (
        <div className="result" style={{ borderColor: color }}>
          <h2>Seu IMC: {imc}</h2>
          <p>Classificação: {classification}</p>
          {tips.length > 0 && (
            <div className="tips">
              <h3>Dicas rápidas:</h3>
              <ul>
                {tips.map((tip, index) => <li key={index}>{tip}</li>)}
              </ul>
            </div>
          )}
          {medicalAdvice && (
            <div className="medical-advice">
              <p><strong>Aviso:</strong> {medicalAdvice}</p>
            </div>
          )}
        </div>
      )}
      <footer className="footer">
        Desenvolvido por <span style={{
          color: "green"}}> Ederson Andrade</span>. 2026
      </footer>
    </div>
  )
}

export default App
