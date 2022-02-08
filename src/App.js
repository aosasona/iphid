import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <main className='lg:px-32 xl:px-56'>
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/gallery' component={Gallery}/>
        <Route path='/contact' component={Contact}/>
    </Switch>
    </main>
  );
}

export default App;
