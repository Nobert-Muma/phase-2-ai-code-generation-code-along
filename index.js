// Your code here

/** A book object representation.
 * @typedef {Object} book
 * @property {string} title - The title of the book.
 * @property {string} author - The author of the book.
 * @property {string} genre - The genre of the book.
 */

/**returns a list of books with the given genre.
 * @param {string} genre - The genre of books required.
 * @param {Book[]} books - An array of Book objects.
 * @returns {Book[]} An array of Book objects matching the specified genre. 
 */
function filterByGenre(genre, books){
    // Check if genre is a string
    if (typeof genre !== 'string') return [];

    // Filter books to return only those with the specified genre
    return books.filter(book => book.genre === genre);
}