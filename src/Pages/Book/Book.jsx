import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./Book.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

// import CloseIcon from '@mui/icons-material/Close';
import Slide from "@mui/material/Slide";
import { useLocation, useNavigate } from "react-router-dom";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import axios from "axios";
import { FormHelperText } from "@mui/material";
import Datepicker from "../../Components/Datepicker/DatePicker";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const tourData = {
    id: 1,
    title: "Hyderabad(Rai-Durg Metero) - Warangal",
    text: "Our route begins at Rai-Durg Metero, meandering through the ORR for a comfortable 3 hours and 30 minutes. Our dedicated pilots ensure a seamless and secure ride. For a personalized experience, kindly share your travel details in advance. Currently, doorstep services are available exclusively in Warangal. Your ticket cost covers all tall charges. Residents of Gachibowli, Madhapur, Raidurg, Hitech City, Kondapur Miyapur will find this route especially convenient. Trust Roadjets for a reliable and enjoyable travel experience.",
    location: "Hyderabad(Rai-Durg Metero) - Warangal - Timings:",
    shortFormStartLocation: "HYD",
    shortFormEndLocation: "WGL",
    shortDescription: "Via ORR-3h: 30 min - A/C - Female Preference",
};

const allRides = [
    {
        case: "GBC-WGL",
        ride1: {
            from: "Hyderabad(Rai-Durg Metero)",
            to: "Warangal",
            code: "MD(Rai-Durg Metero)-WGL",
        },
        ride2: {
            from: "Warangal",
            to: "Hyderabad(Rai-Durg Metero)",
            code: "WGL-MD(Rai-Durg Metero)",
        },
    },
    {
        case: "UPL-WGL",
        ride1: {
            from: "Hyderabad (Uppal)",
            to: "Warangal",
            code: "HYD(UPPAL)-WGL",
        },
        ride2: {
            from: "Warangal",
            to: "Hyderabad (Uppal)",
            code: "WGL-HYD(UPPAL)",
        },
    },
    {
        case: "GBC-KNR",
        ride1: {
            from: "Hyderabad(Gachibowli circle)",
            to: "Karimnagar",
            code: "HYD-KNR",
        },
        ride2: {
            from: "Karimnagar",
            to: "Hyderabad(Gachibowli circle)",
            code: "KNR-HYD",
        },
    },
    {
        case: "KMM-WGL",
        ride1: {
            from: "Hyderabad(Gachibowli circle)",
            to: "Kammam",
            code: "HYD-KHM",
        },
        ride2: {
            from: "Kammam",
            to: "Hyderabad(Gachibowli circle)",
            code: "KHM-HYD",
        },
    },
];

