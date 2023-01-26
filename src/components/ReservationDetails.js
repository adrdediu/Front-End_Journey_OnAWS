
import dayjs from "dayjs"

import { VStack,Text, HStack } from "@chakra-ui/react"
import React from "react"
import BackButton from "./BackButton"
import ProgressBar from "./ProgressBar"
import Banner from "./Banner.js"
import ConfirmButton from "./ConfirmButton.js"

import resDetImg from "../assets/images/reservationBanner.jpg"

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import TableBarIcon from '@mui/icons-material/TableBar';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useNavigate } from "react-router-dom"


export default function ReservationDetails() {


    let today = new Date();
    today = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    const [rezDate, setRezDate] = React.useState(dayjs(today));
    const [rezTime,setRezTime] = React.useState(dayjs('2018-01-01T00:00:00.000Z'));
    const [diners, setDiners] = React.useState('4');
    const [table,setTable] = React.useState('Indoors');

    const [windowSize, setWindowSize] = React.useState([window.innerWidth]);
    React.useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth]);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
    });

    const handleChangeDiners = (event) => {
      setDiners(event.target.value);
    };
    
    const handleChangeTable = (event) => {
        setTable(event.target.value);
      };

    function customWidth() {
        if(windowSize[0] > 600) return "150px";
        else return "125px"
    }  
    let cWidth = customWidth();

    const customPicker = createTheme({
        components: {
          // Name of the component
          MuiInputBase: {
            styleOverrides: {
              // Name of the slot
              root: {
                // Some CSS
                height: "46px",
                background: "white",
                width: cWidth,
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)"
              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              // Name of the slot
              root: {
                // Some CSS
                color:"black",
                borderRadius:"16px",
              },
            },
          },
        },
      });
    
    const navigate = useNavigate();
    
    const handleSubmit = e => {
            e.preventDefault();
            const data = {
                date:`${rezDate.$M+1}/${rezDate.$D}/${rezDate.$y}`,
                time:`${rezTime.$H}:${rezTime.$m}`,
                diners:diners,
                table:table
            }
            navigate('/reservation-create-account',{state:data});
  };


    return(
            <main>
                <Banner imageSrc={resDetImg}/>
                <section className="reservation-background">
                    <section className="reservation-content">
                        <BackButton href="/"/>
                        <ProgressBar phase="1"/>
                        <div className="reservation-content-panel">
                            <VStack justifyContent="space-between" margin="20px 0">
                                <Text className="reservation-title">Reserve a Table</Text>
                                <Text className="reservation-info">Select the number of diners, the table placement and time. </Text>
                                <div className="reservation-content-panel-segment">
                                    <HStack alignItems="center" >
                                    <div className="reservation-content-panel-segment-icon">
                                        <CalendarMonthIcon sx={{fontSize:"45px",
                                            color:"#495E57",
                                            bgcolor:"white",
                                            borderRadius:"16px",
                                            border: "1px inset solid lightgrey",
                                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                                        }}/>
                                    </div>
                                    <div className="reservation-content-panel-segment-text">
                                        <p>Date</p>
                                    </div>
                                    <div className="reservation-content-panel-segment-date">
                                        <ThemeProvider theme={customPicker}>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    value={rezDate}
                                                    onChange={(newValue) => {
                                                    setRezDate(newValue);
                                                    }}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                            </LocalizationProvider>
                                        </ThemeProvider> 
                                    </div>
                                    </HStack>
                                </div>
                                <div className="reservation-content-panel-segment">
                                    <HStack alignItems="center">
                                        <div className="reservation-content-panel-segment-icon">
                                            <AccessTimeIcon sx={{fontSize:"45px",
                                                color:"#495E57",
                                                bgcolor:"white",
                                                borderRadius:"16px",
                                                border: "1px inset solid lightgrey",
                                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                                            }}/>
                                        </div>
                                        <div className="reservation-content-panel-segment-text">
                                            <p>Time</p>
                                        </div>
                                        <div className="reservation-content-panel-segment-date">
                                            <ThemeProvider theme={customPicker}>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <TimePicker
                                                    value={rezTime}
                                                    onChange={(newValue) => {
                                                        setRezTime(newValue)
                                                    }}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                                </LocalizationProvider>
                                            </ThemeProvider> 
                                        </div>
                                        </HStack>
                                </div>
                                <div className="reservation-content-panel-segment">
                                <HStack alignItems="center">
                                        <div className="reservation-content-panel-segment-icon">
                                            <PeopleIcon sx={{fontSize:"45px",
                                                color:"#495E57",
                                                bgcolor:"white",
                                                borderRadius:"16px",
                                                border: "1px inset solid lightgrey",
                                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                                            }}/>
                                        </div>
                                        <div className="reservation-content-panel-segment-text">
                                            <p>Diners</p>
                                        </div>
                                        <div className="reservation-content-panel-segment-date">
                                        <ThemeProvider theme={customPicker}>
                                            <FormControl >
                                                <InputLabel id="diners-select-label">Diners</InputLabel>
                                                <Select
                                                labelId="diners-select-label"
                                                id="diners-select"
                                                value={diners}
                                                onChange={handleChangeDiners}
                                                autoWidth
                                                label="Diners"
                                                >
                                                <MenuItem value={4}>4 People</MenuItem>
                                                <MenuItem value={6}>6 People</MenuItem>
                                                <MenuItem value={8}>8 People</MenuItem>
                                                <MenuItem value={12}>12 People</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </ThemeProvider>
                                        </div>
                                        </HStack>
                                </div>
                                <div className="reservation-content-panel-segment">
                                <HStack alignItems="center">
                                        <div className="reservation-content-panel-segment-icon">
                                            <TableBarIcon sx={{fontSize:"45px",
                                                color:"#495E57",
                                                bgcolor:"white",
                                                borderRadius:"16px",
                                                border: "1px inset solid lightgrey",
                                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                                            }}/>
                                        </div>
                                        <div className="reservation-content-panel-segment-text">
                                            <p>Table</p>
                                        </div>
                                        <div className="reservation-content-panel-segment-date">
                                        <ThemeProvider theme={customPicker}>
                                            <FormControl >
                                                <InputLabel id="table-select-label">Table</InputLabel>
                                                <Select
                                                labelId="table-select-label"
                                                id="table-select"
                                                value={table}
                                                onChange={handleChangeTable}
                                                autoWidth
                                                label="Table"
                                                >
                                                <MenuItem value={'Indoors'}>Indoors</MenuItem>
                                                <MenuItem value={'Outdoors'}>Outdoors</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </ThemeProvider>
                                        </div>
                                        </HStack>
                                </div>
                                <ConfirmButton title="Confirm  reservation details" onSubmit={handleSubmit}/>
                            </VStack>
                        </div>
                    </section>
                </section>
            </main>
    )
}