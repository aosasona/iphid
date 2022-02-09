import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Error from './components/Error';


function App() {
  return (
    <main>
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/gallery' component={Gallery}/>
        <Route path='/contact' component={Contact}/>
        <Route path='*' component={Error}/>
    </Switch>
    </main>
  );
}

export default App;
