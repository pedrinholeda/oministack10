import React from "react";
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
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username"> Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs"> Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude"> Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div class="input-block">
              <label htmlFor="longitude"> Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/40272724?v=4"
                alt="Pedro Henrique"
              />
              <div className="user-info">
                <strong>Pedro Henrique Léda</strong>
                <span>Node, React,Swift</span>
              </div>
            </header>
            <p>Student of Computer science and a nice guy :)</p>
            <a href="https://github.com/pedrinholeda">
              Acessar Perfil no GitHub
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/40272724?v=4"
                alt="Pedro Henrique"
              />
              <div className="user-info">
                <strong>Pedro Henrique Léda</strong>
                <span>Node, React,Swift</span>
              </div>
            </header>
            <p>Student of Computer science and a nice guy :)</p>
            <a href="https://github.com/pedrinholeda">
              Acessar Perfil no GitHub
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/40272724?v=4"
                alt="Pedro Henrique"
              />
              <div className="user-info">
                <strong>Pedro Henrique Léda</strong>
                <span>Node, React,Swift</span>
              </div>
            </header>
            <p>Student of Computer science and a nice guy :)</p>
            <a href="https://github.com/pedrinholeda">
              Acessar Perfil no GitHub
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/40272724?v=4"
                alt="Pedro Henrique"
              />
              <div className="user-info">
                <strong>Pedro Henrique Léda</strong>
                <span>Node, React,Swift</span>
              </div>
            </header>
            <p>Student of Computer science and a nice guy :)</p>
            <a href="https://github.com/pedrinholeda">
              Acessar Perfil no GitHub
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
