// ajax is making calls to servers


// (function (){
//     var url ='api.openweathermap.org/data/2.5/weather?q=Houston, Texas'
//     var apiKey = "f1b2dad070577bd82c64dd46e9643fe1"

//     var httpRequest;
//     makeRequest()
// }
// )
// function makeRequest() {
//     httpRequest = new XMLHttpRequest()
//      httpRequest.onreadystatechange = responseMethod()  //waits for response from server
//     httpRequest.open('Get', url + '&appid=' + apiKey)  //opening up communication
//     httpRequest.send();
// }

// function responseMethod() {
//     if (httpRequest.readyState === 4) {    //checks to see if response is complete
//         console.log(httpRequest.responseText);
//     if (httpRequest.status === 200){   //200 for .status = good
//         updateUIsuccess(httpRequest.responseText);  //response is json string
//     }
//     else{
//         updateUIerror()
//     }
//     }
//     }
// }

//function  updateUISuccess(responseText){
//     var response = JSON
// }




// (function (){
// var url= ''
// var apiKey = 


// $.get(url + 'appid=' + apiKey).done(function(response){   //$.get accepts one arg the url
//     console.log(response)
//     updateUISuccess(response)
// }).fail(function(error){
//     console.log(error)
//     updateUIerror()
// }
// ))
// function updateUIsuccess(response)  {
//     var condition = response.weather[0].main
//     var degC = response.main.temp - 273.15;
//     var degCInt = Math.floor(degC)
//     var degF = degC *1.8 +32
//     var degFint = Math.floor(degF)
//     var $weatherBox = $('#weather')
//     var 


// }

// function updateUIError();
// var $weatherBox = $('#weather')
// $weatherBox.addClass('hidden')



// })
// //.get .done   .fail jquery