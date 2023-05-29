import './Movie.css';

export default function Movie(props){


    return (
        <>
        <li className='Ml-item'> <button onClick={() => props.chooseId(props.myMovie.id)} ><h3>{props.myMovie.movieName}</h3> </button> </li>
        </>
    );
}