class Book {
	constructor(obj){
		this.author = obj.author,
		this.title = obj.title,
		this.pages = obj.pages,
		this.completed = obj.completed
		this.id = obj.id
	}
}

export function _book(obj){
	return new Book(obj)
}