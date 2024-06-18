import React, {useEffect, useState} from 'react';
import axios from 'axios';
import col from "../images/col.jpg";

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://productive-renewal-4a28a0149b.strapiapp.com/api/feeds?populate=image');
                setNews(response.data.data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className='container'>
            <div className="banner">
                <div className="banner__item">
                    <div className="banner__title">Новости</div>
                    <p>
                        Самые интересные события которые происходят в нашем колледже отображены здесь
                    </p>
                </div>
                <div className="banner__item">
                    <img src={col} alt=""/>
                </div>
            </div>
            <div className="news page">
                {news.map(newsItem => (
                    <div key={newsItem.id} className="news__item">
                        <div className="news__photo">
                            {newsItem.attributes.image.data && newsItem.attributes.image.data.length > 0 && newsItem.attributes.image.data[0].attributes ? (
                                <img src={`http://localhost:1337${newsItem.attributes.image.data[0].attributes.url}`}
                                     alt={newsItem.attributes.title}/>
                            ) : (
                                <img src={news} alt="No image available"/>
                            )}
                        </div>
                        <div className="news__item--title">{newsItem.attributes.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
