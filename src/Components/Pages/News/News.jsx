import Header from "../../Header/Header";
import "../News/News.css";
import { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import PokemonNewsSkeletonLoader from "../../Loader/PokemonNewsSkeletonLoader";

const News = () =>{
    const [newsData, setNewsData] = useState([]);
    const [changeColor, setChangeColor] = useState(true);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setShowLoader(false);
        },3000)
    },[])

    const handleChangeColor = () =>{
        setChangeColor(!changeColor);
    }
    useEffect(() => {
        const API_KEY = process.env.REACT_APP__NEWS_API_KEY;

        const fetchNewsData = async () => {
        try {
            const response = await fetch(`https://api.worldnewsapi.com/search-news?api-key=${API_KEY}&text=pokemon`);
            const data = await response.json();
            setNewsData(data.news);
            console.log(data.news);
        } catch (error) {
            console.error('Error fetching news data:', error);
        }
        };
    
        fetchNewsData();
    }, []);
    return(
        <>
            <div className="aboutus-header">
                <Header includeScrollFunctionality={false} changeColor={changeColor} handleChangeColor={handleChangeColor} />
            </div>
            <div className="news-content">
                <div className="container">
                    <div className="row">
                            {showLoader ? (
                                Array.from({length:20}).map((index)=>(
                                    <div key={index} className="col-sm-6 skeleton-loader">
                                        <PokemonNewsSkeletonLoader />
                                    </div>
                                ))
                            ):(
                                newsData.map((news, index)=>(
                                    <>
                                        <div className={`col-sm-6 news-items ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
                                            <img className="w-100" src={news.image} alt={news.title} />
                                        </div>
                                        <div className={`col-sm-6 news-items ${changeColor ? "aboutus-dark-theme":"light-theme"} ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
                                            <p className="news-date">{news.publish_date}</p>
                                            <h3>{news.title}</h3>
                                            <p className="news-text">{news.text}</p>
                                        </div>
                                    </>
                                ))
                            )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default News;