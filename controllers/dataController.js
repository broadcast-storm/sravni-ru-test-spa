const ApiError = require('../error/ApiError');
const data = require('../data')

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class DataController {

    async getAll(req, res) {
        let {term, dataPart, limit, purpose, sortByAmount} = req.query
        dataPart = dataPart || 0
        term = term || 0
        limit = limit || 10
        purpose = purpose || ''
        sortByAmount = sortByAmount || false
        const result = data
                            .filter(val => val.alias === purpose || purpose === '')
                            .filter(val => val.rate.periods[0].term.to >= term * 12 )
                            .sort((a, b) => {
                                if(sortByAmount) {
                                    if (a.rate.creditAmount.from > b.rate.creditAmount.from) {
                                        return -1;
                                    }
                                    if (a.rate.creditAmount.from < b.rate.creditAmount.from) {
                                        return 1;
                                    }
                                    return 0;
                                } else {
                                    if (a.rate.periods[0].rate.from < b.rate.periods[0].rate.from) {
                                        return -1;
                                    }
                                    if (a.rate.periods[0].rate.from > b.rate.periods[0].rate.from) {
                                        return 1;
                                    }
                                    return 0;

                                }
                            })
        await delay(300)
        return res.json({items: result.slice(dataPart* limit, dataPart* limit + limit), total: result.length})
    }

    async getOne(req, res) {
        const {id} = req.params
        const result = data.find(item => item.id == id)
        await delay(300)
        return res.json(result || null)
    }
}

module.exports = new DataController()
