const output = document.querySelector('#output');
const previous = document.querySelector('#previous');

const display = (val)=> {
  if(output.value.includes('=')){
    clearAll();
  }
  output.value += val;
}

const clearAll = ()=> {
  output.value = '';
  previous.value = '';
}

const erase = ()=>{
  if(!(output.value.includes('='))){
    let str = output.value;
    output.value = str.substr(0,str.length - 1);
  }
}


// pi
const pi = (val)=> {
  output.value += Math.PI.toPrecision(3);
  previous.value = val;
}


// e
const exp = (val)=> {
  previous.value = val;
  output.value += Math.E.toPrecision(3);
}


// x^y
const sup = (val)=> output.value += val;


//sqrt() *
const sqrt = (vals)=> {
  let val = output.value;
  previous.value = `${vals}${val}`
  output.value = Math.sqrt(val).toPrecision(4);
}

// sin()
const sin = ()=> {
  let val = output.value;
  output.value = `=${Math.sin(val).toPrecision(4)}`;
  previous.value = `sin(${val})`;
}

// cos()
const cos = ()=> {
  let val = output.value;
  output.value = `=${Math.cos(val).toPrecision(4)}`;
  previous.value = `cos(${val})`;
}

// tan()
const tan = ()=> {
  let val = output.value;
  output.value = `=${Math.tan(val).toPrecision(4)}`;
  previous.value = `tan(${val})`;
}

// asin()
const asin = ()=> {
  let val = output.value;
  output.value = `=${Math.asin(val).toPrecision(4)}`;
  previous.value = `arcsin(${val})`;
}

// acos()
const acos = ()=> {
  let val = output.value;
  output.value = `=${Math.acos(val).toPrecision(4)}`;
  previous.value = `arccos(${val})`;
}

// atan()
const atan = ()=> {
  let val = output.value;
  output.value = `=${Math.atan(val).toPrecision(4)}`;
  previous.value = `arctan(${val})`;
}

// log
const log = ()=> {
  let val = output.value;
  output.value = `=${Math.log10(val).toPrecision(4)}`;
  previous.value = `log10(${val})`;
}

// ln
const ln = ()=> {
  let val = output.value;
  output.value = `=${Math.log(val).toPrecision(4)}`;
  previous.value = `ln(${val})`;
}


// Factorial *
const fact = ()=> {
    let val = parseInt(output.value);
    let res = 1;
    for(let i=1;i<=val;i++){
      res *= i;
    }
    previous.value = `${val}!`
    output.value = `=${res.toPrecision(5)}`;
}


// Equal click *
const finalAnswer = ()=>{
  let val = output.value;
  if(val.includes('=')){
    // dont do anything
  }
  else if(val===''){
    alert('Enter some numbers to do calculation');
  }
  else{
    let out = eval(val);
    output.value = `=${out}`;
    previous.value = val;
  }
}