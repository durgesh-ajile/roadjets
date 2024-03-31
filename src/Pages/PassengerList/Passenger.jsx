import React from 'react'
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Passenger = () => {
  return (
    <div>
         <Dialog
                fullScreen
                // open={open}
                // onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative', bgcolor: "#FFF500", color: "black" }}>
                    <Toolbar>
                        {/* <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton> */}
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h4" component="div">
                            Details
                        </Typography>
                        <Button autoFocus color="inherit" >
                            save
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

export default Passenger