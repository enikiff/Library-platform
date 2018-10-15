(function() {//SINGLETON
  var instance;
  //console.log(instance);
  Library = function() {
    if (instance) { //if a instance of library already exists this will point the newly made library to the Singleton instance
      //console.log('already made an instance');
      return instance;
    }
    //console.log('new instance made');
    this.bookShelf = [];
    instance = this; //if a instance of library does not yet exist this will get and set the instance name for the new library
  };
})();

function Library()
{
  this.bookShelf = new Array();
}

Library.prototype.addBook = function(book){
    for(var i=0; i < this.bookShelf.length; i++){
      /*compare book title*/
      if(this.bookShelf[i].title===book.title.toLowerCase().trim()){
        return false;
      }

    }
    this.bookShelf.push(book);
    return true;

};

Library.prototype.removeBookByAuthorName = function(author){

var x=false;
      for(var i=0; i < this.bookShelf.length; i++){
          if(this.bookShelf[i].author==author){
// The splice() method changes the contents of an array by removing existing elements
            this.bookShelf.splice(i, 1); //gLibrary.bookShelf.splice(i, 1);
            i--;
            x=true;

          }
      }
  return x;
};

Library.prototype.removeBookByTitle = function(title){
  for(var i=0; i < this.bookShelf.length; i++){
    if(this.bookShelf[i].title == title){
 // The splice() method changes the contents of an array by removing existing elements
          this.bookShelf.splice(i,1);
          return true;
          //break; never happend ,only before true statment;
    }
  }
  return false;
};

Library.prototype.getRandomBook = function(){
    if(this.bookShelf.length>0){
      /* create index*/
      var index =Math.floor(Math.random() * this.bookShelf.length);
        return this.bookShelf[index];
    }else{
      return null;
    }
};


Library.prototype.getBooksByTitle = function(title){
	var newArray = new Array();
	for(var i=0; i < this.bookShelf.length; i++){
    /*returns the first index at which a given element can be found in the array*/
		if(this.bookShelf[i].title.toLowerCase().indexOf(title) >= 0){
			newArray.push(this.bookShelf[i]);
		}
	}
	return newArray;
};

Library.prototype.getBooksByAuthor = function(authorName){
	var newArray = new Array();
	for(var i=0; i < this.bookShelf.length; i++){
    /*returns the first index at which a given element can be found in the array*/
		if(this.bookShelf[i].author.toLowerCase().indexOf(authorName) >= 0){
			newArray.push(this.bookShelf[i]);
		}
	}
	return newArray;
};

Library.prototype.addBooks = function(bookShelf) {
  //empty counter to add books to
	var booksAdded = 0;
	for (var i = 0; i < bookShelf.length; i++) {
  	if (this.addBook(bookShelf[i])){
			booksAdded ++;
		}
  }
  console.log("Books Added: " + booksAdded);
  return booksAdded;
};

Library.prototype.getAuthors = function() {

  var unique = {};//O(1) an object, each occurence being tracked is added as a key, final set of keys represents unique occurences
  var distinct = [];
  for(var i in this.bookShelf) {
    if(typeof(unique[this.bookShelf[i].author]) == "undefined") {//if author from the array isnt in unique
    distinct.push(this.bookShelf[i].author);//push it into distinct
    }
    unique[this.bookShelf[i].author] = 0;//first time sees unique author assigns number 0 as value to key of author name - value can be anything
   }
  return distinct;
};


Library.prototype.getRandomAuthorName = function(author){
    if(this.bookShelf.length>0){
      /*create index*/
      var index =Math.floor(Math.random() * this.bookShelf.length);
        return this.bookShelf[index].author;
    }else{
      return null;
    }
};

//// book localStorage
Library.prototype.borkStorage = function(){
  var r = confirm("Continue with localStorage borkening?");
  if (r){
    localStorage.clear("overStockShelf");
    alert("Successfully borked localStorage.");
  }
};

  Library.prototype.createLocalStorage = function(){
  localStorage.setItem('bookshelf', JSON.stringify(this.bookShelf));
  for (var i = 0, len = localStorage.length; i < len; ++i) {
    console.log("iterating through all local storage keys and values : " + localStorage.getItem(localStorage.key(i)));
  }
};

Library.prototype.getLocalStorage = function(){
  var bookShelf = [];
  var parsedBookShelf = JSON.parse(localStorage.setItem('bookshelf'));
  for (var i = 0; i < parsedBookShelf.length; ++i) {
    bookShelf.push(new Book(parsedBookShelf[i].title , parsedBookShelf[i].author , parsedBookShelf[i].numPages , parsedBookShelf[i].pubDate));
  }
  return bookShelf;
};


//egor

 document.addEventListener("DOMContentLoaded", function(e){
 window.gLibrary = new Library();


 book1 = new Book("IT", "SK", 200,"Jan 1th");
 book2 = new Book("Drama", "SK", 300,"Jan 15th");
 book3 = new Book("IT2", "Garry Poter", 30,"Okt 66th");
 book4 = new Book("Comedy", "Garry", 40,"Sep 66th");
 book5 = new Book("Comedy1", "SK2", 130,"March 66th");
 book6 = new Book("Comedy2", "Egor1", 130,"March 66th");
 book7 = new Book("Comedy3", "Egor2", 130,"March 66th");
 book8 = new Book("Comedy4", "Egor3", 130,"March 66th");
 book9 = new Book("Comedy5", "Egor4", 130,"March 66th");
 book10 = new Book("Comedy6", "Egor5", 130,"March 66th");

 gLibrary.addBook(book1);
 gLibrary.addBook(book2);
 gLibrary.addBook(book3);
 gLibrary.addBook(book4);
 gLibrary.addBook(book5);
 gLibrary.addBook(book6);
 gLibrary.addBook(book7);
 gLibrary.addBook(book8);
 // gLibrary.addBook(book9);
 // gLibrary.addBook(book10);
});
