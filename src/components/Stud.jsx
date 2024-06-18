import React, { useState, useEffect } from 'react';
import axios from 'axios';
import col from "../images/col.jpg";
import sch from "../images/sched.png";
import pop from "../images/news.png";
import konk from "../images/konk.png";
import sher from "../images/sher.jpg";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

const CustomButton = styled(Button)({
    backgroundColor: '#ff9800',
    color: 'white',
    '&:hover': {
        backgroundColor: '#e68900',
    },
    margin: '8px',
});

const CustomBox = styled(Box)({
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '24px',
    maxWidth: '600px',
    width: '90%',
    maxHeight: '90%',
    overflow: 'auto',
    outline: 'none',
});

const Abit = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const formattedDate = tomorrow.toISOString().split('T')[0];
    const formatedDate = today.toISOString().split('T')[0];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [schedule, setSchedule] = useState([]);
    const [selectedDate, setSelectedDate] = useState('today');
    const [events, setEvents] = useState([]);
    const [competitions, setCompetitions] = useState([]);

    useEffect(() => {
        const fetchSchedule = async (date) => {
            try {
                const response = await axios.get(`http://localhost:1337/api/schedules?filters[date][$eq]=${date}&populate=lessons`);
                const data = response.data.data;
                const formattedSchedule = data.map(item => ({
                    id: item.id,
                    group: item.attributes.group,
                    lessons: item.attributes.lessons || [],
                }));
                setSchedule(formattedSchedule);
            } catch (error) {
                console.error('Error fetching schedule:', error);
            }
        };

        if (selectedDate === 'today') {
            fetchSchedule(formatedDate);
        } else if (selectedDate === 'tomorrow') {
            fetchSchedule(formattedDate);
        }
    }, [selectedDate, formatedDate, formattedDate]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('https://productive-renewal-4a28a0149b.strapiapp.com/api/events?filters[type][$eq]=event&sort=date:desc&pagination[limit]=2');
                setEvents(response.data.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        const fetchCompetitions = async () => {
            try {
                const response = await axios.get('https://productive-renewal-4a28a0149b.strapiapp.com/api/events?filters[type][$eq]=competition&sort=date:desc&pagination[limit]=2');
                setCompetitions(response.data.data);
            } catch (error) {
                console.error('Error fetching competitions:', error);
            }
        };

        fetchEvents();
        fetchCompetitions();
    }, []);

    const openModal = (date) => {
        setSelectedDate(date);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedGroup(null);
    };

    const selectGroup = (group) => {
        setSelectedGroup(group);
    };

    return (
        <div className="container">
            <div className="banner">
                <div className="banner__item">
                    <div className="banner__title">Студенту</div>
                    <p>
                        Подготовка профессиональных кадров и их конкурентоспособность на рынке образовательных
                        услуг
                    </p>
                </div>
                <div className="banner__item">
                    <img src={col} alt="" />
                </div>
            </div>
            <div className="student">
                <div className="student__item">
                    <div className="student__title">Расписание занятий</div>
                    <div className="student__sch" onClick={() => openModal('today')}>
                        <div className="student__sch-icon">
                            <img src={sch} alt="" />
                        </div>
                        <div className="student__sch-text">
                            <b>Расписание на {formatedDate}</b>
                            <p>Открыть</p>
                        </div>
                    </div>
                    <div className="student__sch" onClick={() => openModal('tomorrow')}>
                        <div className="student__sch-icon">
                            <img src={sch} alt="" />
                        </div>
                        <div className="student__sch-text">
                            <b>Расписание на {formattedDate}</b>
                            <p>Открыть</p>
                        </div>
                    </div>
                </div>
                <div className="student__item">
                    <div className="student__title">Предстоящие события</div>
                    {events.map(event => (
                        <div className="student__sch pop" key={event.id}>
                            <div className="student__sch-icon">
                                <img src={pop} alt="" />
                            </div>
                            <div className="student__sch-text">
                                <b>{event.attributes.title}</b>
                                <p>{new Date(event.attributes.date).toLocaleDateString('ru-RU')}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="student__item">
                    <div className="student__title">Конкурсы и чемпионаты</div>
                    {competitions.map(competition => (
                        <div className="student__sch pop" key={competition.id}>
                            <div className="student__sch-icon">
                                <img src={konk} alt="" />
                            </div>
                            <div className="student__sch-text">
                                <b>{competition.attributes.title}</b>
                                <p>{new Date(competition.attributes.date).toLocaleDateString('ru-RU')}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="student__item">
                    <div className="student__title">Лучшие студенты</div>
                    <div className="student__sch">
                        <div className="student__sch-icon">
                            <img src={sher} alt="" />
                        </div>
                        <div className="student__sch-text">
                            <b>Женис Шерхан</b>
                            <p>Победитель конкурса ТОП 100 студентов РК</p>
                        </div>
                    </div>
                    <div className="student__sch">
                        <div className="student__sch-icon">
                            <img src={konk} alt="" />
                        </div>
                        <div className="student__sch-text">
                            <b>Пухов Иван</b>
                            <p>Победитель областного хакатона </p>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                open={isModalOpen}
                onClose={closeModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <CustomBox>
                    <h2 id="modal-title" style={{ color: '#ff9800' }}>Расписание на {selectedDate === 'today' ? formatedDate : formattedDate}</h2>
                    {!selectedGroup ? (
                        <div>
                            {schedule.map(group => (
                                <CustomButton key={group.id} onClick={() => selectGroup(group)}>{group.group}</CustomButton>
                            ))}
                        </div>
                    ) : (
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h5" style={{ color: '#ff9800', textAlign: 'center' }}>{selectedGroup.group}</Typography>
                            </Grid>
                            {selectedGroup.lessons.map((lesson, index) => (
                                <Grid item xs={12} key={index}>
                                    <Card variant="outlined" sx={{ borderColor: '#ff9800', mb: 2 }}>
                                        <CardContent>
                                            <Typography variant="h6" style={{ color: '#ff9800' }}>{lesson.time}</Typography>
                                            <Typography variant="body1"><b>Предмет:</b> {lesson.subject}</Typography>
                                            <Typography variant="body1"><b>Преподаватель:</b> {lesson.teacher}</Typography>
                                            <Typography variant="body1"><b>Аудитория:</b> {lesson.classroom}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                            <Grid item xs={12} style={{ textAlign: 'center' }}>
                                <CustomButton onClick={() => setSelectedGroup(null)}>Назад</CustomButton>
                            </Grid>
                        </Grid>
                    )}
                    <Button onClick={closeModal} variant="contained" color="error" sx={{ mt: 2 }}>Закрыть</Button>
                </CustomBox>
            </Modal>
        </div>
    );
};

export default Abit;
