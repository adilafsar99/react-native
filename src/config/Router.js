import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Shop, Cart, Checkout } from '../container';
import { NavBar } from '../components'
function AppRouter() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/checkout" component={Checkout} />
            </Switch>
        </Router>
    )
}

export default AppRouter;