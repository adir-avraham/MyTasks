import { Case } from '../sharing-interfaces';
import axios from 'axios';

const baseUrl = 'http://localhost:4000'

export const getCasesService = async () => {

    try {
        const { data } = await axios.get(`${baseUrl}/cases/getCases`);
        const { cases } = data;
        return cases;
    } catch (ex) {
        return []
    };
};
