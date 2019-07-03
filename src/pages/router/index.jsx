import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

    const RouterDom = ()=>{
        return (
            <Router>
                <div><Link to='/test/11'>测试</Link></div>
            
            <Route  exact path='/test/:id' component={Test} />
            </Router>
        )
    }
    const Test=({match})=>{
        console.log({match})
        return <h1>test{match.params.id}</h1>
    }
export default RouterDom;