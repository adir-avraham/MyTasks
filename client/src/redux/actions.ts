import { Actions } from './actions.config';
import { getCasesService } from './service';
import { Case } from '../sharing-interfaces';



export const getCasesSuccessAction = (cases: Array<Case>) => {  
    return {
        type: Actions.GET_CASES_SUCCESS,
        payload: { cases }
    };
};

export const getCasesAction = () => {
    return async (dispach: Function) => {  
        const cases = await getCasesService();
        dispach(getCasesSuccessAction(cases));
    };
};