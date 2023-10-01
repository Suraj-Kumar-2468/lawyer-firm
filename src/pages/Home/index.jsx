import React, { useState } from 'react'
import Block from '../../component/Block'
import Text from '../../component/Text';
import { Accordion, AccordionDetails, AccordionSummary, Table, TableBody, TableHead, TableCell, TableRow, InputLabel, FormControl, MenuItem, Select, Drawer } from '@mui/material';
import { Lawyers, lawyersFirm } from '../../Mockdata';
import { Book, ExpandMore } from "@mui/icons-material";
import { lawyersTypes } from '../../constants';
import { useNavigate } from 'react-router-dom';
import BookAppointmentForm from './bookappointmentForm';

const Home = () => {
    const [expanded, setExpanded] = useState('panel1');
    const [isDrawerOpen, setIsDrawerOpen] = useState("");
    const navigate = useNavigate()
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleOpenBookAppointment = (lawyersid) => {
        setIsDrawerOpen(lawyersid)
    }

    return (
        <Block>
            <Drawer
                classes={{
                    paper: "!rounded-l-xl"
                }}
                anchor={"right"}
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen("")}>
                <Block className="p-8 w-[30rem]">
                    <Text className="text-2xl font-semibold">
                        Book Appointment
                    </Text>
                    <Block className="mt-4">
                        <BookAppointmentForm 
                            setIsDrawerOpen={setIsDrawerOpen}
                            isDrawerOpen={isDrawerOpen}
                        />
                    </Block>
                </Block>
            </Drawer>
            <Text className="text-2xl font-semibold">
                Firms Data
            </Text>
            <Block className="mt-4">
                {
                    lawyersFirm.map((firm, index) => {
                        return <React.Fragment key={firm.id}>
                            <Accordion expanded={expanded === firm.id} onChange={handleChange(firm.id)}>
                                <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1d-content" id="panel1d-header">
                                    <Block className="flex  space-x-4 justify-between items-center">
                                        <Text className="text-lg font-semibold">
                                            {firm.name}
                                        </Text>
                                        <Text className="text-lg ml-auto font-semibold">
                                            ({firm.lawyers.length})
                                        </Text>
                                    </Block>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                {Object.keys(Lawyers[1]).filter(items => items !== "availableSlots").map((key) => {
                                                    return <TableCell key={key}><Text
                                                        className="text-lg font-semibold"
                                                    >{key}</Text></TableCell>
                                                })}
                                                <TableCell align="left"><Text className="text-lg font-semibold">Actions</Text></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {firm.lawyers.map((lawyer) => (
                                                <TableRow
                                                    key={Lawyers[lawyer].lawyersid}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {Lawyers[lawyer].lawyersid}
                                                    </TableCell>
                                                    <TableCell align="left">{Lawyers[lawyer].name}</TableCell>
                                                    <TableCell align="left">{Lawyers[lawyer].speciality}</TableCell>
                                                    <TableCell align="left">$ {Lawyers[lawyer].costPerAppointment}</TableCell>
                                                    <TableCell align="left">
                                                        <FormControl fullWidth>

                                                            <Select
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                label=""
                                                                className='!h-10'
                                                                placeholder='Select Action'
                                                            >
                                                                <MenuItem onClick={() => navigate(`/appointments/${Lawyers[lawyer]?.lawyersid}`)}>show book appointments</MenuItem>
                                                                <MenuItem onClick={() => handleOpenBookAppointment(Lawyers[lawyer]?.lawyersid)}>Book Appointment</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>

                                </AccordionDetails>
                            </Accordion>

                        </React.Fragment>
                    })
                }
                {/* <Accordion expanded={expanded === firmid} onChange={handleChange('panel1')}>

                </Accordion> */}
            </Block>
        </Block>
    )
}




export default Home