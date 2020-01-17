import React, { useEffect, useState } from "react";
import api from "./services/api";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";

/*Componente -> função que retorna algum conteudo html,
 bloco isolado de html, css e js, 
 o qual não interfere no restante da aplicação*/

/*Estado -> useState , informações mantidas pelo componente
 (Lembrar imutabilidade).
  ex: const[counter, setCounter] = useState(0)
  setCounter(counter + 1)
   */

/*Propriedade -> {props} , informações que um componente
PAI, passa para um componente Filho*/

function App() {
  //controle de estado das variaveis
  const [devs, setDevs] = useState([]);

  //renderizar Devs
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");

      setDevs(response.data);
    }
    loadDevs();
  }, []);

  //função disparada quando o usuario clicar no submit
  async function handleAdddDev(data) {
    // e.preventDefault(); //prevenindo comportamento padrão(enviar para outra tela)

    const response = await api.post("/devs", data);

    //colocando todos os devs e adicionando mais um
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <div className="title">
        <h1>Radar Dev</h1>
        <h3>Cadastre-se aqui para ser encontrado.</h3>
      </div>
      <div id="conteudo">
        <aside>
          <strong>Cadastrar</strong>
          <DevForm onSubmit={handleAdddDev} />
        </aside>
        <main>
          <ul>
            {/* pra cada um dos devs, retornar uma li diferente */}
            {devs.map(dev => (
              <DevItem key={dev._id} dev={dev} />
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}

export default App;
