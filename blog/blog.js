const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]

const bookList = document.getElementById('book-list');
//this will create a section for each book in the array and append book from the list
articles.forEach(book => {
    const bookSection = document.createElement('section');
    bookSection.classList.add('book');
    bookSection.innerHTML = `
        <div class="book-center">
            <h2 class="book-title">${book.title}</h2>
            <img src="${book.imgSrc}" alt="${book.imgAlt}" class="book-cover">
            <p class="book-description">${book.description}</p>            
        </div>
        <div class="book-left">
            <p class="book-date">${book.date}</p>
            <p class="book-age">Ages: ${book.ages}</p>
            <p class="book-genre">Genre: ${book.genre}</p>
            <p class="book-stars">${book.stars}</p>
        </div>
        <div class="book-right">
            <aside class="book-aside">
        </div>
    `;
    bookList.appendChild(bookSection);
});





