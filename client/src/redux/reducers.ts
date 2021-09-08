import { Actions } from './actions.config';
import { Action } from '../sharing-interfaces';


const initialState = {

    cases: [],

}


export default function root(state = initialState, action: Action) {
    switch (action.type) {

        case Actions.GET_CASES_SUCCESS: {
            const { cases } = action.payload;
            return { ...state, cases };
        }

        default: {
            return state;
        }
    };
};