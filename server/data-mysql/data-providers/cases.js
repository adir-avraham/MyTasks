const pool = require('../../db/pool');
const casesQueries = require('../data-access/casesQueries');

async function getCases() {
    const { getCasesQuery } = casesQueries;
    const [result] = await pool.execute(getCasesQuery());
    return result;
}

async function addNewCase(payload) {
    const { addNewCaseQuery } = casesQueries;
    const { case_name, tasks, next_sitting } = payload;
    const [result] = await pool.execute(addNewCaseQuery(), [case_name, tasks, next_sitting]);
    return result;
}

module.exports = { getCases, addNewCase };