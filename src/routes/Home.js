import {useState, useEffect} from 'react';
import Movie from '../components/Movie';

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    
    // async await 구문 => fetch then과 똑같은 기능을 함
    const getMovies = async () => {
        const response = await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        // fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
        // .then((response) => response.json())
        // .then((json) => {
        //     setMovies(json.data.movies);
        //     setLoading(false);
        // });
        getMovies();
    }, []);

    return (
        <div>
            {loading ? <h1>Loading...</h1> : (
                movies.map((item) => (
                    <Movie 
                        key={item.id}
                        coverImg={item.medium_cover_image}
                        id={item.id}
                        title={item.title}
                        url={item.url}
                        genres={item.genres}
                        summary={item.summary}
                    />
                ))
            )}
        </div>
    )
}

export default Home;
