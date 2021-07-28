import React from 'react';
import Header from "./components/Header";
import Recommended__videos from './components/Recommended__videos';
import Sidebar from "./components/Sidebar";
import "./index.css";
import sidebarRow from "./components/sidebarRow";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SearchPage from "./components/SearchPage";

function Sidebarf(elements)
{
  return (<Sidebar
          key={elements.id}
           icon={elements.icon}
           title={elements.title}/>);
}

function App() {
  return (
    <div>
    <Router>
    {/* because we see the header to come up at every page so placing it outside switch */}
    <Header/>
      <Switch>
      {/* the searchTerm will match any output given inside the input */}
      <Route path="/search/:searchTerm">
      <div className="main__page">
      <div className="sidebar">
      {sidebarRow.map(Sidebarf)}
      <hr/>
      </div>
      <SearchPage/>
    </div>
        </Route>
        <Route path="/">
      <div className="main__page">
      <div className="sidebar">
      {sidebarRow.map(Sidebarf)}
      <hr/>
      </div>
      <Recommended__videos/>
    </div>
        </Route>
    
      </Switch>
    </Router>
     
    </div>
  );
}

export default App;
