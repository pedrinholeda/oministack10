import React from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
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
      <main></main>
    </div>
  );
}

export default App;
