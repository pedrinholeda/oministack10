import React, { useEffect, useState } from "react";
import api from "./services/api";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

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

  const [github_username, setGithub_username] = useState("");
  const [techs, setTechs] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  //renderizar Devs
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");

      setDevs(response.data);
    }
    loadDevs();
  }, []);

  //função disparada quando o usuario clicar no submit
  async function handleAdddDev(e) {
    e.preventDefault(); //prevenindo comportamento padrão(enviar para outra tela)

    const response = await api.post("/devs", {
      github_username,
      techs,
      latitude,
      longitude
    });
    setGithub_username("");
    setTechs("");
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
          <form onSubmit={handleAdddDev}>
            <div className="input-block">
              <label htmlFor="github_username"> Usuário do Github</label>
              <input
                name="github_username"
                id="github_username"
                required
                value={github_username}
                onChange={e => setGithub_username(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="techs"> Tecnologias</label>
              <input
                name="techs"
                id="techs"
                required
                value={techs}
                onChange={e => setTechs(e.target.value)}
              />
            </div>

            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude"> Latitude</label>
                <input
                  type="number"
                  name="latitude"
                  id="latitude"
                  required
                  value={latitude}
                  // setando valor de input no estado
                  onChange={e => setLatitude(e.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="longitude"> Longitude</label>
                <input
                  type="number"
                  name="longitude"
                  id="longitude"
                  required
                  value={longitude}
                  // setando valor de input no estado
                  onChange={e => setLongitude(e.target.value)}
                />
              </div>
            </div>
            <button type="submit">Salvar</button>
          </form>
        </aside>
        <main>
          <ul>
            {/* pra cada um dos devs, retornar uma li diferente */}
            {devs.map(dev => (
              <li key={dev._id} className="dev-item">
                <header>
                  <img src={dev.avatar_url} alt={dev.name} />
                  <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(", ")}</span>
                  </div>
                </header>
                <p>{dev.bio}</p>
                <a href={`https://github.com/${dev.github_username}`}>
                  Acessar Perfil no GitHub
                </a>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}

export default App;
