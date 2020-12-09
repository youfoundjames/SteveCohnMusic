import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Discography from './components/Discography';
import Video from './components/Video';
import Press from './components/Press';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navigation />
        <Switch>
         <Route path="/" component={Home} exact/>
         <Route path="/discography" component={Discography}/>
         <Route path="/video" component={Video}/>
         <Route path="/press" component={Press}/>
         <Route path="/contact" component={Contact}/>
       </Switch>
    </div> 
  </BrowserRouter>
  );
}

export default App;
