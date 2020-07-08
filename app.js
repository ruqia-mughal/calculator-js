function getnumber(num) {
  
    var result = document.getElementById("result");
  
    result.value += num;    
}
function clearResult(num){

    var output = document.getElementById("result");

    output.value = "0";
}
function getResult(){

    var output = document.getElementById("result");

    output.value = eval(output.value);
}

function back(){

    var backing = document.getElementById("result");

      backing.value = backing.value.slice(0,-1);
}

function getsin() {
    var q = document.getElementById("result");
    q.value = Math.sin(q.value);
    
}
function getcos() {
    var q = document.getElementById("result");
    q.value = Math.cos(q.value);
    
}
function gettan() {
    var q = document.getElementById("result");
    q.value = Math.tan(q.value);
    
}
function getsqrt() {
    var q = document.getElementById("result");
    q.value = Math.sqrt(q.value,0.5);

    
}
  // document.getElementById("result").value= Math.pow(document.getElementById("result").value);
 
  
  function getsquare() {
    var q = document.getElementById("result");
    q.value = Math.pow(q.value,2);

  }
  function abc() {
    var c = document.getElementById("result");
    c.value = Math.abs(c.value);

  }
  function mod() {
    var c = document.getElementById("result");
    c.value = Math.exp(c.value)

  }
  function aaa() {
    var c = document.getElementById("result");
    c.value = Math.log(c.value)

  }
  function round() {
    var c = document.getElementById("result");
    c.value = Math.round(c.value);

  }
  