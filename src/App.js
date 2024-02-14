import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscomp from './components/Newscomp';
import LoadingBar from 'react-top-loading-bar'
// import { createRoot } from "react-dom/client";
import {
  // createBrowserRouter,
  // RouterProvider,
  BrowserRouter as Router,
  Route,
  Routes
  // Link,
  // Router,
} from "react-router-dom";
export default class App extends Component {
  state ={progress:0}
  setprogress=(progress)=>{
    this.setState({ progress : progress });
  }
  render() {
    const {progress}=this.state;
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        />
        <Routes>
        <Route exact path='/general'  element={<Newscomp setprogress={this.setprogress} key="general" pagesize={15} country="in" category="general"/>}/>
        <Route exact path='/business' element={<Newscomp setprogress={this.setprogress} key="business" pagesize={15} country="in" category="business"/>}/>
        <Route exact path='/entertainment' element={<Newscomp setprogress={this.setprogress} key="entertainment" pagesize={15} country="in" category="entertainment"/>}/>
        <Route exact path='/health' element={<Newscomp setprogress={this.setprogress} key="health" pagesize={15} country="in" category="health"/>}/>
        <Route exact path='/science' element={<Newscomp setprogress={this.setprogress} key="science" pagesize={15} country="in" category="science"/>}/>
        <Route exact path='/sports' element={<Newscomp setprogress={this.setprogress} key="sports" pagesize={15} country="in" category="sports"/>}/>
        <Route exact path='/technology' element={<Newscomp setprogress={this.setprogress} key="technology" pagesize={15} country="in" category="technology"/>}/>
  
        </Routes>
        </Router>
      </div>
    )
  }
}

