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


const Contacts = () => {


    return (
        <div className="container">
            <div className="banner">
                <div className="banner__item">
                    <div className="banner__title">Высший колледж имени Магжана Жумабаева</div>
                    <p>
                        Подготовка профессиональных кадров и их конкурентоспособность на рынке образовательных
                        услуг
                    </p>
                </div>
                <div className="banner__item">
                    <img src={col} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Contacts;
