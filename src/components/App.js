import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./navigation/Navbar";
import Landing from "./pages/Landing";
import Photos from "./pages/Photos";
// import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/photos" component={Photos} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
