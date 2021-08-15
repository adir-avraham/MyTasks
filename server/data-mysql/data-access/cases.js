const pool = require('../../db/pool');
const casesQueries = require('../data-providers/casesQueries');

async function getCases() {
    const { getCasesQuery } = casesQueries;
    const [result] = await pool.execute(getCasesQuery());
    return result;
}


module.exports = { getCases };