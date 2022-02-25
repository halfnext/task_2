function fact(x) {
    let ans = 1;
    if (x < 0) {
        console.error("x must be greater than 0");
    }
    for (let i=1; i<x+1; i++) {
        ans *= i;
    }
    return ans
}
