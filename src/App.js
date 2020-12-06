import './App.css';
import ImageSlider from './components/ImageSlider/ImageSlider';
import { SliderData } from './data/SliderData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Suggestions from './components/Suggestions/Suggestions';
import DragAndDrop from './components/DragAndDrop/DragAndDrop';
import DragAndDropWithDnD from './components/DragAndDropWithDnD/DragAndDropWithDnD';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Image Slider</Link>
            </li>
            <li>
              <Link to="/suggest">Input suggestions</Link>
            </li>
            <li>
              <Link to="/draganddrop">Drag And Drop</Link>
            </li>
            <li>
              <Link to="/draganddropwithdnd">Drag And Drop With React Beautiful DnD</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <ImageSlider slides={ SliderData }></ImageSlider>
          </Route>
          <Route path="/suggest">
            <Suggestions></Suggestions>
          </Route>
          <Route path="/draganddrop">
            <DragAndDrop></DragAndDrop>
          </Route>
          <Route path="/draganddropwithdnd">
            <DragAndDropWithDnD></DragAndDropWithDnD>
          </Route>
        </Switch>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
