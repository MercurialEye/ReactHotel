import React from 'react'
import {Route, Switch} from "react-router-dom";
import Navbar from "../Navbar";
import PageHome from "../../Pages/PageHome";
import PageRoom from "../../Pages/PageRoom";
import PageRoomList from "../../Pages/PageRoomList";

const App = () => {

    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={PageHome}/>
                <Route exact path="/Room/:id" component={PageRoom}/>
                <Route exact path="/RoomList" component={PageRoomList}/>
            </Switch>
        </div>
    )
}

export default App