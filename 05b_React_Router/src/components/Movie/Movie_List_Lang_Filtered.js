import React from 'react'
import {useParams} from 'react-router-dom';
 function Movie_List_Lang_Filtered(props) {
    const paramz = useParams();
    if(!paramz.lang){  //when only "/movies" no lang so assign lang as props.defaultLang
        paramz.lang = props.defaultLang;
    }
   
    const movieList = {
        'english' :['Shawshank Redemption', 'Titanic'],
        'hindi': ['Haasil','Sholay','Bahubali']
    };
  
    const displayMovies = (lang) => {
        console.log('show movie with lang : ' , lang);
        const mylist = movieList[lang];
        return mylist.map((ele,index) => {
            return (
                <li key={index}> {ele}  </li>
            )
        })

    }

    return (
        <div>
            <h1>This is list of movies based on language : {paramz.lang}</h1>         
                <ul> {displayMovies(paramz.lang)} </ul>
        </div>
    )
}
export default Movie_List_Lang_Filtered;