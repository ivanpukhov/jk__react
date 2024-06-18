import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import col from "../images/col.jpg";

const CustomCard = styled(Card)({
    borderColor: '#ff9800',
    margin: '16px',
    padding: '16px',
    borderRadius: '8px',
});

const Schedule = () => {
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                const response = await axios.get('https://productive-renewal-4a28a0149b.strapiapp.com/api/schedules?populate=lessons');
                const data = response.data.data.map(schedule => ({
                    id: schedule.id,
                    date: schedule.attributes.date,
                    group: schedule.attributes.group,
                    lessons: schedule.attributes.lessons || []
                }));
                setSchedules(data);
            } catch (error) {
                console.error('Error fetching schedules:', error);
            }
        };

        fetchSchedules();
    }, []);

    return (
        <div className="container">
            <div className="banner">
                <div className="banner__item">
                    <div className="banner__title">Расписание</div>
                    <p>
                        Расписание занятий
                    </p>
                </div>
                <div className="banner__item">
                    <img src={col} alt="" />
                </div>
            </div>
            <Grid container spacing={2}>
                {schedules.map(schedule => (
                    <Grid item xs={12} sm={6} md={1} lg={6} key={schedule.id}>
                        <CustomCard variant="outlined">
                            <CardContent>
                                <Typography variant="h6" style={{ color: '#ff9800' }}>
                                    Группа: {schedule.group}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Дата: {new Date(schedule.date).toLocaleDateString('ru-RU')}
                                </Typography>
                                {schedule.lessons.map((lesson, index) => (
                                    <div key={index} style={{ marginTop: '8px' }}>
                                        <Typography variant="body1"><b>Время:</b> {lesson.time}</Typography>
                                        <Typography variant="body1"><b>Предмет:</b> {lesson.subject}</Typography>
                                        <Typography variant="body1"><b>Преподаватель:</b> {lesson.teacher}</Typography>
                                        <Typography variant="body1"><b>Аудитория:</b> {lesson.classroom}</Typography>
                                    </div>
                                ))}
                            </CardContent>
                        </CustomCard>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Schedule;
