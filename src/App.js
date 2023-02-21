import "./App.css";
import Image from "./images/chucho.jpeg";
import IconHeart from "./images/iconscorazones.png";
import Add from "./images/añadir.png";
import IconComment from "./images/iconscomentarios.png";
import Instagram from "./images/instagramLogo.png";
import Perfil from "./images/perfil.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Logo">
          <img src={Instagram} />
        </div>

        <div className="Menu">
          <div className="Interactions">
            <img src={IconHeart} />
          </div>

          <div className="NewPost">
            <img src={Add} />
          </div>

          <div className="Profile">
            <img src={Perfil} />
          </div>
        </div>
      </header>

      <div className="App-body">
        <div className="Post">
          <div className="Post-header">
            <img className="Avatar" src={Perfil} />

            <div className="UserName">
              <p>Chucho.com</p>
            </div>
          </div>

          <div className="Post-image">
            <img src={Image} />
          </div>

          <div className="Post-actions">
            <button>
              <img src={IconHeart} />
            </button>

            <button>
              <img src={IconComment} />
            </button>
          </div>

          <div className="Post-description">
            <p>Post</p>
          </div>

          <div className="Post-comments"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
