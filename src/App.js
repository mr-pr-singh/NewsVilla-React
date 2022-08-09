import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  pagesize =5;
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <Navbar />
          <Routes>
            <Route path="/" element={<News setProgress ={this.setProgress} apiKey ={this.apiKey} key="general" pagesize={this.pagesize} country="in" category="general" />}></Route>
            <Route path="general" element={<News setProgress ={this.setProgress} apiKey ={this.apiKey} key="general" pagesize={this.pagesize} country="in" category="general" />} ></Route>
            <Route path="business" element={<News setProgress ={this.setProgress} apiKey ={this.apiKey} key="business" pagesize={this.pagesize} country="in" category="business" />} ></Route>
            <Route path="technology" element={<News setProgress ={this.setProgress} apiKey ={this.apiKey} key="technology" pagesize={this.pagesize} country="in" category="technology" />} ></Route>
            <Route path="health" element={<News setProgress ={this.setProgress} apiKey ={this.apiKey} key="health" pagesize={this.pagesize} country="in" category="health" />} ></Route>
            <Route path="sports" element={<News setProgress ={this.setProgress} apiKey ={this.apiKey} key="sports" pagesize={this.pagesize} country="in" category="sports" />} ></Route>
            <Route path="entertainment" element={<News setProgress ={this.setProgress} apiKey ={this.apiKey} key="entertainment" pagesize={this.pagesize} country="in" category="entertainment" />} ></Route>
            <Route path="science" element={<News setProgress ={this.setProgress} apiKey ={this.apiKey} key="science" pagesize={this.pagesize} country="in" category="science" />} ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
