import "./App.css";
import Nav from "./components/Nav/Nav";
import Collection from "./components/Collection/Collection";
import Slides from "./components/Slider/Slider";
import slides from "./components/Data/SliderData/SliderData";
import { Background_left } from "./components/background_pictures/Background";
import { Background_right } from "./components/background_pictures/Background";
import { Background_top } from "./components/background_pictures/Background";
import Sorting from "./components/Sorting/Sorting";
import Movies from "./components/Movies/Movies";
import movies from "./components/Data/MoviesData/MoviesData";
import {
    navigationPanelCategories,
    navigationPanelChannels,
    navigationPanelSerials,
    navigationPanelStates,
    navigationPanelYears,
} from "./components/Data/NavigationPanel/NavigationPanel";
import {
    NavigationPanelCategories,
    NavigationPanelChannels,
    NavigationPanelSerials,
    NavigationPanelStates,
    NavigationPanelYears,
} from "./components/NavigationPanel/NavigationPanel";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import comingSoon from "./components/Data/ComingSoonData/ComingSoonData";
import serials from "./components/Data/Serials/serials";
import Serials from "./components/Serials/Serials";
import Animes from "./components/Animes/Animes";
import animes from "./components/Data/Anime/anime";

function App() {
    return (
        <div className="App">
            <Nav />
            <Background_top />
            <main className="main">
                <Background_left />
                <section className="main_content">
                    <div>
                        <Collection />
                        <div className="slides_main">
                            {slides.map((image) => (
                                <Slides key={image.id} image={image.image} />
                            ))}
                        </div>
                    </div>
                    <article className="movies_main_article">
                        <section className="section_left">
                            <div className="navigation_panel_parent">
                                <h2>Navigation Panel</h2>
                                <div className="navigation_panel_main">
                                    <div className="navigation_panel_top">
                                        <div className="navigation_panel_top_left">
                                            <h2>Categories</h2>
                                            {navigationPanelCategories.map((category) => (
                                                <NavigationPanelCategories
                                                    key={category.id}
                                                    category={category.category}
                                                    quantity={category.quantity}
                                                />
                                            ))}
                                        </div>
                                        <div className="navigation_panel_top_right">
                                            <div>
                                                <h2>By Year</h2>
                                                {navigationPanelYears.map((year) => (
                                                    <NavigationPanelYears
                                                        key={year.id}
                                                        year={year.year}
                                                    />
                                                ))}
                                            </div>
                                            <div>
                                                <h2>By Countries</h2>
                                                {navigationPanelStates.map((state) => (
                                                    <NavigationPanelStates
                                                        key={state.id}
                                                        state={state.state}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="navigation_panel_bottom">
                                        <div className="navigation_panel_bottom_left">
                                            <h2>All Collections</h2>
                                            {navigationPanelChannels.map((chanel) => (
                                                <NavigationPanelChannels
                                                    key={chanel.id}
                                                    channel={chanel.channel}
                                                />
                                            ))}
                                        </div>
                                        <div className="navigation_panel_bottom_right">
                                            <h2>Serials</h2>
                                            {navigationPanelSerials.map((serial) => (
                                                <NavigationPanelSerials
                                                    key={serial.id}
                                                    serial_type={serial.serial_type}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="coming_soon_main">
                                <h2>Coming Soon</h2>
                                <div className="coming_soon_cards_parent">
                                    {comingSoon.map((movie) => (
                                        <ComingSoon
                                            key={movie.id}
                                            info={movie.info}
                                            title={movie.title}
                                            image={movie.image}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="serials_main">
                                <h2>Updated Serials</h2>
                                <div className="serials_main_div">
                                    <h2>Last 12 Updates</h2>
                                    {serials.map((serial) => (
                                        <Serials
                                            key={serial.id}
                                            image={serial.image}
                                            title={serial.title}
                                            season={serial.season}
                                            serials={serial.serials}
                                            channels={serial.channels}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="animes_parent">
                                <h2 className="animes_title">Animes</h2>
                                <div className="animes_main">
                                    {animes.map((anime) => (
                                        <Animes
                                            key={anime.id}
                                            name={anime.name}
                                            image={anime.image}
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>
                        <section className="section_right">
                            <Sorting />
                            <div className="film_cards_main">
                                {movies.map((card) => (
                                    <Movies
                                        key={card.id}
                                        movie_title={card.movie_title}
                                        movie_rating={card.movie_rating}
                                        movie_image={card.movie_image}
                                        movie_year={card.movie_year}
                                        movie_state={card.movie_state}
                                        movie_genre={card.movie_genre}
                                        movie_time={card.movie_time}
                                        movie_premier={card.movie_premier}
                                        movie_quality={card.movie_quality}
                                        movie_info={card.movie_info}
                                        movie_streams={card.movie_streams}
                                        movie_comments={card.movie_comments}
                                        movie_date={card.movie_date}
                                    />
                                ))}
                            </div>
                        </section>
                    </article>
                </section>
                <Background_right />
            </main>
        </div>
    );
}

export default App;
