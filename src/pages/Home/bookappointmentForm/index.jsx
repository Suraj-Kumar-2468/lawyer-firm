import { MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Text from '../../../component/Text'
import Block from '../../../component/Block'
import { Lawyers } from '../../../Mockdata'
import { useDispatch, useSelector } from 'react-redux'
import { createAppointment } from '../../../store/Action'
import { ToastContainer, toast } from 'react-toastify'

const BookAppointmentForm = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const [name, setName] = useState("")
  const [slot, setSlot] = useState("")
  const [date, setDate] = useState("")
  const [appointmentsList, setAppointmentsList] = useState([])
  useEffect(() => {
    setAppointmentsList(Lawyers[Number(isDrawerOpen)]?.availableSlots?.filter(items => {
      return !appointment[Number(isDrawerOpen)]?.some(item => {
        return item.slot === items
      })
    }))
  }, [isDrawerOpen])
  const dispatch = useDispatch()
  const { appointment } = useSelector(state => state)
  return (
    <>
      {appointmentsList?.length > 0 ?
        <>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(createAppointment({
                appointment: {
                  clientName: name,
                  slot,
                  date,
                },
                lawyerId: isDrawerOpen
              }))
              toast('Appointment booked successfully');
              setIsDrawerOpen("")
            }}
          >
            <Block className="flex flex-col ">
              <Text>
                Name
              </Text>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="w-full !mt-2"
                onChange={(e) => setName(e.target.value)}
              />
            </Block>
            <Block className="flex  flex-col mt-4">
              <Text>
                Date
              </Text>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type='date'
                className="w-full !mt-2"
                onChange={(e) => setDate(e.target.value)}
              />
            </Block>
            <Block className="flex flex-col mt-4">
              <Text>
                Slot
              </Text>
              <Select
                className="w-full !mt-2"
                onChange={(e) => setSlot(e.target.value)}
              >
                {
                  appointmentsList.map((item, index) => {
                    return <MenuItem key={index} value={item}>{item}</MenuItem>
                  })
                }
              </Select>
            </Block>
            <Block className="flex justify-end mt-4">
              <button className="bg-[#1B6EFD] text-white px-4 py-2 rounded-md">
                Book Appointment
              </button>
            </Block>
          </form>
        </> : <Text className="text-center text-slate-400 text-2xl font-semibold">
          No Slots Available
        </Text>}
    </>
  )
}

export default BookAppointmentForm