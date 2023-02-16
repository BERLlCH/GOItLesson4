const books = require("../../models/books");

const updateById = async(req, res, next) => {
    const {id} = req.params;
    const {error} = addSchema.validate(req.body)
    if (error){
        throw RequestError(400, error.message)
    }
    const result = await books.updateById(id, req.body)
    if(!result){
        throw RequestError(404, "Not found")
    }
    res.status(201).json(result);
}

module.exports = updateById;