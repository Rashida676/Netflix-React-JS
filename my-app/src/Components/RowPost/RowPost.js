import React, {useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import axios from '../../axios'
import './RowPost.css'
import { imageUrl } from  '../../Constants/constants'
function RowPost(props) {
    const [movies, setMovies] =useState([])
    useEffect(() => {
       
        axios.get(props.url).then(response=>{
            console.log(response.data.results)
            setMovies(response.data.results)
         })
       
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleMovie =(id)=>{

      }

    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className= "posters">
                {
                    movies.map((obj)=>
                 <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? "smallposter" :"poster"} src={`${imageUrl+obj.backdrop_path}`}  alt="poster"></img>
                    )
                
                }
              
            </div>
            <Youtube videoId="2g811Eo7K8U" opts={opts} />
        </div>
    )
}

export default RowPost