const Book = () => {
    const [bookDate, setBookDate] = useState(
    //     () => {
    //     let today = new Date();
    //     let dd = String(today.getDate()).padStart(2, '0');
    //     let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    //     let yyyy = today.getFullYear();

    //     return today = yyyy + '-' + mm + '-' + dd;
    // }
);
    const [location, setLocation] = React.useState("Select");
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [seats, setSeats] = React.useState(1);
    const [routeData, setRouteData] = React.useState("");
    const [filteredData, setFilteredData] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [bookingTiming, setBookingTiming] = useState([]);
    const [tripTime, setTripTime] = useState("");
    const [passengerDetails, setPassengerDetails] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pickupLocation, setPickupLocation] = useState([]);
    const [dropLocation, setDropLocation] = useState([]);
    const [pick, setPick] = useState("");
    const [drop, setDrop] = useState("");
    const [seatAvl, setSeatAvl] = useState(null);
    const [finalTiming, setFinalTiming] = useState('choosedate');

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const getRouteData = async () => {
        try {
            let Sdata = await axios({
                method: "get",
                url: "https://seal-app-aximy.ondigitalocean.app/api/getBookingService",
            });
            setRouteData(Sdata.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    const locations = useLocation();
    const searchParams = new URLSearchParams(locations.search);
    const route = searchParams.get("route");

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
        setLocation(e.target.value);
        const searchParams = new URLSearchParams(locations.search);
        searchParams.set("route", e.target.value);

        const newUrl = `${window.location.pathname}?${searchParams.toString()}`;

        window.history.pushState({ path: newUrl }, "", newUrl);
    };

    const handleSelectRide = (code) => {
        setLocation(code);
        const searchParams = new URLSearchParams(locations.search);
        searchParams.set("route", code);

        const newUrl = `${window.location.pathname}?${searchParams.toString()}`;

        window.history.pushState({ path: newUrl }, "", newUrl);
        handleClose2();
        scrollToTop()
    };


    const handleNavigate = async (time) => {
        setTripTime(time);

        const getAvailiability = await axios({
            method: "GET",
            url: `https://seal-app-aximy.ondigitalocean.app/api/checkavailiability?bookDate=${bookDate}&timing=${time}&route=${location}`,
        });

        if (getAvailiability.status === 201) {
            const seatOccupied = getAvailiability.data.totatSeats;
            const time = getAvailiability.data.timing;
            const obj = {
                seatOccupied,
                time,
            };
            setSeatAvl(obj);
            bookingTiming.forEach((element) => {
                if (element?.time === time) {
                    if (element?.seater - seatOccupied >= seats) {
                        setTimeout(() => {
                            handleClickOpen();
                        }, 200);
                    } else {
                        alert("seats are full")
                    }
                }
            });
        }

        handleClickOpen();
    };

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    useEffect(() => {
        if (route && route[0] === "@") {
            handleClickOpen2();
        }

        getRouteData();
    }, []);

    useEffect(() => {
        setLocation(route);
    }, [route]);

    useEffect(() => {
        if (routeData) {
            let filter = routeData.filter((val) => {
                if (location === val.routeOne || location === val.routeTwo) {
                    return val;
                }
            });

            console.log(filter);
            allRides.forEach((element) => {
                if (element.ride1.code === location) {
                    setBookingTiming(filter[0]?.pickUpTiming);
                    setPickupLocation(filter[0]?.pickUpLocation);
                    setDropLocation(filter[0]?.dropLocation);
                }
                if (element.ride2.code === location) {
                    setBookingTiming(filter[0]?.dropUpTiming);
                    setPickupLocation(filter[0]?.dropLocation);
                    setDropLocation(filter[0]?.pickUpLocation);
                }
            });
            setFilteredData(filter);
        }
    }, [routeData, location]);

    console.log(routeData)
    console.log(location)

    
    useEffect(() => {
        if(bookDate && bookingTiming){
            let booking = ''

            // let timings = booking.find((val) => {
            //     return val === daysOfWeek[bookDate.getDay()]
            // })
            // console.log(timings)
            for(let x in bookingTiming[0]){
                if(x === daysOfWeek[bookDate.getDay()]){
                    booking = bookingTiming[0][x]
                }
            }
            if(booking){
                setFinalTiming(booking)
            }else{
                setFinalTiming(null)
            } 
        }
    }, [bookDate, bookingTiming])

    console.log(finalTiming)

    const handleInputChange = (event, index, field) => {
        const newPassengerDetails = [...passengerDetails];
        newPassengerDetails[index] = {
            ...newPassengerDetails[index],
            [field]: event.target.value,
        };
        setPassengerDetails(newPassengerDetails);
    };

    console.log(seatAvl);

    useEffect(() => {
        setSeatAvl(null)
    }, [bookDate, location, seats])

    const checkoutHandler = async (e, amount) => {
        e.preventDefault();
        if (amount) {
            const totalAmount = amount * seats;
            try {
                const response = await axios({
                    method: "POST",
                    url: "https://seal-app-aximy.ondigitalocean.app/api/create/order",
                    data: {
                        amount: totalAmount,
                        bookRide: location,
                        name: name,
                        phone: phone,
                        email: email,
                        seats: seats,
                        pickUpLocations: pick,
                        dropLocation: drop,
                        timings: tripTime,
                        route: route,
                        bookingDate: bookDate,
                        passengerDetails: passengerDetails,
                    },
                    withCredentials: true,
                });

                const order = response.data;

                const options = {
                    key: "rzp_live_thNSYHpfDnVrHq",
                    amount: order.order.amount,
                    currency: "INR",
                    name: "Roadjets",
                    description: "This is testing",
                    image:
                        "https://media.licdn.com/dms/image/D560BAQFojamwsLveVg/company-logo_200_200/0/1684227273836?e=1713398400&v=beta&t=5MWfqSsocKfikksEcYIxHadnUq2i2eWFQ4rrBL3VYl8",
                    order_id: order.order.id,
                    callback_url: `https://seal-app-aximy.ondigitalocean.app/api/payment/verify`,
                    prefill: {
                        name: order.order.notes.name,
                        email: order.order.notes.email,
                        contact: order.order.notes.phone,
                    },
                    notes: {
                        address: "Razorpay Corporate Office",
                        bookRide: location,
                        seat: seats,
                        pickUpLocations: pick,
                        dropLocation: dropLocation,
                        timings: tripTime,
                        route: route,
                        name: order.order.notes.name,
                        email: order.order.notes.email,
                        contact: order.order.notes.phone,
                    },
                    theme: {
                        color: "#121212",
                    },
                };
                const razor = new window.Razorpay(options);
                razor.open();
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("Please select trip to proceed");
        }
    };

    const renderPassengerFields = () => {
        const fields = [];
        for (let i = 0; i < seats; i++) {
            fields.push(
                <div className="details-inline" key={i}>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id='passenger'
                        name={`name-${i}`}
                        label={`Name of passenger ${i + 1}`}
                        type="text"
                        variant="standard"
                        sx={{ width: { lg: "50%", sm: "50%", xs: "80%" }, flex: 1, marginRight: 4 }}
                        value={passengerDetails[i]?.name || ""}
                        onChange={(event) => handleInputChange(event, i, "name")}
                    />
                    <br />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id='passenger'
                        name={`age-${i}`}
                        label={`Age of passenger ${i + 1}`}
                        type="text"
                        variant="standard"
                        sx={{ width: { lg: "30%", sm: "30%", xs: "80%" }, mb: { xs: "25px" }, flex: 1, marginRight: 4 }}
                        value={passengerDetails[i]?.age || ""}
                        onChange={(event) => handleInputChange(event, i, "age")}
                    />
                    <div className="pgender">
                        <InputLabel>Gender of passenger {i + 1}</InputLabel>
                        <Select
                            labelId={`gender-${i}`}
                            id={`gender-${i}`}
                            autoWidth
                            label=""
                            value={passengerDetails[i]?.gender || ""}
                            onChange={(event) => handleInputChange(event, i, "gender")}
                            sx={{ width: "220px", height: '50px' }}
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </Select>
                    </div>
                </div>
            );
        }
        return fields;
    };


    return (
        <div className="book">
            <Dialog
                open={open2}
                onClose={handleClose2}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                id="choose-ride"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Select the ride you want to continue with"}
                </DialogTitle>
                <DialogContent id="contents">
                    {allRides
                        .filter((val) => {
                            return val.case === route.split("@")[1];
                        })
                        .map((val) => {
                            return (
                                <>
                                    <div
                                        className="fromto"
                                        onClick={() => {
                                            handleSelectRide(val.ride1.code);
                                        }}
                                    >
                                        From {val.ride1.from} To {val.ride1.to}
                                    </div>
                                    <div className="or">OR</div>
                                    <div
                                        className="fromto"
                                        onClick={() => {
                                            handleSelectRide(val.ride2.code);
                                        }}
                                    >
                                        From {val.ride2.from} to {val.ride2.to}
                                    </div>
                                </>
                            );
                        })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose2}>Skip</Button>
                </DialogActions>
            </Dialog>
            <div className="date-location">
                <div className="choose-location">
                    <InputLabel id="demo-simple-select-autowidth-label">
                        Book Ride <span>From - To</span>
                    </InputLabel>

                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={location}
                        onChange={handleChange}
                        fullWidth
                        label=""
                        sx={{ width: { xs: "300px", lg: "100%", md: "100%" } }}
                    >
                        <MenuItem value="Select">
                            <em>Select</em>
                        </MenuItem>
                        <MenuItem value="MD(Rai-Durg Metero)-WGL">
                            Mindspace(Rai-Durg Metero) to Warangal
                        </MenuItem>
                        <MenuItem value="WGL-MD(Rai-Durg Metero)">
                            Warangal to Mindspace(Rai-Durg Metero)
                        </MenuItem>
                        {/* <MenuItem value="HYD(UPPAL)-WGL">
                            Hyderabad (Uppal) - Warangal
                        </MenuItem>
                        <MenuItem value="WGL-HYD(UPPAL)">
                            Warangal to Hyderabad (Uppal)
                        </MenuItem> */}
                        {/* <MenuItem value="HYD-KNR">
                            Hyderabad(Gachibowli circle) - Karimnagar
                        </MenuItem>
                        <MenuItem value="KNR-HYD">
                            Karimnagar to Hyderabad(Gachibowli circle)
                        </MenuItem>
                        <MenuItem value="HYD-KHM">
                            Hyderabad(Gachibowli circle) - Kammam
                        </MenuItem>
                        <MenuItem value="KHM-HYD">
                            Kammam to Hyderabad(Gachibowli circle)
                        </MenuItem> */}
                    </Select>
                </div>
                <div className="choose-date">
                    <div>
                        <InputLabel id="demo-simple-select-autowidth-label">
                            Date of journey
                        </InputLabel>
                        {/* <TextField
                            id="filled-helperText"
                            // label="Date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            type="date"
                            defaultValue={bookDate}
                            // helperText="Choose date of booking"
                            variant="filled"
                            sx={{ width: { xs: "300px", lg: "300px", sm: "300px" } }}
                            onChange={(e) => {
                                setBookDate(e.target.value);
                            }}
                        /> */}
                        <Datepicker bookDate={bookDate} setBookDate={setBookDate} location={location}/>
                    </div>
                    <div>
                        <InputLabel id="demo-simple-select-autowidth-label">
                            Total number of passengers
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={seats}
                            onChange={(e) => {
                                setSeats(e.target.value);
                            }}
                            // label="Seats"
                            sx={{ width: "300px" }}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                        </Select>
                        {/* <Button variant='contained'>Search Journey</Button> */}
                    </div>
                </div>
            </div>

            {!loading && filteredData ? (
                <div className="choose-cab">
                    <div className="yellow">
                        <div className="location">
                            <span>{filteredData[0]?.shortFormStartLocation}</span>
                            <span>{filteredData[0]?.shortFormEndLocation}</span>
                        </div>
                        <div className="time">{filteredData[0]?.shortDescription}</div>
                    </div>
                    <div className="yellow2">{filteredData[0]?.routeOne === location ? filteredData[0]?.title : filteredData[0]?.returnRoute} - Timings:</div>
                    <div className="time-box">
                        {finalTiming === 'choosedate' ? <div style={{color:"red"}}>Please select date</div> :
                       finalTiming === null ? <div style={{color:"red"}}>No cars available for selected date</div> : finalTiming?.map((data) => {
                            return (
                                <div
                                    className="solo-time"
                                    key={data._id}
                                    id="solo-time"
                                    onClick={() => {
                                        handleNavigate(data.time);
                                    }}
                                >
                                    <h3>{data.time}</h3>
                                    <div>{data.car}</div>
                                    <div>{data.model}</div>
                                    {seatAvl && seatAvl.time === data.time ? (
                                        <div style={{ color: "red" }}>
                                            {seatAvl.seatOccupied
                                                ? data.seater - seatAvl?.seatOccupied
                                                : data.seater}{" "}
                                            seats left
                                        </div>
                                    ) : null}
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : null}
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar
                    sx={{ position: "relative", bgcolor: "#FFF500", color: "black" }}
                >
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
                    <Typography
                        sx={{ ml: 2, flex: 1, mt: 4 }}
                        variant="h6"
                        component="div"
                    >
                        Personal Details
                    </Typography>
                    <div className="details-inline">
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="name"
                            label="Full Name"
                            type="name"
                            fullWidth
                            variant="standard"
                            sx={{ mr: { xs: 0, sm: 4, lg: 4 } }}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
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
                            sx={{ mr: { xs: 0, sm: 4, lg: 4 } }}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
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
                            onChange={(e) => {
                                setPhone(e.target.value);
                            }}
                        />
                    </div>

                    <div className="details-inline">
                        <div className="pickup-loctn">
                            <InputLabel id="demo-simple-select-autowidth-label">
                                Pickup Location
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={pick}
                                onChange={(e) => {
                                    setPick(e.target.value);
                                }}
                                // label="Seats"
                                sx={{ width: { lg: "300px", sm: "300px", xs: "112%" }, height: "50px" }}
                            >
                                {pickupLocation.map((curr) => {
                                    // Ensure curr is defined and not null before rendering MenuItem
                                    if (curr !== undefined && curr !== null) {
                                        return (
                                            <MenuItem key={curr} value={curr}>
                                                {curr}
                                            </MenuItem>
                                        );
                                    }
                                    return null;
                                })}
                            </Select>
                        </div>
                        <div className="pickup-loctn">
                            <InputLabel id="demo-simple-select-autowidth-label">
                                Drop Location
                            </InputLabel>

                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={drop}
                                onChange={(e) => {
                                    setDrop(e.target.value);
                                }}
                                // label="Seats"
                                sx={{ width: { lg: "300px", sm: "300px", xs: "112%" }, height: "50px" }}
                            >
                                {dropLocation.map((curr) => {
                                    // Ensure curr is defined and not null before rendering MenuItem
                                    if (curr !== undefined && curr !== null) {
                                        return (
                                            <MenuItem key={curr} value={curr}>
                                                {curr}
                                            </MenuItem>
                                        );
                                    }
                                    return null;
                                })}
                            </Select>
                        </div>
                    </div>


                    <Typography
                        sx={{ ml: 2, flex: 1, mt: 4 }}
                        variant="h6"
                        component="div"
                    >
                        Passenger Details
                    </Typography>
                    {renderPassengerFields()}
                    <div className="payment-btn">
                        <Button
                            variant="contained"
                            onClick={(e) => {
                                checkoutHandler(e, filteredData[0]?.price);
                            }}
                        >
                            Proceed to payment
                        </Button>
                    </div>

                </List>
            </Dialog>
        </div>
    );
};

export default Book;
