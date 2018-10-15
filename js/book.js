
function Book(title, author, numPages, pubDate){
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = pubDate;
}

Book.prototype.editBook = function(oBook){
  //make sure the info is unique too
  //get the properities in the oBook
  var oBookProperties = oBook.entries();
  for(var i = 0; i < oBookProperties.length; i++) {
    if(this.indexOf(oBookProperties[i]) !== -1) {
      oBookProperties[i] = undefined;
    }
  }
this.title = oBook.title || this.title;
this.author = oBook.author || this.author;
this.numPages = oBook.numPages || this.numPages;
this.pubDate = oBook.pubDate || this.pubDate;
return this;
};
