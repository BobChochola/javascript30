var reverseString = function() {
    var aaaaa = ["h", "e", "l", "l", "o"]
    var result = "";
    var ary = aaaaa.toString().split("");

    for (var i = ary.length - 1; i >= 0; i--) {
        result = result + ary[i]; //從後面串回字串
    }
    console.log(result)
    return result

};
reverseString()