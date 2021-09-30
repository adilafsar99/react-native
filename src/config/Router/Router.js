import {BasicTextField} from "../../components";
import {Signup, Login, Profile, Users, Chat} from "../../containers";
import {BrowserRouter as Router, Route, Switch, Redirect, useLocation, Link} from "react-router-dom";
import {onAuthStateChanged, auth} from '../Firebase/Firebase.js';
import {useEffect} from 'react';
import {useState} from 'react';

function PrivateRoute({component: Component, auth, ...rest}) {
    return (
        <Route
            {...rest}
            component={({location}) =>
                auth ? (
                    <Component />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: {
                                from: location.pathname,
                            },
                        }}
                    />
                )
            }
        />
    );
}

function PublicRoute({component: Component, auth, ...rest}) {
    const location = useLocation();
    return (
        <Route
            {...rest}
            component={() =>
                !auth ? (
                    <Component />
                ) : (
                    <Redirect
                        to={location.state && location.state.from ? location.state.from : "/users"}
                    />
                )
            }
        />
    );
}


function AppRouter() {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuth(true)
            } else {
                setIsAuth(false)
            }
        })
    }, [])
    return (
        <Router>
            <Switch>
                <PublicRoute auth={isAuth} exact path="/" component={Login} />
                <PublicRoute auth={isAuth} exact path="/signup" component={Signup} />
                <PrivateRoute auth={isAuth} exact path="/profile" component={Profile} />
                <PrivateRoute auth={isAuth} exact path="/users" component={Users} />
                <PrivateRoute auth={isAuth} exact path="/chat" component={Chat} />
            </Switch>
        </Router>
    )
}

export {AppRouter};