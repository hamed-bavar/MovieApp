import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'));
