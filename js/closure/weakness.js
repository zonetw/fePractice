// Q1: modify obj object without changing the code below
const o = (() => {
  const obj = {
    a: 1,
    b: 2,
  };

  return {
    get: (k) => {
      return obj[k];
    },
  };
})();
console.log(o.get("a")); // 1

// Solution
Object.defineProperty(Object.prototype, "x", {
  get() {
    return this;
  },
});

const realObj = o.get("x");
realObj.c = 3;
console.log(realObj);

// Wrong ans, why ?
Object.prototype.y = function () {
  return this;
};
const globalObj = o.get("y")();
console.log(globalObj);

// Q1-1: how to prevent ?
const o1_1 = (() => {
  // a1: unlink prototype
  // a1-1
  // const obj = Object.create(null)
  const obj = {
    a: 1,
    b: 2,
  };

  // a1-2
  //Object.setPrototypeOf(obj, null)

  return {
    get: (k) => {
      // a2: check property
      if (obj.hasOwnProperty(k)) return obj[k];
      return `no property: ${k}`;
    },
  };
})();

console.log(o1_1.get("c"));
