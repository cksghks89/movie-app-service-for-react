import {Link,} from 'react-router-dom';

function Movie({coverImg, id, title, url, genres, summary}){
    return (
        <div key={id}>
            <img alt={title} src={coverImg} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g, index) => <li key={index}>{g}</li>)}
            </ul>
        </div>
    )
}

export default Movie;