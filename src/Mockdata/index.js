import { appointmentSlots, lawyersTypes } from "../constants";

export const lawyersFirm = [
    {
        id: 1,
        name: "Firm 1",
        address: "123 Main St",
        city: "New York",
        state: "NY",
        lawyers: [1, 2]

    },
    {
        id: 2,
        name: "Firm 2",
        address: "123 Main St",
        city: "New York",
        state: "NY",
        lawyers: [
            3, 4
        ]
    }
]


export const bookedAppointmentsAccordingtoLayyer = {
    1: [{
        slot: appointmentSlots[0],
        date: "2021-05-01",
        clientName: "Client 1",
    }, {
        slot: appointmentSlots[1],
        date: "2021-05-01",
        clientName: "Client 2",
    }],
    2: [{
        slot: appointmentSlots[2],
        date: "2021-05-01",
        clientName: "Client 3",
    }, {
        slot: appointmentSlots[3],
        date: "2021-05-01",
        clientName: "Client 4",

    }],
    3: [{
        slot: appointmentSlots[4],
        date: "2021-05-01",
        clientName: "Client 5",
    }, {
        slot: appointmentSlots[0],
        date: "2021-05-01",
        clientName: "Client 6",
    }],
    4: [{
        slot: appointmentSlots[1],
        date: "2021-05-01",
        clientName: "Client 7",
    }, {
        slot: appointmentSlots[2],
        date: "2021-05-01",
        clientName: "Client 8",
    }]

}


export const Lawyers = {
    1: {
        lawyersid: 1,
        name: "Lawyer 1",
        speciality: lawyersTypes?.divorce,
        costPerAppointment: 200,
        availableSlots: [appointmentSlots[0], appointmentSlots[1],appointmentSlots[2], appointmentSlots[3], appointmentSlots[4]]
    },
    2: {
        lawyersid: 2,
        name: "Lawyer 2",
        speciality: lawyersTypes?.criminal,
        costPerAppointment: 200,
        availableSlots: [appointmentSlots[2], appointmentSlots[3], appointmentSlots[4]]
    },
    3: {
        lawyersid: 3,
        name: "Lawyer 3",
        speciality: lawyersTypes?.propertyDispute,
        costPerAppointment: 200,
        availableSlots: [appointmentSlots[4], appointmentSlots[0], appointmentSlots[1]]
    },
    4: {
        lawyersid: 4,
        name: "Lawyer 4",
        speciality: lawyersTypes?.divorce,
        costPerAppointment: 200,
        availableSlots: [appointmentSlots[0], appointmentSlots[1], appointmentSlots[2], appointmentSlots[3]]
    }
}