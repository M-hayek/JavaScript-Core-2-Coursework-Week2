function readingList(books, booksCover) {
  //Write your code here...
  let content = document.querySelector ("#content");
  let unorderedList = document.createElement ("ul");
  content.appendChild(unorderedList);
  unorderedList.style.display= "flex";
  unorderedList.style.display="wrap";
  

  for (let i = 0; i<books.lenth; i++){
     let addBook = document.createElement ("li");
     unorderedList.appendChild (addBook);
     addBook.style.listStyleType = 'none';
		 addBook.style.width = '300px';
	   addBook.style.height = '300px';
	   addBook.style.padding = '25px';
	
     let bookTitle = document.createElement ("p");
     addBook.appendChild(bookTitle);
     p.style.marginBottom = '40px';
     p.textContent = books[i].title + " by " + books[i].authors;


     let bookImage = document.createElement ("img");
     addBook.appendChild(bookImage);
     bookImage.style.maxWidth = '200px';
		 bookImage.style.maxHeight = '200px';
	   bookImage.src = booksCover[i];

     if (books[i].alreadyRead) {
			addBook.style.backgroundColor = 'green';
		} else addBook.style.backgroundColor = 'red';

  }

}



const booksCover = [
	'https://static.epub.vn/epubvn-image/optimized-cover1570413642597-artworks-000442818750-sxidwx-t500x500.jpg',
	'https://machinatorium.files.wordpress.com/2012/10/human-cover1.jpg',
	'https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL._SS600_.jpg',
];


readingList(books, booksCover);
