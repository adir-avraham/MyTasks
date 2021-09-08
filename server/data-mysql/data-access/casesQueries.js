function getCasesQuery() {
    return `SELECT cases.id, cases.case_name, cases.tasks, DATE_FORMAT(cases.next_sitting, "%d-%m-%Y") AS next_sitting, cases.status FROM mytasks.cases`;
    // return `SELECT tasks.id, tasks.task, tasks.type, DATE_FORMAT(tasks.date, "%d-%m-%Y") AS date, cases.case, DATE_FORMAT(cases.meeting, "%d-%m-%Y") AS meeting 
    // FROM mytasks.tasks
    // INNER JOIN mytasks.cases ON tasks.case_id=cases.id;`
};

function addNewCaseQuery() {
    return "INSERT INTO `mytasks`.`cases` (`case_name`, `tasks`, `next_sitting`) VALUES (?,?,?)";
}
 
module.exports = { getCasesQuery, addNewCaseQuery };