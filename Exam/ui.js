import { addQuote, updateQuote, deleteQuote, getAllQuotes } from './Quote.js';
const elements = {
    display: document.querySelector('section#quote-list'),
    author: document.querySelector('input[id="author"]'),
    content: document.querySelector('input[id="content"]'),
    hidden: document.querySelector('input[id="quoteId"]'),
    form: document.querySelector('form#quoteForm')
}

elements.form.addEventListener("submit", (e) => {
    e.preventDefault()
    let idquote = +elements.hidden.value
    !idquote ? addQuote(elements.content.value, elements.author.value) : updateQuote(idquote, elements.content.value, elements.author.value);
    elements.form.reset();
    elements.hidden.value = "";
    renderDom()
})

elements.display.addEventListener("click", (e) => {
    e.preventDefault()
    let btn = e.target.closest('a[data-action]')
    let action = btn.dataset.action
    let id = +btn.dataset.quote
    if (!btn) { return }
    if (action === "delete") {
        deleteQuote(+id)
        renderDom()
    } else if (action === "update") {
        const quote = getAllQuotes().find(q => q.id === id);
        if (!quote) { return }
        elements.hidden.value = id
        elements.author.value = quote.author
        elements.content.value = quote.content
    }
})

function renderDom() {
    let ul = document.createElement('ul');
    let item = getAllQuotes();
    item.forEach(data => {
        const li = document.createElement('li');
        li.innerHTML = `
            id: ${data.id};content: ${data.content};author: ${data.author}
            <a href="#" data-action="update" data-quote="${data.id}">update</a>
            <a href="#" data-action="delete" data-quote="${data.id}">delete</a>
        `
        ul.appendChild(li)
    })
    elements.display.innerHTML = "";
    elements.display.appendChild(ul);
}