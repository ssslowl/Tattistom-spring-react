import { useEffect, useState } from "react";
import { TextField, Button, DialogActions, Autocomplete, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import styles from "./css/editor.module.css";
import { Scheduler } from "@aldabil/react-scheduler";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from "axios";


function RecordEditor({ scheduler }) {

    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [patient, setPatient] = useState(null);
    const [doctor, setDoctor] = useState(null);
    const [description, setDescription] = useState('');
    const [visited, setVisited] = useState(false);
    const [patients, setPatients] = useState([]);

    const getPatients = async () => {
        const result = await axios.get("http://localhost:8080/patients", { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
        console.log(result.data);
        setPatients(result.data);
    };

    const getDoctors = async () => {
        const result = await axios.get("http://localhost:8080/patients", { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
        console.log(result.data);
        setPatients(result.data);
    };


    useEffect(() => {
        getPatients();
    }, []);







    return (
        <div className={styles.editor}>
            <h1>новая запись</h1>
            <div className={styles.row}>
                <LocalizationProvider className={styles.provider} dateAdapter={AdapterDayjs}>
                    <div className={styles.datePicker}>
                        <DateTimePicker
                            label="Начало"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                    </div>
                    <div className={styles.datePicker}>
                        <DateTimePicker
                            label="Конец"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                    </div>
                </LocalizationProvider>
            </div>
            <div className={styles.row}>
                <Autocomplete
                    options={patients}
                    onChange={(e, value) => { setPatient(value); console.log(value) }}
                    getOptionLabel={(option) => option.firstName + ' ' + option.lastName}
                    disablePortal
                    sx={{ width: 550 }}
                    renderInput={(params) => <TextField {...params} label="Пациент" />}
                />
            </div>
            <div className={styles.row}>
                <Autocomplete
                    options={patients}
                    sx={{ width: 550 }}
                    disablePortal
                    renderInput={(params) => <TextField {...params} label="Врач" />}
                />
            </div>
            <div className={styles.row}>
                <FormControl fullWidth>
                    <InputLabel id="visited">Посещено</InputLabel>
                    <Select
                        labelId="visited"
                        value={visited}
                        label="Посещено"
                        onChange={(e) => setVisited(e.target.value)}
                    >
                        <MenuItem value={true}>Да</MenuItem>
                        <MenuItem value={false}>Нет</MenuItem>

                    </Select>
                </FormControl>
            </div>
            <div className={styles.row}>
                <TextField
                    label="Описание"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                />
            </div>

            <DialogActions>
                <Button variant="contained" color="secondary" onClick={scheduler.close}>
                    Отмена
                </Button>
                <Button variant="contained" color="primary">
                    Сохранить
                </Button>

            </DialogActions>
        </div>
    )
}

export default RecordEditor