

//count 1

// function Counter(){
//     var count = 0
//     var actuallyCount = function(){ 
//          count++;
//         console.log(count)
//     return count;
//     }
//     return actuallyCount
// }
// var count1 = Counter()
// var count2 = Counter()
// count1()
// count1()
// count2()
// count2()

// count 2

// function Counter(x){
//     var count = x 
//     var actuallyCount = function(){ 
//          count++;
//         console.log(count)
//     return count;
//     }
//     return actuallyCount
// }
// var count1 = Counter(4)
// var count2 = Counter()
// count1()
// count1()

// count 3 
function Counter(x){
    var count = x 
    var increment = function(){ 
         count++;
        console.log(count)
        return count;
    var decrement = function(){
        count--;
        console.log(count)
        return count;
    }
    }
    return 
}
var count1 = Counter(4)
var count2 = Counter()
count1.increment()


