import React,{useEffect, useState} from 'react'
import { API_KEY, imageUrl } from '../../Constants/constants';
import "./Banner.css";
import axios from '../../axios';
function Banner() {
    
    const [movie, setMovie] = useState();
    // const [Index, setIndex] =useState();

    // const index=()=>{
    //     setIndex(Index+1)
    // }
   
    useEffect(() => {
       
        axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then(response=>{
            
            setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
         })
       
    }, [])
    return (
        <div className="banner"
            style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : "" })`}} >
            <div className="content">
                <h1 className="title">{movie ? movie.title : ""}</h1> 
                <div className="banner-buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div> 
                <h4 className="description">{movie ? movie.overview: ""}</h4>                                                                                                                                
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner
