import React, { useState } from 'react';
import './ExpenseComponent.scss';
import * as fetchService from '../../services/fetchService';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import EditExpense from "../EditExpense/EditExpense";
import ButtonGroup from '@mui/material/ButtonGroup';
import { Grid } from '@mui/material';


function ExpenseComponent(props) {

    //Creating delete functionality with backend
    const deleteHandler = async (event) => {
        console.log(props.expense);

        // props.setExpenses(props.expenses.filter((el) => el.id !== props.expense.id));
        await fetchService.deleteData(props.expense);
        event.preventDefault();
    }

    return (
        <div className="expense">
            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Grid container>
                        <Grid item xs={8}>
                        <Typography align='left' sx={{ fontSize:25 }}  >
                        {props.title}
                        </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography align='right' sx={{fontSize:25 }}>${props.amount}</Typography>
                        </Grid>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography >
                            Expense Category: {props.category}
                        </Typography >

                        <Typography component={'span'} align='center'>
                            <ExpenseDate calendar={props.transactionDate} />
                        </Typography>
                        <Box marginLeft={60}>
                            {/* <Button variant="contained" size="medium" aria-label="medium button group">
                                Edit
                            </Button> */}
                            <ButtonGroup disableElevation variant="contained">
                                <EditExpense props={props} />
                                <span style={{color:"white"}}>|</span>
                                <Button onClick={deleteHandler} variant="contained" size="medium" aria-label="medium button group">
                                    Delete
                                </Button>
                            </ButtonGroup>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default ExpenseComponent;