const tasksData = require('../data-mysql/data-access/tasks');



exports.getTasks = async (req, res, next) => {
    try {
        const { getTasks } = tasksData;
        const tasks = await getTasks();
        res.json({tasks: tasks, status: true});
    } catch (error) {
        res.json({error: error.message, status: false});
    }
};
