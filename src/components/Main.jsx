import col from "../images/col.jpg";
import cit from "../images/cit.svg";
import dir from "../images/dir.png";
import mis from "../images/mis.webp";
import news from "../images/news.webp";
import Spec from "./Spec";
import News from "./News";

const Main = () => {
    return (
        <div className="container">
            <div className="banner">
                <div className="banner__item">
                    <div className="banner__title">
                        Высший колледж имени Магжана Жумабаева
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
            <div className="mission">
                <div className="mission__left">
                    <img src={cit} alt=""/>
                    <div className="mission__title">
                        «Уважаемые преподаватели и студенты!»
                    </div>
                    <div className="mission__text">
                        «Эпоха новых взглядов, креативного мышления заставляет менять подходы и технологии во всем.
                        Сегодня как никогда ощущается дефицит молодых специалистов, поэтому большие надежды
                        возлагаются на систему профессионального образования, на подготовку квалифицированных
                        специалистов. Это достигается через освоение государственных образовательных стандартов на
                        основе взаимопонимания и сотрудничества между педагогами и студентами.»
                    </div>
                </div>
                <div className="mission__right">
                    <div className="mission__circle">
                        <img src={dir} alt=""/>
                    </div>
                    <div className="mission__name">
                        Жандильдин <br/>
                        Ерлик Борисович
                    </div>
                    <div className="mission__sub">
                        Директор
                    </div>
                </div>
            </div>

            <Spec/>
            <div className="mis">
                <div className="mis__image">
                    <img src={mis} alt=""/>
                </div>
                <div className="mis__block">
                    <div className="mis__title">
                        Миссия Высшего колледжа имени М. Жумабаева
                    </div>
                    <p>
                        Миссия заключается в реализации государственной политики в области технического и
                        профессионального образования, обеспечивающей конкурентоспособность выпускников и устойчивое
                        развитие колледжа.
                    </p>
                    <div className="mis__pun">
                        <div className="mis__pun--item">
                            <div className="number">01</div>
                            <div className="text">Раскритие тезиса более подробно, для ясности</div>
                        </div>
                        <div className="mis__pun--item">
                            <div className="number">02</div>
                            <div className="text">Раскритие тезиса более подробно, для ясности</div>
                        </div>
                        <div className="mis__pun--item">
                            <div className="number">03</div>
                            <div className="text">Раскритие тезиса более подробно, для ясности</div>
                        </div>
                        <div className="mis__pun--item">
                            <div className="number">04</div>
                            <div className="text">Раскритие тезиса более подробно, для ясности</div>
                        </div>
                    </div>
                </div>
            </div>
            <News />
            <div className="docs">
                <div className="title">Преподавателю и сотруднику</div>
                <div className="docs__block">
                    <a href="https://colmagzhan.kz/public/sova_sko_km/files/2023/8/22/220823_125728_obrazec-anons.pdf">Антикоррупционный стандарт</a>
                    <a href="https://colmagzhan.kz/public/sova_sko_km/files/2023/8/22/220823_125218_obrazec-anons.pdf">Положение организационной структуры</a>
                    <a href="https://colmagzhan.kz/public/sova_sko_km/files/2018/10/25/251018_145620_pravila-vnutrennego-trudovogo-rasporyadka2016.pdf"> Правила внутреннего распорядка</a>
                    <a href="https://colmagzhan.kz/public/sova_sko_km/files/2020/9/22/220920_152153_kodeks-chesti-prepod-rus.pdf"> Кодекс чести преподавателя</a>
                    <a href="https://colmagzhan.kz/public/sova_sko_km/files/2023/1/27/270123_171055_grafik-uchebnogo-processa-2022-2023.PDF"> График учебно-воспитательного процесса 2022-2023 учебного года </a>
                    <a href="https://colmagzhan.kz/public/sova_sko_km/files/2023/1/20/200123_113129_perecheny-ekzamenov-i-zachetov-na-2022-2023-uchebnyy-god-novyy-1.pdf"> Перечень экзаменов и зачетов </a>
                    <a href="https://colmagzhan.kz/public/sova_sko_km/files/2023/1/20/200123_111924_o-statuse-pedagoga.pdf"> Статус педагога </a>
                    <a href="https://colmagzhan.kz/public/sova_sko_km/files/2020/9/21/210920_173309_pamyatka-kuratoru.pdf"> Памятка куратору </a>
                </div>
            </div>


        </div>

    )
}

export default Main
