import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import styles from "./Movie.module.css";

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

function Movie({ coverImg, title, year, summary, genres, id }) {

    return (
        <div className={styles.movie}>
            <Link to={`/movie/${id}`}>
                <img src={coverImg} alt={title} className={styles.movie__img} />
            </Link>

            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{year}</h3>
                <p className={styles.movie__summary}>{summary}</p>
                <ul className={styles.movie__genres}>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


export default Movie; 