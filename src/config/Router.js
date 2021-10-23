import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Shop, Cart, Checkout } from '../container';
import { NavBar } from '../components';
import { Provider } from 'react-redux';
import store from '../store';
function AppRouter() {
    return (
        <Router>
            <Provider store={store} >
              <NavBar />
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/shop" component={Shop} />
                  <Route exact path="/cart" component={Cart} />
                  <Route exact path="/checkout" component={Checkout} />
              </Switch>
            </Provider>
        </Router>
    )
}

export default AppRouter;