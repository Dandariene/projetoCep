import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Endereco } from './types/Endereco';

function App() {

  const [cep, setCep] = useState<String>("")

  const [endereco, setEndereco] = useState<Endereco>()

  const getCep = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resposta => setEndereco(resposta.data));
  }

  return (
    <div className="App">
      <input type="text" onChange={(event) => setCep(event.target.value)} />
      <button onClick={getCep}>Ver Endereço</button>

      <h1>Dados do endereço</h1>
      <>
        <p>Rua: {endereco?.logradouro}</p>
        <p>Bairro: {endereco?.bairro}</p>
        <p>Cidade: {endereco?.localidade}</p>
        <p>UF: {endereco?.uf}</p>
        <p>CEP: {endereco?.cep}</p>
        <p>DDD: {endereco?.ddd}</p>
      </>

    </div>
  );
}

export default App;
