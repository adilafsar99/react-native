import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../container';
import { NavBar } from '../components';
function AppRouter() {
    return (
        <Router>
              <NavBar />
              <Switch>
                  <Route exact path="/" component={Home} />
              </Switch>
        </Router>
    )
}

export default AppRouter;