const { addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdhandler } = require("./handler");

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

    //GET
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
        handler: deleteBookByIdhandler,
    },
   ];
    
module.exports = routes;