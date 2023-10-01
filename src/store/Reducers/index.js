import { combineReducers } from "redux";
import { GET_APPOINTMENT, SET_CREATE_APPOINTMENT } from "./appointmentsReducer";

const commonReducer = combineReducers({
    appointment: SET_CREATE_APPOINTMENT,
    get_appointment: GET_APPOINTMENT
})

export default commonReducer;