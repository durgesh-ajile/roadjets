import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Book.css'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

// import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const timeData = [
    {
        time: "5:00 AM",
        car: "Tata Tigor EV",
        model: "4 seater - Sedan",
        left: "3"
    },
    {
        time: "6:00 AM",
        car: "Tata Tigor EV",
        model: "4 seater - Sedan",
        left: "4"
    },
    {
        time: "9:00 AM",
        car: "Tata Tigor EV",
        model: "4 seater - Sedan",
        left: "2"
    },
    {
        time: "11:00 AM",
        car: "Tata Tigor EV",
        model: "4 seater - Sedan",
        left: "2"
    },
    {
        time: "2:30 PM",
        car: "Tata Tigor EV",
        model: "4 seater - Sedan",
        left: "1"
    },
    {
        time: "5:00 PM",
        car: "Tata Tigor EV",
        model: "4 seater - Sedan",
        left: "1"
    },
    {
        time: "6:00 PM",
        car: "Tata Tigor EV",
        model: "4 seater - Sedan",
        left: "4"
    },
    {
        time: "9:00 PM",
        car: "Tata Tigor EV",
        model: "4 seater - Sedan",
        left: "2"
    },
    {
        time: "10:00 PM",
        car: "Tata Tigor EV",
        model: "4 seater - Sedan",
        left: "0"
    },
    {
        time: "11:00 PM",
        car: "Tata Tigor EV",
        model: "4 seater - Sedan",
        left: "1"
    },
];


const tourData = {
    id: 1,
    title: "Hyderabad(gachibowli circle) - Warangal",
    text: "Our route begins at Gachibowli Circle, meandering through the ORR for a comfortable 3 hours and 30 minutes. Our dedicated pilots ensure a seamless and secure ride. For a personalized experience, kindly share your travel details in advance. Currently, doorstep services are available exclusively in Warangal. Your ticket cost covers all tall charges. Residents of Gachibowli, Madhapur, Raidurg, Hitech City, Kondapur Miyapur will find this route especially convenient. Trust Roadjets for a reliable and enjoyable travel experience.",
    location: "Hyderabad(gachibowli circle) - Warangal - Timings:",
    shortFormStartLocation: "HYD",
    shortFormEndLocation: "WGL",
    shortDescription: "Via ORR-3h: 30 min - A/C - Female Preference",
}

const allRides = [
    {
        case: "GBC-WGL",
        ride1: {
            from: "Hyderabad(gachibowli circle)",
            to: "Warangal",
            code: "g2w"
        },
        ride2: {
            from: "Warangal",
            to: "Hyderabad(gachibowli circle)",
            code: "w2g"
        }
    },
    {
        case: "UPL-WGL",
        ride1: {
            from: "Hyderabad (Uppal)",
            to: "Warangal",
            code: "u2w"
        },
        ride2: {
            from: "Warangal",
            to: "Hyderabad (Uppal)",
            code: "w2u"
        }
    },
    {
        case: "GBC-KNR",
        ride1: {
            from: "Hyderabad(gachibowli circle)",
            to: "Karimnagar",
            code: "g2k"
        },
        ride2: {
            from: "Karimnagar",
            to: "Hyderabad(gachibowli circle)",
            code: "k2g"
        }
    },
    {
        case: "KMM-WGL",
        ride1: {
            from: "Hyderabad(gachibowli circle)",
            to: "Kammam",
            code: "g2km"
        },
        ride2: {
            from: "Kammam",
            to: "Hyderabad(gachibowli circle)",
            code: "km2h"
        }
    }
]

