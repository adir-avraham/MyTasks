function getTasksQuery() {
    return "SELECT * FROM mytasks.tasks;";
};


module.exports = { getTasksQuery };