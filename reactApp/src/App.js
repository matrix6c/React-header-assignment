import logo from './logo.svg';
import './App.css';
import FlutterwaveNav from './components/FlutterwaveNav';
import PayStackNav from './components/PayStackNav';

import{Link,
    BrowserRouter as Router, 
    Switch , 
    Route   
} from 'react-router-dom'

function App() {
  return (
    <div className="Ap">
      <Router>
        <Switch>
          <Route>
            {/* <FlutterwaveNav/> */}
            <PayStackNav/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
