const casesData = require('../data-mysql/data-access/cases');



exports.getCases = async (req, res, next) => {
    try {
        const { getCases } = casesData;
        const cases = await getCases();
        res.json({cases: cases, status: true});
    } catch (error) {
        res.json({error: error.message, status: false});
    }
};
