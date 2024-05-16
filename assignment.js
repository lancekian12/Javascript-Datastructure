'use strict';

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
    printBookInfo: function ({
      title,
      author,
      year = 'year unknown',
    }) {
      console.log(`${title} by ${author}, ${year}`);
    },
    spellWord: function (arg) {
      console.log(...arg);
    },
    printBookAuthorsCount: function (title, ...authors) {
      console.log(
        `The book ${title} has ${authors.length} authors`
      );
    },
    hasExamplesinJava: function (arg) {
      console.log(
        arg.programmingLanguage === 'Java' ||
          'No data available'
      );
    },
  },
  {
    title:
      'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: [
      'Randal E. Bryant',
      "David Richard O'Hallaron",
    ],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: [
      'Abraham Silberschatz',
      'Peter B. Galvin',
      'Greg Gagne',
    ],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title:
      'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: [
      'work',
      'focus',
      'personal development',
      'business',
    ],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];
const logBookChapters = function (bookChapters) {
  for (const [title, chapter] of bookChapters) {
    console.log(title.padEnd(20, '_'), chapter);
  }
};
const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];
logBookChapters(bookChapters);

// const getKeywordsAsString = function (str) {
//   const allKeywords = [];
//   for (const n of str) {
//     allKeywords.push(...n.keywords);
//   }
//   const noDuplicates = [...new Set(allKeywords)];
//   // const setArray = Array.from(noDuplicates).join(';');
//   console.log(noDuplicates.join(';'));
// };

// getKeywordsAsString(books);

// const logBookCategories = function (book) {
//   const allBooks = book.split(';');
//   for (const n of allBooks) {
//     console.log(n);
//   }
// };
// const bookCategories =
//   'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
// logBookCategories(bookCategories);

// const logBookTheme = function (string) {
//   const title = string.toLowerCase();
//   if (title.startsWith('computer')) {
//     console.log('This book is about computers');
//   }
//   if (title.includes('algorithms') && title.includes('structures')) {
//     console.log('This book is about algorithms and data structures');
//   }
//   if (title.endsWith('system') || (title.endsWith('systems') && !title.includes('operating'))) {
//     console.log('This book is about some systems, but definitely not about operating systems');
//   }
// };
// logBookTheme('computer');
// logBookTheme('algorithms');
// logBookTheme('algorithms and data structures');
// logBookTheme('operating system');
// const newBookTitle = books[1].title.replace('Programs', 'Software');
// console.log(newBookTitle);
// const normalizeAuthorName = function (author) {
//   const authorName = author.toLowerCase().trim();
//   // console.log(authorName);
//   const capital = authorName[0].toUpperCase() + authorName.slice(1);
//   console.log(capital);
//   const correctName = capital.slice(capital.indexOf(' ') + 1).toLowerCase();
//   const kian = correctName[0].toUpperCase() + correctName.slice(1);
//   console.log(kian);
//   const final = capital.slice(0, capital.indexOf(' ') + 1) + kian.slice(0);
//   console.log(final);
//   if (final.includes('(contributor)')) {
//     console.log(final.slice(0, final.lastIndexOf(' ') + 1));
//   } else {
//     console.log(final);
//   }
// };
// normalizeAuthorName('  JuliE sussMan (Contributor)');

// console.log(books[0].ISBN[6]);
// console.log(books[0].ISBN[4]);
// console.log(books[0].ISBN[9]);
// console.log(books[0].ISBN[8]);
// const quote =
//   'A computer once beat me at chess, but it was no match for me at kick boxing';
// console.log(quote.indexOf('chess'));
// console.log(quote.slice(-6));
// console.log(quote.slice(quote.lastIndexOf(' ') + 1));
// const isContributor = function (author) {
//   //answer
//   return author.lastIndexOf('(Contributor)') !== -1;
//   // // IsContributor returns
//   // const contributor = author.slice(
//   //   author.lastIndexOf(' ') + 1
//   // );
//   // console.log(
//   //   contributor === '(Contributor)' ? true : false
//   // );
// };
// isContributor('Julie Sussman (Contributor)');
// isContributor('Robert Sedgewick');