const Book = () => {

    const [bookDate, setBookDate] = useState(() => {
        let date = new Date()
        return date
    })
    const [location, setLocation] = React.useState("Select");
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [seats, setSeats] = React.useState("Select");
    const [routeData, setRouteData] = React.useState("");
    const [filteredData, setFilteredData] = React.useState("");
    const [loading, setLoading] = React.useState("");


    const getRouteData = async () => {
        try {
          let Sdata = await axios({
            method: "get",
            url: "https://curious-hare-jersey.cyclic.app/api/getBookingService"
          })
          setRouteData(Sdata.data.data)
        } catch (err) {
          console.log(err)
        }
      }
    
      
    const navigate = useNavigate()

    // const { route } = useParams();

    const locations = useLocation();
    const searchParams = new URLSearchParams(locations.search);
    const route = searchParams.get('route');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    const handleChange = (e) => {
        setLocation(e.target.value)
        const searchParams = new URLSearchParams(locations.search);
        searchParams.set("route", e.target.value);

        const newUrl = `${window.location.pathname}?${searchParams.toString()}`;

        window.history.pushState({ path: newUrl }, '', newUrl);
    };

    const handleSelectRide = (code) => {
        setLocation(code)
        const searchParams = new URLSearchParams(locations.search);
        searchParams.set("route", code);

        const newUrl = `${window.location.pathname}?${searchParams.toString()}`;

        window.history.pushState({ path: newUrl }, '', newUrl);
        handleClose2()
    }

    const handleNavigate = () => {
        handleClickOpen()
    }

    useEffect(() => {
        if (route && route.length !== 3) {
            handleClickOpen2()
        }

        getRouteData()

    }, [])

    useEffect(() => {
        setLocation(route)
    }, [route])
    useEffect(() => {
        if(routeData){
            let filter = routeData.filter((val) => {
                return "w2g" === route
            })
            setFilteredData(filter)
        }
    }, [routeData])
    console.log(filteredData)

    return (
        <div className='book'>
            <Dialog
                open={open2}
                onClose={handleClose2}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                id='choose-ride'
            >
                <DialogTitle id="alert-dialog-title">
                    {"Select the ride you want to continue with"}
                </DialogTitle>
                <DialogContent id='contents'>
                    {allRides.filter((val) => {
                        return val.case === route
                    }
                    ).map((val) => {
                        return (
                            <>
                                <div className='fromto' onClick={() => {
                                    handleSelectRide(val.ride1.code)
                                }}>
                                    From {val.ride1.from} To {val.ride1.to}
                                </div>
                                <div className='or'>OR</div>
                                <div className='fromto' onClick={() => {
                                    handleSelectRide(val.ride2.code)
                                }}>
                                    From {val.ride2.from} to {val.ride2.to}
                                </div>
                            </>
                        )
                    })}

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose2}>Skip</Button>
                </DialogActions>
            </Dialog>
            <div className="date-location">
                <div className="choose-location">
                    <InputLabel id="demo-simple-select-autowidth-label">Book Ride <span>From - To</span></InputLabel>

                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={location}
                        onChange={handleChange}
                        fullWidth
                        label="Location"
                    >
                        <MenuItem value="Select">
                            <em>Select</em>
                        </MenuItem>
                        <MenuItem value='g2w'>Hyderabad(gachibowli circle) to Warangal</MenuItem>
                        <MenuItem value='w2g'>Warangal to Hyderabad(gachibowli circle)</MenuItem>
                        <MenuItem value='u2w'>Hyderabad (Uppal) - Warangal</MenuItem>
                        <MenuItem value='w2u'>Warangal to Hyderabad (Uppal)</MenuItem>
                        <MenuItem value='g2k'>Hyderabad(gachibowli circle) - Karimnagar</MenuItem>
                        <MenuItem value='k2g'>Karimnagar to Hyderabad(gachibowli circle)</MenuItem>
                        <MenuItem value='g2km'>Hyderabad(gachibowli circle) - Kammam</MenuItem>
                        <MenuItem value='km2h'>Kammam to Hyderabad(gachibowli circle)</MenuItem>
                    </Select>
                </div>
                <div className="choose-date">
                    <div>
                        <InputLabel id="demo-simple-select-autowidth-label">Date of journey</InputLabel>
                        <TextField
                            id="filled-helperText"
                            // label="Date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            type='date'
                            defaultValue={bookDate}
                            // helperText="Choose date of booking"
                            variant="filled"
                            sx={{ width: "300px" }}
                        />
                    </div>
                    <div>
                        <InputLabel id="demo-simple-select-autowidth-label">Total number of passengers</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={seats}
                            onChange={(e) => {
                                setSeats(e.target.value)
                            }}
                            // label="Seats"
                            sx={{ width: "300px" }}
                        >
                            <MenuItem value="Select">
                                <em>Select</em>
                            </MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={0}>More than 8</MenuItem>
                        </Select>
                        {/* <Button variant='contained'>Search Journey</Button> */}
                    </div>
                </div>


            </div>


            {(!loading && routeData) ? (<div className="choose-cab">
                <div className="yellow">
                    <div className="location">
                        <span>{routeData.shortFormStartLocation}</span>
                        <span>{routeData.shortFormEndLocation}</span>
                    </div>
                    <div className="time">{routeData.shortDescription}</div>
                </div>
                <div className="yellow2">{routeData.location}</div>
                <div className="time-box">
                    {timeData.map((data) => {
                        return (
                            <div className="solo-time" id='solo-time' onClick={handleNavigate}>
                                <h3>{data.time}</h3>
                                <div>{data.car}</div>
                                <div>{data.model}</div>
                                <div style={{color:"red"}}>{data.left} seats left</div>
                            </div>
                        );
                    })}
                </div>
            </div>) : null}
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative', bgcolor: "#FFF500", color: "black" }}>
                    <Toolbar>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h4" component="div">
                            Details
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <Typography sx={{ ml: 2, flex: 1, mt: 4 }} variant="h6" component="div">Personal Details</Typography>
                    <ListItemButton>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                            sx={{ mr: 4 }}
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="number"
                            label="Contact Number"
                            type="number"
                            fullWidth
                            variant="standard"
                        />

                    </ListItemButton>
                    {/* <ListItemButton>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="number"
                            label="Pick up address"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                    </ListItemButton> */}
                    <Typography sx={{ ml: 2, flex: 1, mt: 4 }} variant="h6" component="div">Passenger Details</Typography>
                    <ListItemButton>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="number"
                            label="Full name"
                            type="text"
                            variant="standard"
                            sx={{ width: "50%", flex: 1, mr: 4 }}
                        />


                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="number"
                            label="Age"
                            type="text"
                            autoWidth
                            variant="standard"
                            sx={{ width: "30%", flex: 1, mr: 4 }}

                        />
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value='male'
                            // onChange={handleChange}
                            autoWidth
                            label="Gender"


                        >
                            <MenuItem value="Select">
                                <em>Select</em>
                            </MenuItem>
                            <MenuItem value='male'>Male</MenuItem>
                            <MenuItem value='female'>Female</MenuItem>
                            \                </Select>
                    </ListItemButton>
                    <ListItemButton>
                        <Button variant='outlined' style={{ marginRight: "20px" }}>Add Passenger</Button>
                        <Button variant='contained'>Proceed to payment</Button>
                    </ListItemButton>
                </List>
            </Dialog>

        </div>
    )
}

export default Book