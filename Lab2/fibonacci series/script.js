function * fibonacciByElements(num){
    var previos = 0;
    var next = 1;
    var i = 0;

    if (num == 0) return;

    yield 0;
    if (num == 1) return;

    yield 1;
    if (num == 2) return;

    while (i < num - 2) {
        var temp = previos;
        previos = next;
        next += temp;
        yield next;
        i++;
    }
    //#region  first trail
    // // var series = "0 1";
    // var previos = 0;
    // var next = 1;
    // if (num ==0) return; 
    // if (num ==1) {
    //     yield 0;
    //     return;
    // } 
    // if (num ==2) {
    //     yield 0;
    //     yield 1;
    //     return;
    // } 
    // if (num > 2) {
    //     yield 0;
    //     yield 1;
        
    //     for(i =0; i<num-2;i++)
    //     {
    //         // series+=` ${next+previos}`;
    //         yield next+previos;
    //         temp = previos;
    //         previos = next;
    //         next += temp;
    //     }
    //     // console.log(series);
    // } 
    //#endregion
}
function * fibonacciByMax(max){
    if (max <= 0) return;
    yield 0;
    if (max <= 1) return;

    yield 1;
    if (max <= 3) return;

    var previos = 0;
    var next = 1;

    while (next + previos < max) {
        yield next + previos;
        var temp = previos;
        previos = next;
        next += temp;
    }
    
    //#region  first trail
    // // var series = "0 1";
    // if (max <= 0) return;
    // else if(max <= 1){
    //     yield 0;
    //     return;
    // }
    // else if (max<=3){
    //     yield 0
    //     yield 1
    //     return;
    // }
    // else
    // {
    //     yield 0;
    //     yield 1;
    //     var previos = 0;
    //     var next = 1;
    //     while(next<max)
    //     {
    //         if(next+previos < max)
    //         yield next+previos;
    //         // series+=` ${next+previos}`;
    //         temp = previos;
    //         previos = next;
    //         next += temp;
    //     }
    // // console.log(series);
    // }
    //#endregion
}

