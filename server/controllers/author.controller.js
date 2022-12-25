const  {Author } = require('../models/author.model');
// import { useParams, Link } from "react-router-dom";

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createAuthor = (request, response) => {
    Author.create(request.body)
        .then(author => response.json({author:author}))
        .catch(err => response.status(400).json(err))
}


module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(authors => response.json({authors: authors}))
        .catch(err => response.json({ message: 'could not find authors', error: err}));
}

module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.status(404).json(err));
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
        .then(updatedAuthor => response.json({updatedAuthor: updatedAuthor}))
        .catch(err => response.status(400).json(err))
}


module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json({deleteConfirmation:deleteConfirmation }))
        .catch(err => response.json({ message: 'could not delete author', error: err}))
}



