class Library {
	constructor(){
		this.contents = {}
	}

	addBook(book) {
		this.contents[book.id] = book
	}

	removeBook(book) {
		delete this.contents[book.id]
	}
}

export function _library(){
	return new Library()
}