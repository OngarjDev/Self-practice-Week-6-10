const quotes = [];
let nextId = 1;

function addQuote(content, author) {
  const newQuote = { id: nextId++, content, author };
  quotes.push(newQuote);
  return newQuote;
}

function updateQuote(id, content, author) {
  const quote = quotes.find(q => q.id === id);
  if (quote) { quote.content = content; quote.author = author; }
  return quote;
}

function deleteQuote(id) {
  const index = quotes.findIndex(q => q.id === id);
  if (index !== -1) quotes.splice(index, 1);
  return index;
}

function getAllQuotes() {
  return [...quotes];
}

export { addQuote, updateQuote, deleteQuote, getAllQuotes };
