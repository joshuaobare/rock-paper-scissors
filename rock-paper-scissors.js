function computerPlay() {
    function getRandomNum(a, b) {
        return Math.random() * (b - a) + a;
      }
    
    c=Math.trunc(getRandomNum(1,4));
    console.log(c);
}

computerPlay();