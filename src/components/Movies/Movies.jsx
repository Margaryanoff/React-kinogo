import "../Movies/Movies.css";

const Movies = ({
    movie_title,
    movie_rating,
    movie_image,
    movie_year,
    movie_state,
    movie_genre,
    movie_time,
    movie_premier,
    movie_quality,
    movie_info,
    movie_streams,
    movie_comments,
    movie_date,
}) => {
    return (
        <div className="movie_card">
            <div className="movie_card_top">
                <h2>{movie_title}</h2>
                <p>{movie_rating} / 5</p>
            </div>
            <div className="movie_card_root">
                <div className="movie_card_image">
                    <img src={movie_image} alt="#" />
                </div>
                <div className="image_card_info">
                    <div className="card_info_root_rating">
                        <div className="date_country_etc">
                            <p>Release Date : {movie_year}</p>
                            <p>Country : {movie_state}</p>
                            <p>Genre : {movie_genre}</p>
                            <p>Duration : {movie_time} min</p>
                            <p>Premier (In Russia) : {movie_premier}</p>
                        </div>
                        <div>
                            <p>KP {movie_rating}</p>
                            <p>IMDB {movie_rating}</p>
                        </div>
                    </div>
                    <div>
                        <p>Quality : {movie_quality}</p>
                    </div>
                    <div className="about_movie">
                        <p>{movie_info}</p>
                    </div>
                </div>
            </div>
            <div className="movie_card_bottom">
                <a href="">Watch Online</a>
                <div className="comments_views">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-eye-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                        </svg>
                        <p>{movie_streams}</p>
                    </div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-chat-left-dots-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                        </svg>
                        <p>{movie_comments}</p>
                    </div>
                </div>
                <div className="expiration_date">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-stopwatch-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0" />
                    </svg>
                    <p>{movie_date}</p>
                </div>
            </div>
        </div>
    );
};

export default Movies;
