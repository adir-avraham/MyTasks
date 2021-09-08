const casesData = require('../data-mysql/data-providers/cases');


exports.getCases = async (req, res, next) => {
    try {
        const { getCases } = casesData;
        const cases = await getCases();
        res.json({cases: cases, status: true});
    } catch (error) {
        res.json({error: error.message, status: false});
    }
};

exports.addNewCase = async (req, res, next) => {
    try {
        const { addNewCase, getCases } = casesData;
        const newCase = await addNewCase(req.body); 
        const cases = await getCases();
        return res.json({updatedCases: cases, status: true});
    } catch (error) {
        res.json({error: error.message, status: false});
    }

}