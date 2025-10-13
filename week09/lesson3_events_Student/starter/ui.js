// Lesson 3 - Events Starter
import { addQuote, deleteQuote, updateQuote, getAllQuotes } from './quote.js'

// Select DOM elements
const quoteList = document.getElementById("quote-list")
const form = document.getElementById("quoteForm")
const contentInput = document.getElementById("content")
const authorInput = document.getElementById("author")
const idInput = document.getElementById("quoteId")
const randomBtn = document.getElementById("randomBtn")
const randomDisplay = document.getElementById("randomQuoteDisplay")

function createQuoteElement(quote) {
  return `
    <div data-id="${quote.id}">
      <p>${quote.content}</p>
      <p>${quote.author}</p>
      <button class="edit-btn" data-id="${quote.id}">Edit</button>
      <button class="delete-btn" data-id="${quote.id}">Delete</button>
    </div>
  `;
}

// Add, edit, delete quote functions

function addQuoteToDOM(quote) {
  quoteList.innerHTML += createQuoteElement(quote);
}
quoteList.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-btn')) {
    const id = Number(e.target.getAttribute('data-id'));
    deleteQuote(id);
    renderQuotes();
  }
  if (e.target.classList.contains('edit-btn')) {
    const id = Number(e.target.getAttribute('data-id'));
    const allQuotes = getAllQuotes();
    const quote = allQuotes.find(q => q.id === id);
    if (quote) {
      idInput.value = quote.id;
      contentInput.value = quote.content;
      authorInput.value = quote.author;
    }
  }
});
function renderQuotes() {
  quoteList.innerHTML = "";
  const allQuotes = getAllQuotes();
  allQuotes.forEach(quote => {
    addQuoteToDOM(quote);
  });
}
function showRandomQuote() {
  randomBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const allQuotes = getAllQuotes();
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    const quote = allQuotes[randomIndex];

    if (allQuotes.length > 0) {
      randomDisplay.innerHTML = `
      <div class="randomQuoteDisplay" data-id="${quote.id}">
        <p>"${quote.content}" —
        ${quote.author}</p>
      </div>
    `;
    } else {
      randomDisplay.innerHTML = `
      <div class="randomQuoteDisplay">
        <p>-- No quotes to show --</p>
      </div>
    `;
    }
  })
}
// Event listeners for form submission, edit, and delete clicks

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const id = Number(idInput.value);
  if (id) {
    updateQuote(id, contentInput.value, authorInput.value);
  } else {
    addQuote(contentInput.value, authorInput.value);
  }
  form.reset();
  idInput.value = "";
  renderQuotes();
});
showRandomQuote();
