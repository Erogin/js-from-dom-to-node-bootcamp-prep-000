var t = 0;

function strangeCounter(t) {
    var setValue = 3;
    var newValue = setValue;
    var multiplier = 2;

    for(let i = 1; i < t; i++){
      newValue = newValue - 1;
      if(newValue = 2){
        setValue = setValue * 2;
        for(let i = 1; i < (t-i); i++){
          newValue = newValue - 1;
          }
      }
      }
      return newValue;
}


var t = 4;


for(let i = 1; i < 21; i++){
  console.log(i + "  " + strangeCounter(i))
}
