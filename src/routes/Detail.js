import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

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
    console.log(movies, "무비스")
    return (<div>
        {loading ? <h1>Loading...</h1> : (
            <div className={styles.movie} >
                <img src={movies.large_cover_image} className={styles.movie__img} />
                <div>
                    <h2 className={styles.movie__title}>
                        {movies.title}
                    </h2>
                    <img src={movies.medium_background_image} className={styles.movie__background} />
                    <h3 className={styles.movie__year}>{movies.year}</h3>
                    <p className={styles.movie__summary}>{movies.description_intro}</p>
                    <ul className={styles.movie__genres}>
                        {movies.genres.map((g) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                </div>



            </div>
        )}
    </div>
    );
}

export default Detail;