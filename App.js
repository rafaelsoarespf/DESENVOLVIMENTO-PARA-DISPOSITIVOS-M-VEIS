import React,{useState, useEffect} from "react";
import "./App.css";

function App() {
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [opcao, setOpcao] = useState(0);

  const calcular = () => {
    if (opcao == "Somar")
      return parseFloat(nota1) + parseFloat(nota2)
    else if (opcao == "Subtrair")
      return parseFloat(nota1) - parseFloat(nota2)
    else if (opcao == "Multiplicar")
      return parseFloat(nota1) * parseFloat(nota2)
    else if (opcao == "Dividir")
      return parseFloat(nota1) / parseFloat(nota2)
    else //media
      return parseFloat(nota1) + parseFloat(nota2)/2
  }

  useEffect(() => {
    setResultado(calcular());
  }, [nota1,nota2,opcao]);
 
  return (
    <div className="App">
      <h1>Digite a Nota1 e Nota2</h1>
      <label>Nota1: </label>
      <input type="number" value={nota1} onChange={(e) => setNota1(e.target.value)}/>
      <label>Nota2: </label>
      <input type="number" value={nota2} onChange={(e) => setNota2(e.target.value)}/>

      <select onChange= {(e) => setOpcao(e.target.value)}>
        <option>Media</option>
        <option>Somar</option>
        <option>Subtrair</option>
        <option>Multiplicar</option>
        <option>Dividir</option>
        
      </select>

      <label>Resultado = {resultado}</label>
    </div>
  );
}

export default App;
