import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Endereco } from './types/Endereco';

function App() {

  const [cep, setCep] = useState<String>("")

  const [dados, setDados] = useState<Endereco>()

  const getDados = () => {
    axios.get(`https://viacep.com.br/ws${cep}/json/`)
      .then(resposta => setDados(resposta.data));

  }

  return (
    <div className="App">
      <input type="text" onChange={(event) => setCep(event.target.value)} />
      <button onClick={getDados}>Ver Endereço</button>

      <h1>Endereço</h1>

    </div>
  );
}

export default App;
