const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
]
const getTheTitles = function(books) {
    return books.filter(book => book.title).map(book => book.title);
};

getTheTitles(books);
// Do not edit below this line
module.exports = getTheTitles;
