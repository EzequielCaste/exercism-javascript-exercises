//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
/**If, however, 
 * 
you buy 2 different books, you get a 5% discount on those two books.

If you buy 3 different books, you get a 10% discount.

If you buy 4 different books, you get a 20% discount.

If you buy all 5, you get a 25% discount.

Note that if you buy four books, of which 3 are different titles, you get a 10% discount on the 3 that form part of a set, but the fourth book still costs $8. */

export const cost = (books) => {

  const discount5 = amount => amount - (amount * 0.05)
  const discount10 = amount => amount - (amount * 0.1)
  const discount20 = amount => amount - (amount * 0.2)
  const discount25 = amount => amount - (amount * 0.25)

  const store = { book_1: 0, book_2: 0, book_3: 0, book_: 0, book_5: 0 }

  books.forEach(book => {
    store[`book_${book}`] = store[`book_${book}`] + 1
  })


  /* 
   Object.keys(store).forEach(key => {
      console.log(`${key}: ${store[key]}`)
   }) */

  const howManyBooks = Object.values(store).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )
  
  if (howManyBooks < 2) return 800 * books.length

    //check if books are the same
    


  //console.log(Object.values(books))

};
