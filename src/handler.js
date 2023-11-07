const {nanoid} = require('nanoid');
const books = require('./books');


//menambahkan book
const addBookHandler = (request, h) => {

    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const finished = pageCount === readPage;

    if (!name) {
        const response = h.response({
          status: 'fail',
          message: 'Gagal menambahkan buku. Mohon isi nama buku',
        });
        response.code(400);
        return response;
      }
    
    if (readPage > pageCount) {
        const response = h.response({
          status: 'fail',
          message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        });
        response.code(400);
        return response;
      }

    
    const newBook = {
        name, 
        year, 
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished,
        reading,
        id, 
        insertedAt, 
        updatedAt,
      };
     
      books.push(newBook);

   const isSuccess = books.filter((book) => book.id === id).length > 0;

   if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  }
 
  const response = h.response({
    status: 'fail',
    message: 'Gagal menambahkan buku. Mohon isi nama buku',
  });
  response.code(400);
  return response;

};


//GET book data
const getAllBooksHandler = () => ({
    status: 'success',
    data: {
        books,
    },
});

const getBookByIdHandler = (request, h) => {
    const {id} = request.params;

    const book = books.filter((n) => n.id == id)[0];

    if (book != undefined) {
        return {
            status: 'success',
            data: {
                book,
            },
        };
    }

    const response = h.response({
        status: 'fail',
        message: 'Catatan tidak ditemukan',
    });
    response.code(404);
    return response;
};

// Edit Book
const editBookByIdHandler = (request, h) => {
    const {id} = request.params;

    const {title, tags, body} = request.payload;
    const updatedAt = new Date().toISOString();

    //dapatkan dulu index array pada objek catatan sesuai id yang ditentukan
    const index = books.findIndex((book) => book.id == id);
    if (index != -1) {
        books[index] = {
            ...books[index],
            title,
            tags,
            body,
            updatedAt,
        };

        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil diperbarui',
        });
        response.code(200);
        return response;
        
    }

    const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui catatan. ID tidak ditemukan',
    });
    response.code(404);
    return response;
};

const deleteBookByIdhandler = (request, h) => {
    const {id} = request.params;
    // dapatkan index dari objek catatan sesuai dengan id yang didapat
    const index = books.findIndex((book)=> book.id == id);

    if (index != -1) {
        books.splice(index,1);
        const response = h.response ({
            status: 'success',
            messsage: 'Catatan berhasil dihapus',
        });
        response.code(200);
        return response;
    }
};

module.exports = {addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdhandler};