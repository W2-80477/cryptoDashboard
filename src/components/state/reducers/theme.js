import { CHANGETHEME } from "../../constants/actionTypes";

const STATE = false;

export const themereducer = (state = STATE, action) => {
    switch (action.type) {
        case CHANGETHEME:
        {
            return state = !state;
        }
        default: 
        {
            return state;
        }
    }
}