import { BrowserRouter, Switch, Route} from "react-router-dom"
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Subscribe from '../Pages/Subscribe/Subscribe'


const Router = () => {

    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/subscribe">
                <Subscribe/>
            </Route>
            <Route exact path="/pokedex">
                <Home/>
            </Route>
            <Route>
                <div>error</div>
            </Route>
        </Switch>
    </BrowserRouter>
    )
}

export default Router