import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import * as fetchService from '../../services/fetchService';


export default function FormMui(props) {
    //Creating useStates for functionalities
    const [open, setOpen] = React.useState(false);
    const [dateValue, setDateValue] = React.useState(new Date('2021-12-09T00:00:00.000+00:00'));

    //Creating click to open dialoge form function
    const handleClickOpen = () => {
        setOpen(true);
    };

    //Creating click to close dialoge form functio
    const handleClose = () => {
        setOpen(false);
    };

    //Creating handlers for the form inputs.
    const inputTitleHandler = (e) => {
        props.setTitle(e.target.value);
    }
    const categoryHandler = (e) => {
        props.setCategory(e.target.value);
    }
    const dateHandler = (e) => {
        setDateValue(e);
        props.setTransactionDate(e);
    }
    const amountHandler = (e) => {
        console.log(e.target.value);
        props.setAmount(e.target.value);
    }

    //Creating submit handler for posting expense on backend server.
    const submitTodoHandler = async (e) => {
        e.preventDefault(); // preventing the default submit action
        //Preventing form submission if the fields are blank.
        props.setUpdateExpenses(true);
        if (props.title === '') {
            alert('Expense Name cannot be empty');
            return;
        }
        if (props.amount === '') {
            alert('Amount cannot be empty');
            return;
        }
        if (props.transactionDate === '') {
            alert('Transaction Date cannot be empty');
            return;
        }
        //Creating request for post submission.
        const request = {
            title: props.title,
            amount: props.amount,
            category: props.category,
            transactionDate: props.transactionDate,
            user_id: JSON.parse(localStorage.getItem("userInfo")).user._id
        }
        // Implementing post method having request.
        try {
            console.log(request);
            
            const response = await fetchService.postData(request);
            //Creating a catch error
        } catch (error) {
            console.log(error.message);
        }
        //Resetting the useStates to default.
        props.setTitle('');
        props.setAmount('');
        props.setCategory('');
        props.setTransactionDate('');
        setOpen(false);

    }
    

    return (
        <div>
            <Box
            display="flex" 
            alignItems="center"
            justifyContent="center"
            >
            <Button variant="contained" size="large" aria-label="large button group" onClick={handleClickOpen}>
                Add Expense
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle align="center" >Add Expense</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        label="Expense Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputTitleHandler}
                    />
                    <FormHelperText>Required</FormHelperText>
                </DialogContent>
                <DialogContent>
                    <Box sx={{ minWidth: 500 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Category"
                        onChange={categoryHandler}
                            >
                                <MenuItem value="Miscellaneous">Miscellaneous</MenuItem>
                                <MenuItem value="Entertainment">Entertainment</MenuItem>
                                <MenuItem value="Food and Drink">Food and Drink</MenuItem>
                                <MenuItem value="Transportation">Transportation</MenuItem>
                                <MenuItem value="Utilities">Utilities</MenuItem>
                                <MenuItem value="Home">Home</MenuItem>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Amount"
                        type="number"
                        required
                        fullWidth
                        variant="standard"
                        onChange={amountHandler}
                    />
                    <FormHelperText>Required</FormHelperText>
                </DialogContent>
                <DialogContent >
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Box marginLeft={17} marginTop={2}>
                        <DatePicker
                            label="Transaction Date"
                            value={dateValue}
                            onChange={dateHandler}
                            inputFormat="MM/dd/yyyy"
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <FormHelperText >Required</FormHelperText>
                    </Box>
                    </LocalizationProvider>
                    
                </DialogContent>
                <Box marginRight={23}>
                <DialogActions >
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={submitTodoHandler}>Add</Button>
                </DialogActions>
                </Box>
            </Dialog>
            </Box>
        </div>
    );
}
