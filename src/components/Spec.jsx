import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Spec = () => {
    const [specialities, setSpecialities] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        const fetchSpecialities = async () => {
            try {
                const response = await axios.get('https://productive-renewal-4a28a0149b.strapiapp.com/api/specialities');
                setSpecialities(response.data.data);
            } catch (error) {
                console.error('Error fetching specialities:', error);
            }
        };

        fetchSpecialities();
    }, []);

    const showMore = () => {
        setVisibleCount(prevCount => prevCount + 6);
    };

    return (
        <>
            <div className="spec">
                <div className="spec__title">Направления обучения</div>
                <div className="spec__block">
                    {specialities.slice(0, visibleCount).map(speciality => (
                        <div className="spec__block--item" key={speciality.id}>
                            <h3>{speciality.attributes.title}</h3>
                            <div className="bottom">
                                <div className="bottom__text">
                                    <div>Срок обучения: {speciality.attributes.duration}</div>
                                    <div>Язык обучения: {speciality.attributes.language}</div>
                                    <div>{speciality.attributes.base}</div>
                                </div>
                                <div className="bottom__link">
                                    <svg
                                        width="42"
                                        height="42"
                                        viewBox="0 0 42 42"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.875 21H25.375M21.875 26.25L27.125 21L21.875 15.75"
                                            stroke="black"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M10.5 35C13.4225 37.1875 17.0625 38.5 21 38.5C30.66 38.5 38.5 30.66 38.5 21C38.5 11.34 30.66 3.5 21 3.5C11.34 3.5 3.5 11.34 3.5 21C3.5 23.5025 4.025 25.9 4.9875 28.0525"
                                            stroke="black"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {visibleCount < specialities.length && (
                <div className="bbtn" onClick={showMore}>Показать все</div>
            )}
        </>
    );
};

export default Spec;
