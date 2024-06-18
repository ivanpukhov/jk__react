import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';

const CustomBox = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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

const ApplicationForm = ({ open, onClose }) => {
    const [fullName, setFullName] = useState('');
    const [school, setSchool] = useState('');
    const [grades, setGrades] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [specialties, setSpecialties] = useState([]);

    useEffect(() => {
        const fetchSpecialties = async () => {
            try {
                const response = await axios.get('https://productive-renewal-4a28a0149b.strapiapp.com/api/specialities');
                setSpecialties(response.data.data);
            } catch (error) {
                console.error('Error fetching specialties:', error);
            }
        };

        fetchSpecialties();
    }, []);

    const handleSubmit = async () => {
        try {
            await axios.post('https://productive-renewal-4a28a0149b.strapiapp.com/api/applications', {
                data: {
                    fullName,
                    school,
                    grades,
                    speciality: specialty,  // убедитесь, что используете правильный ключ 'speciality'
                },
            });
            onClose();
        } catch (error) {
            console.error('Error submitting application:', error);
        }
    };

    return (
        <Modal open={open} onClose={onClose}>
            <CustomBox>
                <h2>Заполнить анкету</h2>
                <TextField
                    label="ФИО"
                    fullWidth
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Где учился"
                    fullWidth
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Сколько классов"
                    fullWidth
                    value={grades}
                    onChange={(e) => setGrades(e.target.value)}
                    margin="normal"
                />
                <Select
                    fullWidth
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    displayEmpty
                    margin="normal"
                >
                    <MenuItem value="" disabled>
                        Выберите специальность
                    </MenuItem>
                    {specialties.map((spec) => (
                        <MenuItem key={spec.id} value={spec.id}>
                            {spec.attributes.title}
                        </MenuItem>
                    ))}
                </Select>
                <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '16px' }}>
                    Отправить
                </Button>
            </CustomBox>
        </Modal>
    );
};

export default ApplicationForm;
