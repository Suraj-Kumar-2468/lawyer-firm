import { bookedAppointmentsAccordingtoLayyer } from "../../../Mockdata";

const SET_CREATE_APPOINTMENT = (
    state = bookedAppointmentsAccordingtoLayyer,
    action
) => {
    const { type, payload } = action;
    console.log(payload)
    switch (type) {
        case "CREATE_APPOINTMENT":
            const { lawyerId, appointment } = payload;
            const lawyerAppointments = state[lawyerId];
            lawyerAppointments.push(appointment);
            return { ...state, [lawyerId]: lawyerAppointments };
        default:
            return state;
    }
};

const GET_APPOINTMENT = (state = bookedAppointmentsAccordingtoLayyer, action) => {
    const { type, payload } = action;
    switch (type) {
        case "GET_APPOINTMENT":
            const { lawyerId } = payload;
            const lawyerAppointments = state[lawyerId];
            return lawyerAppointments;
        default:
            return state;
    }
}




export {
    SET_CREATE_APPOINTMENT,
    GET_APPOINTMENT
}