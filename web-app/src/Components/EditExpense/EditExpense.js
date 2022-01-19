import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import * as fetchService from '../../services/fetchService';

export default function EditExpense(props) {
    const [open, setOpen] = React.useState(false);

    //Creating UseStates for updating expenses
    const [editTitle, setEditTitle] = React.useState(props.props.expense.title);
    const [editAmount, setEditAmount] = React.useState(props.props.expense.amount);
    const [editDate, setEditDate] = React.useState(props.props.expense.transactionDate);
    const [editCategory, setEditCategory] = React.useState(props.props.expense.category);

    //Creating edit(update) expense functionality with backend.
    const editHandler = async (e) => {
        e.preventDefault();
        const request = {
            id: props.props.expense._id,
            title: editTitle,
            amount: editAmount,
            category: editCategory,
            transactionDate: editDate,
            user_id: props.props.expense.user_id
        };
        await fetchService.putData(request); // awaiting for PUT request to edit expense of particular user.
        setOpen(false); // To close the dialoge form.
    }

    const handleClickOpen = () => {
        setOpen(true); // To open the dialoge form.
    };

    const handleClose = () => {
        setOpen(false);//To close the dialoge form.
    };

    //Creating handlers for the form edits.
    const inputTitleHandler = (e) => {
        setEditTitle(e.target.value);
    }
    const categoryHandler = (e) => {
        setEditCategory(e.target.value);
    }
    const amountHandler = (e) => {
        setEditAmount(e.target.value);
    }
    const dateHandler = (e) => {
        setEditDate(e);
    }

    return (
        <div> {/**Using Material UI Library to construct the page */}
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Button variant="contained" size="large" aria-label="large button group" onClick={handleClickOpen}>
                    Edit
                </Button>
                <Dialog open={open} onClose={handleClose}> {/**Assigning function on Close */}
                    <DialogTitle align="center" >Edit Expense</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Expense Title"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={props.props.expense.title}
                            onChange={inputTitleHandler}
                        />{/**Assigning function to change input useState */}
                    </DialogContent>
                    <DialogContent>
                        <Box sx={{ minWidth: 500 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Category"
                                    defaultValue={props.props.expense.category}
                                    onChange={categoryHandler}>
                                    <MenuItem value="Miscellaneous">Miscellaneous</MenuItem>
                                    <MenuItem value="Entertainment">Entertainment</MenuItem>
                                    <MenuItem value="Food and Drink">Food and Drink</MenuItem>
                                    <MenuItem value="Transportation">Transportation</MenuItem>
                                    <MenuItem value="Utilities">Utilities</MenuItem>
                                    <MenuItem value="Home">Home</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </DialogContent>
                    <DialogContent>
                        <TextField
                            inputProps={{ inputMode: 'numeric' }}
                            autoFocus
                            margin="dense"
                            label="Amount "
                            type="number"
                            fullWidth
                            variant="standard"
                            defaultValue={props.props.expense.amount}
                            onChange={amountHandler}
                        />
                    </DialogContent>
                    <DialogContent >
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Box marginLeft={17} marginTop={2}>
                                <DatePicker
                                    label="Transaction Date"
                                    value={editDate}
                                    onChange={dateHandler}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Box>
                        </LocalizationProvider>
                    </DialogContent>
                    <Box marginRight={22}>
                        <DialogActions >
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={editHandler}>Submit</Button>
                        </DialogActions>
                    </Box>
                </Dialog>
            </Box>
        </div>
    );
}
