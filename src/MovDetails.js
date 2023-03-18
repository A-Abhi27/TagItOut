import React, { useState, useEffect } from 'react';
import './MovDetails.css'
import { useParams } from 'react-router-dom';
import Chart from './Chart';

const MovDetails = () => {

    const [mov, setMov] = useState([])
    const { id } = useParams();
    const url="https://image.tmdb.org/t/p/original/";
    
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMov(data))
    }, [id])

    return (
       <div className='movi'>
            <div className='movDet'>
            <div className='mov_img'>
                <img src={url+mov.poster_path} alt="movImg"/>
            </div>
            <div className='right_content'>
                <h1 >{mov.title}</h1>
                <div className='disp'><span>Language: <em>{mov.original_language}</em></span>
                <span>⌚ Runtime: <em>{mov.runtime+" min"}</em></span></div><hr/>
                <div className='disp'><span>📅 Release: <em>{mov.release_date}</em></span>
                <span>Ratings: <em>{mov.vote_average} ⭐</em></span></div><hr/>
                <span>Overview: </span><br/><br/>
                <span>{mov.overview}</span><hr/>
                <div className='chart'><Chart m1={mov.budget} m2={mov.revenue} /></div><hr/>
                <div className='disp'><span>iMdB id: <em>{mov.imdb_id}</em></span>
                <span>Vote Count: <em>{mov.vote_count}</em></span></div>
            </div>
            </div>
       </div>
    )
}

export default MovDetails;