const pool = require('../../db/pool');
const tasksQueries = require('../data-providers/tasksQueries');

async function getTasks() {
    const { getTasksQuery } = tasksQueries;
    const [result] = await pool.execute(getTasksQuery());
    return result;
}


module.exports = { getTasks };