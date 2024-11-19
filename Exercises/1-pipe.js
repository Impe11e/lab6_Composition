'use strict';

const pipe = (...fns) => {
    for (const f of fns) {
      if (typeof f !== 'function') {
        throw new Error('All arguments should be functions!')
      }
    }
    return (x) => {
      let res = x;
      for (let i = 0; i < fns.length; i++) {
        res = fns[i](res);
      }
      return res;
    }
  }
 
  // or i can just write this: return (x) => fns.reduce((v, f) => f(v), x);

module.exports = { pipe };
