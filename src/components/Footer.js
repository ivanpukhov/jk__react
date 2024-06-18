import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../images/logo.png';
import footer from '../images/footer.svg';

function Footer() {
    const [contacts, setContacts] = useState([]);
    const [subInfo, setSubInfo] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('https://productive-renewal-4a28a0149b.strapiapp.com/api/contacts');
                setContacts(response.data.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        const fetchSubInfo = async () => {
            try {
                const response = await axios.get('https://productive-renewal-4a28a0149b.strapiapp.com/api/sub-infos');
                if (response.data.data.length > 0) {
                    setSubInfo(response.data.data[0].attributes);
                }
            } catch (error) {
                console.error('Error fetching sub info:', error);
            }
        };

        fetchContacts();
        fetchSubInfo();
    }, []);

    useEffect(() => {
        const removeEmptyDivs = () => {
            const divs = document.querySelectorAll('div');
            divs.forEach(div => {
                if (div.innerHTML.trim() === '') {
                    div.remove();
                }
            });
        };

        removeEmptyDivs();
    }, [contacts, subInfo]);

    return (
        <>
            <div className="container">
                <div className="title">Контакты</div>
                <div className="contacts">
                    {contacts.length > 0 ? (
                        contacts.map(contact => (
                            <div className="contacts__item" key={contact.id}>
                                <div className="contacts__title">{contact.attributes.title}</div>
                                <div className="contacts__text">{contact.attributes.name || ''}</div>
                                <div className="contacts__text">{contact.attributes.address || ''}</div>
                                <div className="contacts__text">{contact.attributes.fax || ''}</div>
                            </div>
                        ))
                    ) : (
                        <div className="contacts__item">Нет данных для отображения</div>
                    )}
                </div>
                {subInfo && (
                    <div className="sub">
                        <div className="sub__title">{subInfo.title}</div>
                        <div className="sub__text">{subInfo.text}</div>
                    </div>
                )}
            </div>
            <footer className="header">
                <img src={logo} alt=""/>
                <div className="footer__links">
                    <img src={footer} alt=""/>
                </div>
                <div className="header__btn">
                    Контакты
                </div>
            </footer>
            <p className="footer__text">© 2024 Высший колледж имени Магжана Жумабаева</p>
            <p className="footer__text">Разработал Пухов Иван</p>
        </>
    );
}

export default Footer;
