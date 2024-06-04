import { useEffect, useState } from "react";
import { TextField, Button, DialogActions, Autocomplete, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import styles from "./css/editor.module.css";
import { Scheduler } from "@aldabil/react-scheduler";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from "axios";
import dayjs from "dayjs";
import 'dayjs/locale/de';


function RecordEditor({ scheduler }) {

    const [start, setStart] = useState(dayjs());
    const [end, setEnd] = useState(dayjs());
    const [patient, setPatient] = useState(null);
    const [doctor, setDoctor] = useState(null);
    const [description, setDescription] = useState('');
    const [visited, setVisited] = useState(false);
    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);



    const getPatients = async () => {
        const result = await axios.get("http://localhost:8080/patients", { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
        console.log(result.data);
        setPatients(result.data);
    };

    const getDoctors = async () => {
        const result = await axios.get("http://localhost:8080/users", { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
        console.log(result.data);
        setDoctors(result.data);
    };


    const handleSubmit = async () => {
        const record = {
            visitStart: start,
            visitEnd: end,
            patient: {
                id: patient.id
            },
            doctor: {
                id: doctor.id,
                role: doctor.role
            
            },
            description: description,
            isVisited: visited
        }

        const result = await axios.post("http://localhost:8080/patientRecords", record, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });

        console.log(result.data);

        document.location.reload();
    }


    useEffect(() => {
        getPatients();
        getDoctors();
    }, []);


    const startTime = dayjs().set('hour', 9).startOf('hour');
    const closeTime = dayjs().set('hour', 21).startOf('hour'); 




    return (
        <div className={styles.editor}>
            <h1>новая запись</h1>
            <div className={styles.row}>
                <LocalizationProvider className={styles.provider} dateAdapter={AdapterDayjs} adapterLocale="de">
                    <div className={styles.datePicker}>
                        <DateTimePicker
                            label="Начало"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={start}
                            onChange={(e) => setStart(e)}
                            minTime={startTime}
                            maxTime={closeTime}

                        />
                    </div>
                    <div className={styles.datePicker}>
                        <DateTimePicker
                            label="Конец"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={end}
                            onChange={(e) => setEnd(e)}
                            minTime={startTime}
                            maxTime={closeTime}

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
                    options={doctors}
                    onChange={(e, value) => { setDoctor(value); console.log(value) }}
                    getOptionLabel={(option) => option.name + ' ' + option.lastname}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <DialogActions>
                <Button variant="contained" color="secondary" onClick={scheduler.close}>
                    Отмена
                </Button>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Сохранить
                </Button>

            </DialogActions>
        </div>
    )
}

export default RecordEditor