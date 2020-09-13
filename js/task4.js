// Write code under this line
  class StringBuilder(){
    this._value = value;
  }
    get value(){
    return this._value;
    };

const append = function (str) {
  


console.log(typeof StringBuilder);
// 'function'


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

 builder.prepend('^');
 console.log(builder.value); // '^.^'

 builder.pad('=');
 console.log(builder.value); // '=^.^='

