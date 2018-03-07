// function madlib1(name, subject) {
//     newstr = name + 's' + " favorite subject in school is " + subject
// return newstr
// }
// console.log(madlib1("Jake", "Math"))

// var good = .2
// var fair = .15
// var bad = .1
// var tipprice = []
// function tipAmount(bill, service){
//     if (service === good){
//         tipprice = bill*good
    
//     }
//     else if(service === fair){
//         tipprice = bill*fair
//     }
//     else if (service === bad){
//         tipprice = bill*bad
//     }
//     return tipprice
// }
// console.log(tipAmount(100, bad))

// var good = .2
// var fair = .15
// var bad = .1
// var tipprice = []
// var total = []
// function totalAmount(bill, service){
//     if (service === good){
//         tipprice = bill*good
//         total = tipprice + bill
    
//     }
//     else if(service === fair){
//         tipprice = bill*fair
//         total = tipprice + bill
//     }
//     else if (service === bad){
//         tipprice = bill*bad
//         total = tipprice + bill
//     }
//     return total
// }
// console.log(totalAmount(100, good))

// function printNumbers(start, end){
//     for (var count=start; count <= end; count++)
// {
//     console.log(count)
// }
// }
// printNumbers(1, 10)

// function printNumbers(start, end){
//     var count = start
//     while (count <= end){
//     console.log(count)
//     count++
//     }
// }
// printNumbers(1, 10)

// function printSquare(size){
//     for (var i = 1; i <= size; i++){
//         console.log("*".repeat(size));
//     }
// }
// printSquare(5)
// function printBox(width, height){
//     var rowofstars = "*".repeat(width)
//     console.log(rowofstars)
//     var middlerow = "*" + " ".repeat(width -2) + "*"
//     for (var i = 0; i < height -2; i++){
//         console.log(middlerow)
//     }
//     console.log(rowofstars)
// }

// printBox(6,4)

// function printBanner(text){
//    var rowofstars= "*".repeat(text.length + 4)
//    console.log(rowofstars)
//    var midrow = "*" + " "+ text +" "+ "*"
//    console.log(midrow)
//    console.log(rowofstars)

// }
// printBanner("You can do it dude")
// function leetSpeak(convertString){
//     var newstr = convertString
//     // var st = ""
//     var st = newstr.toUpperCase()
//     st= st.replace(/A/g, "4")
//     st= st.replace(/E/g, "3")
//     st= st.replace(/G/g, "6")
//      st= st.replace(/L/g, "1")
//      st= st.replace(/O/g,"0")
//      st= st.replace(/S/g, "5")
//      st= st.replace(/T/g, "7")
//     console.log(st)
//     }
//  leetSpeak("whatever")   

// function longVowels(word){
//     var upperwords  = word
//     upperwords = upperwords.replace("oo", "ooooo")
//     upperwords = upperwords.replace("ee", "eeeee")
//     console.log(upperwords)
// }
// longVowels("CheeSe")
// longVowels("Good")

function positiveNumbers(array){
    var newarray = []
    for (var i = 0; i < array.length; i++){
        if (array[i] > 0){
         newarray= newarray.push(array[i])
        }
        }
        console.log(newarray)
}
positiveNumbers([-1, -2, 3 , 4])