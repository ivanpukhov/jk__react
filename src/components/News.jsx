import React, { useState, useEffect } from 'react';
import axios from 'axios';

import news from '../images/news.webp'

const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://productive-renewal-4a28a0149b.strapiapp.com/api/feeds?populate=image');
                setNews(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching news:', error);
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <>
            <div className="title">Новости</div>
            {loading ? (
                <div className="loader">Загрузка...</div>
            ) : (
                <div className="news">
                    {news.map(newsItem => (
                        <div key={newsItem.id} className="news__item">
                            <div className="news__photo">
                                {newsItem.attributes.image.data && newsItem.attributes.image.data.length > 0 && newsItem.attributes.image.data[0].attributes ? (
                                    <img src={`${newsItem.attributes.image.data[0].attributes.url}`} alt={newsItem.attributes.title} />
                                ) : (
                                    <img src={news} alt="No image available" />
                                )}
                            </div>
                            <div className="news__item--title">{newsItem.attributes.title}</div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default News;
