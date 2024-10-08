/* {
  'Author A': ['Book 1', 'Book 3'],
  'Author B': ['Book 2'],
  'Author C': ['Book 4']
} */

function groupBooksByAuthor(books) {
  let obj = {}
  books.forEach((x) => {
    if (obj[x.author]) {
      obj[x.author].push(x.title);
    } else {
      obj[x.author] = [x.title]
    }
  })

  return obj

}

const bookArray = [{
  title: 'Book 1',
  author: 'Author A'
},
{
  title: 'Book 2',
  author: 'Author B'
},
{
  title: 'Book 3',
  author: 'Author A'
},
{
  title: 'Book 4',
  author: 'Author C'
},
  // Add more books as needed
];

const booksByAuthor = groupBooksByAuthor(bookArray);
console.log(booksByAuthor);

// ----------------------------------------------------------

const swapKeysAndValues = (value) => {
  const obj = {};

  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      if (obj[value[key]]) {
        obj[value[key]].push(key);
      } else {
        obj[value[key]] = [key];
      }
    }
  }
  return obj;
};

const exampleObject = { a: 'apple', b: 'banana', c: 'apple', d: 'date' };
const swappedObject = swapKeysAndValues(exampleObject);
console.log(swappedObject);
