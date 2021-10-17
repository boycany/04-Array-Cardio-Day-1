const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const inv1500s = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600) 
)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const invName = inventors.map(inventor => inventor.first + ' ' + inventor.last)


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const invBirthSort = inventors.sort((a, b) => (a.year > b.year) ? 1 : (a.year < b.year) ? -1 : 0 )

const invBirthSortShorten = inventors.sort((a, b) => a.year - b.year) // 最簡潔的升冪排列寫法


// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const invTotalAge = inventors.reduce((total, inventor)=>{
      total += (inventor.passed - inventor.year)
      // console.log(total)
      return total
}, 0)

// 5. Sort the inventors by years lived

const invAgeSort = inventors.sort((a, b)=>{
      if((a.passed - a.year) > (b.passed - b.year)){
            return 1  //升冪排列，若改成-1就會變降冪排列。
      }//可想成：如果a>b成立，a就會排到b的後面（升冪），如不成立，a就會排到b的前面（降冪）。
      if((a.passed - a.year) < (b.passed - b.year)){
            return -1
      }
      return 0
})

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const div = document.querySelector('.mw-category')
const links = Array.from(div.querySelectorAll('a'))

const de = links.map(link=>link.textContent).filter(streetName=>streetName.includes('de'))

// 7. sort Exercise

const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 
      'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 
      'Beethoven, Ludwig', 'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul',
      'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 
      'Berlin, Irving','Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 
      'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 
      'Berio, Luciano','Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin',
      'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 
      'Bierce, Ambrose','Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 
      'Beecher, Henry', 'Biondo, Frank'
];
    

// Sort the people alphabetically by last name

const peopleOrdered = people.sort((a, b)=>{
      let splitNameA = a.split(', ')
      let splitNameB = b.split(', ')

      const lastNameA = splitNameA[1]
      const lastNameB = splitNameB[1]

     // lastNameA > lastNameB ? 1 : lastNameA < lastNameB ? -1 : 0
     if(lastNameA > lastNameB){
            return 1
     }
     if (lastNameA < lastNameB){
            return -1
     }
     return 0

})

// 8. Reduce Exercise

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 
            'car', 'van', 'bike', 'walk', 'car', 'van', 'car'
            , 'truck' ];

// Sum up the instances of each of these

const transportation = data.reduce((obj, item)=>{
      if(!obj[item]){
            obj[item] = 0
      }

      obj[item]++
      return obj
}, {})