// const firstBookMap = new Map(Object.entries(books[0]));
// // console.log(firstBookMap);

// for (const [key, value] of firstBookMap) {
//   if (typeof value === 'number') console.log(`${key}`);
// }

// const bookMap = new Map([
//   ['title', 'Clean Code'],
//   ['author', 'Robert C. Martin'],
// ]);
// console.log(bookMap);
// bookMap.set('pages', 464);

// console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);
// console.log(bookMap.size);
// console.log(bookMap.has('author') && 'The author of the book is known');
// const allKeywords = [];
// for (let key of books) {
//   allKeywords.push(...key.keywords);
// }
// console.log(allKeywords);
// const uniqueKeywords = new Set(allKeywords);
// uniqueKeywords.add('coding');
// uniqueKeywords.add('science');
// uniqueKeywords.delete('business');
// const uniqueKeywordsArr = [...uniqueKeywords];
// uniqueKeywords.clear();

// console.log(uniqueKeywords);
// console.log(uniqueKeywordsArr);

// for (let i = 0; i < books.length; i++) {
//   allKeywords.push(...books[i].keywords);
// }
// console.log(allKeywords);
// function getFirstKeyword(book) {
//   console.log(book?.keywords?.[0] ?? 'Not found');
// }
// getFirstKeyword(books[0]);
// const entries = [];
// for (const key of Object.keys(books[0].thirdParty.goodreads)) {
//   entries.push([key]);
// }

// for (const [index, value] of Object.values(
//   books[0].thirdParty.goodreads
// ).entries()) {
//   entries[index].push(value);
// }
// const entries2 = Object.entries(books[0].thirdParty.goodreads);
// console.log(entries);
// console.log(entries2);
// for (const [i, j] of Object.entries(books[0].thirdParty.goodreads)) {
//   console.log(`${i} - ${j}`);
// }
// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];
// const pages = 880;
// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1],
//   pages,
// };
// console.log(newBook);
// const allAuthors = [];
// for (const auth of books) {
//   if (typeof auth.author === 'string') {
//     allAuthors.push(auth.author);
//   } else {
//     for (const auth2 of auth.author) {
//       allAuthors.push(auth2);
//     }
//   }
// }
// console.log(allAuthors);

// for (const [i, j] of allAuthors.entries()) {
//   console.log(`${i + 1}. ${j}`);
// }

// let pageSum = 0;
// for (const book of books) {
//   pageSum += book.pages;
// }
// console.log(pageSum);

// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// }

// for (let i = 0; i < books.length; i++) {
//   books[i].edition ||= 1;
// }
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent ??
//     console.log(`${books[i].title} provides no data about its online content`);
// }

// books[0].hasExamplesinJava(books[1]);
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent &&
//     console.log(`${books[i].title} provides online content`);
// }
// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);

// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher, restOfTheBook);

// books[0].printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(...bookAuthors);
// books[0].spellWord('Javascript');

// Destructuring Array
// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);
// const [, , thirdBook] = books;
// console.log(thirdBook);

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];

// const [[, rating], [, ratingCount]] = ratings;
// console.log(rating, ratingCount);

// const ratingStars = [63405, 1808];

// const [fiveStarRatingCount, oneStarRatingCount, threeStarRatings = 0] =
//   ratingStars;
// console.log(fiveStarRatingCount, oneStarRatingCount, threeStarRatings);

// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);
// const { keywords: tags } = books[0];
// console.log(tags);
// const { language, programmingLanguage = 'Unknown' } = books[6];
// console.log(language, programmingLanguage);

// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';
// ({ title: bookTitle, author: bookAuthor } = books[0]);

// console.log(bookTitle, bookAuthor);

// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// console.log(bookRating);
// books[0].printBookInfo({
//   title: 'Algorithms',
//   author: 'Robert Sedgewick',
//   year: '2011',
// });
// books[0].printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });
