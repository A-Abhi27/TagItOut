import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Header';
import Footer from './Footer';
import About from '../About';
import Trending from './Trending';
import GenrePage from '../GenrePage';
import Search from '../Search';
import MovDetails from '../MovDetails';

function App(){
   return <div>
        <div>
        <Router>
          <Header />
            <Routes>
                <Route path="/" Component={Trending} exact/>
                <Route path="movies/search" Component={Search}/>
                <Route path="movies/genres" Component={GenrePage}/>
                <Route path="movies/about" Component={About}/>
                <Route path="movie/:id" Component={MovDetails}/>
                <Route path="/*" Component={<h1>Error Page</h1>}/>
            </Routes>
        </Router>
        </div>
        <Footer />
    </div>
}
export default App;