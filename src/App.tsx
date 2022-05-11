import "./app.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { pages as pagesTemp } from "./pages";

function App() {
  const pages = pagesTemp.sort(function (a, b) {
    return a.text.localeCompare(b.text);
  });

  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <nav>
            <ul>
              {pages.map((page) => (
                <Link to={page.to}>
                  <li>{page.text}</li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
        <div className="container">
          <Switch>
            {pages.map((page) => (
              <Route path={page.to} exact>
                {page.comp}
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
