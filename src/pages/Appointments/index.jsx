import React, { useEffect } from 'react'
import Block from '../../component/Block'
import Text from '../../component/Text'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Lawyers, bookedAppointmentsAccordingtoLayyer } from '../../Mockdata'
import Inline from '../../component/Inline'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

const Appointments = () => {
    const { lawyersid } = useParams();
    const { appointment } = useSelector(state => state)


    return (
        <Block>
            <Text className="text-2xl font-bold">
                Appointments
            </Text>
            <Block className="mt-4 p-4  rounded-xl flex flex-col gap-y-4 w-1/4">
                <Text className="text-lg flex justify-between ">
                    Lawyer Name: <Inline className="font-semibold">{Lawyers[Number(lawyersid)]?.name}</Inline>
                </Text>
                <Text className="text-lg flex justify-between ">
                    Speciality: <Inline className="font-semibold">{Lawyers[Number(lawyersid)]?.speciality}</Inline>
                </Text>
                <Text className="text-lg flex justify-between">
                    Cost Per Appointment:  <Inline className="font-semibold"> $ {Lawyers[Number(lawyersid)]?.costPerAppointment} </Inline>
                </Text>
            </Block>
            <Block className="mt-4 p-4 border rounded-xl flex flex-col gap-y-4 w-full">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Time</TableCell>
                            <TableCell>Client Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            appointment[Number(lawyersid)]?.map((item, index) => {
                                return <TableRow key={index}>
                                    <TableCell>{item.date}</TableCell>
                                    <TableCell>{item.slot}</TableCell>
                                    <TableCell>{item.clientName}</TableCell>
                                </TableRow>
                            })
                        }
                    </TableBody>
                </Table>
            </Block>

        </Block >
    )
}

export default Appointments