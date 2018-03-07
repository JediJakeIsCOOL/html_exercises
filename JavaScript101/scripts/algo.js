/*var runner = 20;
while (true){
    var test = true;
    for(i=1;i<=20;i++){
        if(runner % i !== 0){
            test = false;
        }
    }

    if(test ===true){
        console.log(runner);
        break;
    }
    runner++;
}
*/

var test  = true;
var ans=0;
for(i =100 ; i <1000 ; i++){
    for(j = 100; j <1000 ; j++){
        var res = i * j;
        if(res.toString()  === res.toString().split("").reverse().join("")){
            if(res > ans){
                ans = res;
            } 
        }
    }
}
console.log(ans);


    /*var one = 999;
    var two = 999;

    var test = true;
    while(true){
        var res = one * two;
        if(res.toString()  === res.toString().split("").reverse().join("")){
            console.log(res);
            test = false;
        }


        two--;
        res = one * two;
        if(res.toString()  === res.toString().split("").reverse().join("")){
            console.log(res);
            test = false;
        }

        one--;

        res = one * two;
        if(res.toString()  === res.toString().split("").reverse().join("")){
            console.log(res);
            test = false;
        }

        if(test === false){
            break;
        }
    }
*/

