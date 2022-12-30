import "./App.css";
import Scorecard from "./components/Scorecard";

function App() {
  return (
    <div className="main">
      <div className="middle">
        <h1>HTML-CSS with React</h1>
        <Scorecard />
      </div>
      <div className="top">T</div>
      <div className="left">L</div>
      <div className="right">R</div>
      <div className="bottom">B</div>
    </div>
  );
}

export default App;
