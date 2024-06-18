import React, { useState } from 'react';
import col from "../images/col.jpg";
import cit from "../images/cit.svg";
import Spec from "./Spec";
import logo from "../images/logo.png";
import ApplicationForm from './ApplicationForm';

const Abit = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container">
            <div className="banner">
                <div className="banner__item">
                    <div className="banner__title">
                        Абитуриенту
                    </div>
                    <p>
                        Подготовка профессиональных кадров и их конкурентоспособность на рынке образовательных
                        услуг
                    </p>
                </div>
                <div className="banner__item">
                    <img src={col} alt=""/>
                </div>
            </div>

            <Spec/>
            <div className="mt20"></div>
            <div className="mission">
                <div className="mission__left">
                    <img src={cit} alt=""/>
                    <div className="mission__title">
                        О колледже
                    </div>
                    <div className="mission__text">
                        Уважаемые абитуриенты!

                        Наше учебное заведение было основано в 1920 году. Учебное заведение было известно как
                        педагогический техникум (1921), педагогическое училище (1936), педагогический колледж (1993). В
                        1967 году училище было награждено орденом Трудового Красного Знамени, в 1970 и 1983 годах
                        дипломами ВДНХ.

                        В колледже в разное время работали или учились великие личности: поэт Магжан Жумабаев, писатели
                        Сабит Муканов, Иван Шухов, драматург Шахмет Хусаинов, поэт Жумагали Саин, литературовед
                        Темиргали Нуртазин, композитор В. Коцик и другие известные в Казахстане люди. Из 80
                        преподавателей колледжа 65 имеют высшую и первую категории. В колледже 25 магистров, 2 отличника
                        образования РК, 2 обладателя медали "Ы. Алтынсарин", 53 преподавателя имеют стаж работы более 15
                        лет.

                        Все выпускники колледжа работают по специальности в школах города и области. Выпускники
                        технических специальностей также трудоустроены в различных организациях и продолжают своё
                        обучение в университете. В колледже работают музыкальные коллективы (хор, ансамбли, оркестры,
                        танцевальные студии), спортивные секции, научное студенческое общество, различные кружки и
                        клубы. При колледже имеется 5-этажное общежитие с комфортабельными условиями.
                    </div>
                </div>
                <div className="mission__right">
                    <div className="mission__circle">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="mission__name">
                        Высший колледж <br/>
                        имени Магжана Жумабаева
                    </div>
                    <div className="mission__sub">
                        г. Петропавловск, улица Абая, 28
                    </div>
                </div>
            </div>

            <div className="mis reverce">
                <div className="mis__title">
                    Документы для поступления:
                </div>
                <div className="mis__block">
                    <div className="mis__pun">
                        <div className="mis__pun--item">
                            <div className="number">01</div>
                            <div className="text">Документ об образовании (Аттестат, подлинник)</div>
                        </div>
                        <div className="mis__pun--item">
                            <div className="number">02</div>
                            <div className="text">Медицинская справка ( форма 075У)</div>
                        </div>
                        <div className="mis__pun--item">
                            <div className="number">03</div>
                            <div className="text">Четыре фотографии формата 3х4</div>
                        </div>
                        <div className="mis__pun--item">
                            <div className="number">04</div>
                            <div className="text">Характеристика с последнего места обучения</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="abit">
                <div className="title">Подай документы в лучший колледж страны уже сегодня!</div>
                <div className="text">
                    <p>
                        Не упусти шанс получить качественное образование и открыть двери к блестящему будущему. Подай
                        документы прямо сейчас и стань студентом Высшего колледжа имени Магжана Жумабаева!
                    </p>
                    <p>Получи доступ к передовым учебным программам, опытным преподавателям и уникальным возможностям
                        для
                        личностного и профессионального роста.
                    </p>
                </div>
                <div className="abit__bottom" onClick={handleOpenModal}>
                    Заполнить анкету
                </div>
            </div>

            <ApplicationForm open={isModalOpen} onClose={handleCloseModal} />
        </div>
    )
}

export default Abit;
