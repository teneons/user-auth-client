import {BrowserRouter as Router, Route} from 'react-router-dom';

import Body from '../Body/Body';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/' component={Body} exact/>
      </Router>
    </div>
  );
}

export default App;
