/*
 The books array contain the list of books in the shopping cart.
 DO NOT EDIT THIS ARRAY
*/
window.books = [
  {
    title: "PROLOG Programming for Artificial Intelligence",
    authors: ["Ivan Bratko"],
    description:
      "Prolog has its roots in logic; however the main aim of this book is to teach Prolog as a practical programming tool.",
    price: 89.29,
    rating: 4.5,
    quantity: 1,
  },
  {
    title: "Elements of the Theory of Computation",
    authors: ["Harry Lewis", "Christos H. Papadimitriou"],
    description:
      "Algorithms, complexity analysis, and algorithmic ideas are introduced informally in Chapter 1, and are pursued throughout the book.",
    price: 182.65,
    rating: 4.7,
    quantity: 2,
  },
  {
    title: "The Silmarillion",
    authors: ["J.R.R. Tolkien"],
    description:
      "THE SILMARILLION is the core of J.R.R. Tolkien's imaginative writing, a work whose origins stretch back to a time long before THE HOBBIT.",
    price: 14.85,
    rating: 5,
    quantity: 1,
  },
  {
    title: "An Introduction to the Analysis of Algorithms",
    authors: ["Sedgewick Robert", "Flajolet Philippe"],
    description: "Methods and models for mathematically analyzing algorithms.",
    price: 51.19,
    rating: 4.2,
    quantity: 10,
  },
  {
    title: "The Art of Computer Programming, Volumes 1-4",
    authors: ["Donald E. Knuth"],
    description:
      "The bible of all fundamental algorithms and the work that taught many of today’s software developers most of what they know about computer programming.",
    price: 189.98,
    rating: 5,
    quantity: 2,
  },
];



///////////////////////////////
// WRITE YOUR SOLUTION BELOW //
///////////////////////////////

/*
Create and return the HTML to render a single book.
The `book` parameter is an object representing a single book. 
*/
const cart = document.querySelector('#cartItems')
const cartTotal = document.querySelector('.total-price')
const btn = document.querySelector('#sortBtn')
function renderBook(book) {
  const bookEle = `
<div class="book">
  <div class="details">
    <div class="title">
    ${book.title}
      <span class="rating">(${book.rating} stars)</span>
    </div>
    <div class="authors">by ${book.authors.join(', ')}</div>
    <div class="description">
      ${book.description}
    </div>
    <button class="removeBtn">Remove from cart</button>
  </div>
  <div class="quantity">${book.quantity} @ $${book.price}</div>
  <div class="price">$${(book.price * book.quantity).toFixed()}</div>
</div>`
  return bookEle;
}

/*
  Calculate and return the total price of all items in the cart.
 */
function calculateTotal() {
  if(!window.books.length){
    return 0;
  }else {
    let count = 0;
    const total = window.books.map(item => {
      count += (item.quantity * item.price)
      return count;
    });
    const totalDue = total.length - 1;
    return total[totalDue];
  }
    
}

/*
  Render the array of books and the cart total and insert them on the DOM.
  The books should be rendered in the `section` with id "cartItems".
  The total should be rendered in the `section` with id "cartTotal".
*/
function render() {
  if(!window.books.length){
    cart.innerHTML = `Nothing in cart`;
    cartTotal.innerHTML = '$0';
  } else {
  window.books.map(item => cart.innerHTML += renderBook(item));
  cartTotal.innerHTML = `$${calculateTotal()}`;
  }
}

/*
  Sort the books array by price in ascending order then call render()
*/
function sortByPrice() { 
  const books = window.books;
  const sortPrice = (priceA, priceB) => {
  return priceA.price < priceB.price ? -1 : 1;
  };
  books.sort(sortPrice);
  render()
}

/*
Perform all startup tasks here. Use this function to attach the required event listeners
then call render()
*/
function main() {
btn.addEventListener('click', (event) => {
  cart.innerHTML = '';
 sortByPrice();
})
render();
}


window.addEventListener("DOMContentLoaded", main);






/////////////////////////////////
// DO NOT EDIT BELOW THIS LINE //
/////////////////////////////////
window.render = render;
window.calculateTotal = calculateTotal;
window.sortByPrice = sortByPrice;