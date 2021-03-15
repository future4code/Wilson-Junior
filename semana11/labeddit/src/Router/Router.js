import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from '../Pages/Login/Login'
import Subscribe from '../Pages/Subscribe/Subscribe'
import Feed from '../Pages/Feed/Feed'
import Post from '../Pages/Post/Post'
import Error from '../Pages/Error/Error'
import Header from '../Components/Header/Header'


const Router = () => {

    return(
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/login">
                <Login/>
            </Route>
            <Route exact path="/subscribe">
                <Subscribe/>
            </Route>
            <Route path="/feed">
                <Feed/>
            </Route>
            <Route exact path="/post">
                <Post/>
            </Route>
            <Route>
                <Error/>
            </Route>
        </Switch>
    </BrowserRouter>
    )
}

export default Router