let obj = {
  array: [ 1, 2, 3, 4, 5 ],

  push(x) {
    this.array.push(x);
  },

  getByIndex(x = 1) {
    if(x >= this.array.length) {
      x = x % this.array.length;
    }
    return this.array[x];
  }
};

export default obj;