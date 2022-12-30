import "./stylesheets/Scorecard/Scorecard.css";

export default function Scorecard() {
  return (
    <div className="scorecards">
      <div className="scorecard" id="1">
        <span className="scorecard-title">HTML Containers</span>
        <ul className="scorecare-elements">
          <li>Grid elements</li>
          <li>Flex elements</li>
          <li>Div elements</li>
          <li>Parent elements</li>
          <li>Children elements</li>
        </ul>
      </div>
      <div className="scorecard" id="2">
        <span className="scorecard-title">CSS + Animations</span>
        <ul className="scorecare-elements">
          <li>Grid CSS</li>
          <li>Flex CSS</li>
          <li>CSS Animations</li>
        </ul>
      </div>
      <div className="scorecard" id="3">
        <span className="scorecard-title">React Components</span>
        <ul className="scorecare-elements">
          <li>Render Componenets</li>
          <li>useState</li>
          <li>useEffect</li>
          <li>Redux Store</li>
        </ul>
      </div>
      <div className="scorecard" id="4">
        <span className="scorecard-title">React + CSS Animations</span>
        <ul className="scorecare-elements">
          <li>Reactive Animations</li>
          <li>Dropdown Menus</li>
          <li>Popup Modals</li>
          <li>New elements</li>
        </ul>
      </div>
    </div>
  );
}
