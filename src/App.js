import "./App.css";
import Home from "./components/Home/Home";
import { HomeDescription } from "./components/Home/Home";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Event from "./components/Event/Event";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Subject from "./components/Subject/Subject";
import SubjectContent from "./components/SubjectContent/SubjectContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// bootstrap file
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/dashboard">
            <Header search events leaderboard user />
            <Dashboard />
          </Route>

          <Route exact path="/events">
            {/* Rahul */}
            <Header search events leaderboard user />
            <Event />
          </Route>

          <Route exact path="/leaderboard">
            <Header search leaderboard events user />
            <Leaderboard />
          </Route>

          <Route exact path="/subject">
            {/* John */}
            <Header search filter events leaderboard user />
            <Subject />
          </Route>

          <Route exact path="/subject/:subjectContent">
            {/* Preetham */}
            <Header search events leaderboard user />
            <SubjectContent />
          </Route>

          <Route exact path="/">
            <Header />
            <div className="home-page">
              <HomeDescription />
              <Home />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
