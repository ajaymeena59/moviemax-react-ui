import axios from 'axios';
import './CreateMovie.css';

export default function CreateMovie(){

    const submitHandler = (evt) => {
       evt.preventDefault();
       if (evt.target.releaseyear.value<1900){
        window.alert("You can add movie released after 1900");
        return false;
       }

     const movieName = evt.target.moviename.value;
     const releaseYear =  evt.target.releaseyear.value;
     const imdbRating = evt.target.imdbrating.value;
     const starCast = evt.target.starcast.value;
     const genre = evt.target.moviegenre.value;

      const response = axios.post("http://localhost:5078/api/Movies",{
        movieName:movieName,
        releaseYear:releaseYear,
        imdbRating:imdbRating,
        starCast:starCast,
        genre:genre
       });
       response.then((res)=>{
        console.log(res);
        window.alert("Submitted");
       });

    }

    return(
        <form method='POST' onSubmit={submitHandler} >
          <fieldset>
            <legend>Enter movie details:</legend>
            <label className="Create-movie-lab" htmlFor="name"> Movie name: </label><br />
            <input className="Create-movie-inp" type="text" id="name" name="moviename" placeholder='Enter movie name' required />
            <br />
            <label className="Create-movie-lab" htmlFor="year">Release year: </label><br />
            <input className="Create-movie-inp" type="number" id="year" name="releaseyear" placeholder='Enter release year'/>
             <br/>
             <label className="Create-movie-lab" htmlFor="rating">IMDB Rating: </label><br />
             <input className="Create-movie-inp" type="number" id="rating" name="imdbrating"  placeholder='Tell IMDB rating'/>
             <br />
             <label className="Create-movie-lab" htmlFor="cast">Star cast: </label><br />
             <input className="Create-movie-inp" type="text" id="cast" name="starcast" placeholder='Enter name of stars' />
             <br />
             <label className="Create-movie-lab" htmlFor="genre">Genre: </label><br />
             <input className="Create-movie-inp" type="text" id="genre" name="moviegenre" placeholder='Enter genre'/>
             <br />
             <input className="Create-movie-inp-butt" type="reset" value="Reset" />
             <input className="Create-movie-inp-butt" type="submit" value="Add" />
          </fieldset>
        </form>
    );
}