import './App.css';
import { Route,Switch} from 'react-router-dom'
import Home from './views/Home/Home'
import landingPage from './views/landingPage/landingPage.jsx'
import Form from './views/form/Form'
import Detail from './views/Detail/Detail';
import About from './components/About/About.jsx';
import Page404 from './components/Page404/page404.jsx'

function App() {
  return (
      
    <div className="App">
      <Switch>
      <Route exact path = "/" component = {landingPage}/>
      <Route exact path = "/home" component = {Home}/>
      <Route exact path="/creategame" component={Form}/>
      <Route exact path='/home/:id' component={Detail} />
      <Route exact path='/about' component={About} />
      <Route path='*' component={Page404} />
      </Switch>
    </div>
    
  );
}

export default App;
