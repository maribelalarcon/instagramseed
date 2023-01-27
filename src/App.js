import "./App.css";
import Image from "./images/chucho.jpeg";
import IconHeart from "./images/iconscorazones.png";
import IconComment from "./images/iconscomentarios.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Instagram</p>
      </header>

      <body>
        <div className="profilePhoto"></div>
        <div className="picture">
          <img src={Image}></img>
          <img src={IconComment} />
        </div>

        <div className="interactionIcon">
          <img src={IconHeart} />
        </div>
        <div className="description"></div>

        <div className="commentary"></div>
      </body>
    </div>
  );
}

export default App;
