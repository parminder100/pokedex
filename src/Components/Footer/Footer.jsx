import "../Footer/Footer.css";
import tmdb_movie_logo from "../../Assets/img/tmdb_movie_logo.svg";
import world_news_api_logo from "../../Assets/img/world_news_api_logo.svg"

const Footer = () =>{
    return(
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="copy_right">
                                <div>
                                    <p className="copy-right">© 2024. All rights reserved. Developed with<span className="heart"></span> by Parminder Singh</p>
                                </div>
                                <div>
                                    <a className="tmdb-logo" href="https://www.themoviedb.org/" target="_blank">
                                        Powered by
                                        <img src={tmdb_movie_logo} alt="tmdb_movie_logo" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="world-news-api-logo-container">
                                <div>
                                    <a className="world-news-api-logo" href="https://worldnewsapi.com/" target="_blank">
                                        Powered by
                                        <img src={world_news_api_logo} alt="world_news_api_logo" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;