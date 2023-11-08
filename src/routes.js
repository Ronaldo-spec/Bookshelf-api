const {
  addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, hapusBookByIdhandler,
} = require('./handler');

const routes = [

  // ADD
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },

  // GET ALL
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },

  // GET
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },

  // EDIT
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },

  // DELETE
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: hapusBookByIdhandler,
  },
];

module.exports = routes;
