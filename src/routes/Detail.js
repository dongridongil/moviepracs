import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getMovie = async () => {
            const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();

            setMovies(json.data.movie);
            setLoading(false);
        };

        getMovie();
    }, [id]); // id를 종속성 배열에 포함
    return (<div>
        {loading ? <h1>Loading...</h1> : (
            <div>

                <Movie
                    key={movies.id}
                    id={movies.id}
                    coverImg={movies.medium_cover_image}
                    title={movies.title}
                    genres={movies.genres}
                />


            </div>
        )}
    </div>
    );
}

export default Detail;