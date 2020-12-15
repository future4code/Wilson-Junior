import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  const titulo = "Título do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div>
      <div className="tela-inteira">
          <header>
              <div id="div1">
               <img  id ="logo" src='https://www.flaticon.com/svg/static/icons/svg/3658/3658993.svg' />
               <h1>LabTube</h1>
               </div>
               <div id="div2">
                  <input type="text" id="txtBusca" placeholder="Buscar..."/>
                  <img src="https://www.flaticon.com/svg/static/icons/svg/1076/1076744.svg" 
                  id="btnBusca" alt="Buscar"/>
                </div>
          </header>
          
          <main>
              <nav className="menu-vertical">
                  <ul>
                      <li className="botoes-meunu-vertical">
                      <img id="iconesNavBar"src="https://www.flaticon.com/svg/static/icons/svg/553/553416.svg"/>
                        Início</li>
                      <li className="botoes-meunu-vertical">
                      <img id="iconesNavBar"src="https://www.flaticon.com/svg/static/icons/svg/3352/3352377.svg"/>
                        Em alta</li>
                      <li className="botoes-meunu-vertical">
                      <img id="iconesNavBar"src="https://www.flaticon.com/svg/static/icons/svg/2037/2037751.svg"/>
                        Inscrições</li>
                      <hr />
                      <li className="botoes-meunu-vertical">
                      <img id="iconesNavBar"src="https://www.flaticon.com/svg/static/icons/svg/3712/3712308.svg"/>
                        Originais</li>
                      <li className="botoes-meunu-vertical">
                        <img id="iconesNavBar"src="https://www.flaticon.com/svg/static/icons/svg/2972/2972431.svg"/>
                        Histórico</li>
                  </ul>
              </nav>
              
              <section className="painel-de-videos">
                  <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=1 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=2 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=3 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=4 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=5 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=6 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=7 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=8 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media9" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=9 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media10" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=10 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media11" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=11 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media12" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=12 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media13" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=13 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media14" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=14 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media15" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=15" alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media16" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=16" alt="" />
                      <h4>{titulo}</h4>
                  </div>
              </section>
              
          </main>

        
      </div>
      
    </div>
  );
}

export default App;
