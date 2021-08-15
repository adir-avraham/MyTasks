function getCasesQuery() {
    return `SELECT cases.id, cases.case, cases.tasks, cases.case, DATE_FORMAT(cases.meeting, "%d-%m-%Y") AS meeting, cases.status  FROM mytasks.cases`;
    // return `SELECT tasks.id, tasks.task, tasks.type, DATE_FORMAT(tasks.date, "%d-%m-%Y") AS date, cases.case, DATE_FORMAT(cases.meeting, "%d-%m-%Y") AS meeting 
    // FROM mytasks.tasks
    // INNER JOIN mytasks.cases ON tasks.case_id=cases.id;`
};


module.exports = { getCasesQuery };