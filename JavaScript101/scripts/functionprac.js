// var arr = [-1, -2, 0, 1 ,2 ,3]

// var newArray = arr.filter(function(element){
//     return element > 0 ; 
// })
// console.log(newArray)

//Even Numbers
// var arr = [-1, -2 , -3 , 1 , 3 , 4]

// var newArray = arr.filter(function(element){
//     return element % 2 === 0;
// })
// console.log(newArray)

// Square Numbers
// var array1 = [-2, -3, -5, 1, 3 , 5]

// var newArray1 = array1.map(function(e){
//     return Math.pow(e, 2)
// })
// console.log(newArray1)

// var cityObjectArray = [
//     {name: 'Los Angeles', temperature: 60.0},
//     {name: 'Atlanta', temperature: 52.0},
//     {name: 'Detroit', temperature: 48.0},
//     {name: 'New York', temperature: 80.0}
// ]

// var newCityTempArray = cityObjectArray.filter(function(whatever){
//     if (whatever.temperature < 70.0){
//         return whatever
//     }
// })
// console.log(newCityTempArray)

// var namecityArr = newCityTempArray.forEach(function(element){
//     console.log(element.name)
// })


// var cityObjectArray = [
//     {name: 'Los Angeles', temperature: 60.0},
//     {name: 'Atlanta', temperature: 52.0},
//     {name: 'Detroit', temperature: 48.0},
//     {name: 'New York', temperature: 80.0}
// ]

// var citynames = cityObjectArray.map(function(element){
//     return element.name
// })
// console.log(citynames)

// var people = [
//     'Dom',
//     'Lyn',
//     'Kirk',
//     'Autumn',
//     'Trista',
//     'Jesslyn',
//     'Kevin',
//     'John',
//     'Eli',
//     'Juan',
//     'Robert',
//     'Keyur',
//     'Jason',
//     'Che',
//     'Ben'
//   ];
//   people.forEach(function(person){
//       console.log("Good Job, " + person +'!')
//   })

// var people = [
//     'Dom',
//     'Lyn',
//     'Kirk',
//     'Autumn',
//     'Trista',
//     'Jesslyn',
//     'Kevin',
//     'John',
//     'Eli',
//     'Juan',
//     'Robert',
//     'Keyur',
//     'Jason',
//     'Che',
//     'Ben'
//   ];
// function arraysort(sorting){
//   var newarray = sorting.sort()
//   return newarray

// }
// //var result = arraysort(people)
// //console.log(result)

// console.log(arraysort(people))

//Sort an erray #2
// var people = [
//         'Dom',
//         'Lyn',
//         'Kirk',
//         'Autumn',
//         'Trista',
//         'Jesslyn',
//         'Kevin',
//         'John',
//         'Eli',
//         'Juan',
//         'Robert',
//         'Keyur',
//         'Jason',
//         'Che',
//         'Ben'
//       ];
//       people.sort(function(a, b){
//         //   console.log(a)
//         //   console.log(b)
//         //   console.log('---')
//           var sortedbylength = a.length - b.length
//           return sortedbylength
//       })
//       console.log(people)

//Sort an array #3 not done
//    function Comparator(total, amount){
//     return total + amount;
    
//    }
//   var arr = [
//     [1, 3, 4],
//     [2, 4, 6, 8],
//     [3, 6]
//   ];

//    arr = arr.sort(Comparator);
//    console.log(arr)

// 3 times problem

// function call3times(fun) {
//     fun();
//     fun();
//     fun();
//     fun();
// }
// call3times(function(){
//     console.log("Hello World")
// })

// n times problem
// function callNtimes(times, fun){
//     for (var i = 0; i < times; i++){
//         fun();
//     }
// }
// function helloworld(){
//     console.log('hello world')
    
// }
// callNtimes(5, helloworld)

// sum of an array

// var array = [1, 3 ,4]

// var arrayreduce= array.reduce(function(accumulator, currentvalue){
//     console.log(accumulator)
//     console.log(currentvalue)
//     console.log('---')
//     return accumulator + currentvalue;

// })
// console.log(arrayreduce)

//acronym
// var acronym = (['very', 'important', 'person'])

// var acronym1 =(['national', 'aeronautics', 'space', 'administration'])


//     var a1 = acronym1.reduce(function(value, item){
//         console.log(value)
//         console.log(item)
//         console.log('---')
//         return value + item.charAt(0).toUpperCase();
//     }, '');

//     console.log(a1)




// var animals = [
//     {name: 'fluffykins', species: 'rabbit'},
//     {name: 'caro', species: 'dog'},
//     {name: 'hamil', species: 'dog'},
// ]
//  var dogs = animals.filter(function(wee){
//      return wee.name === 'fluffykins' || wee.name === 'caro'
//  })
//  console.log(dogs)


// var animals = [
//     {name: 'fluffykins', species: 'rabbit'},
//     {name: 'caro', species: 'dog'},
//     {name: 'hamil', species: 'dog'},
// ]
//  var dogs = animals.map(function(wee){
//      return wee.species
//  })
//  console.log(dogs)
var i = 0
do {
    alert(i);
    i++
} while (i < 10 )
