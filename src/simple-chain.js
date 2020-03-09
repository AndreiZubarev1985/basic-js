const chainMaker = {
  // chain: '()',
  result: [],
  getLength() {
      return this.result.length;
  },
  addLink(value) {
      if(Object.is(value, null)) {
          value = 'null';
      } else if(Object.is(value, NaN)) {
          value = 'NaN';
      } 
          this.result.push(value);
          return this;
      
  },
  removeLink(position) {
      if(!Number.isInteger(position)) {
          this.result = [];
          throw Error;
      } else if( position < 1 || position > this.result.length) {
          this.result = []
          throw Error;
      } 
      this.result.splice(position-1, 1);
      return this;
      
  },
  reverseChain() {
      this.result.reverse();
      return this;
  },
  finishChain() {
      let res = this.result.map(item => '(' + ' ' + item + ' ' + ')' ).join('~~');
      this.result = [];
      return res;
  }
};

module.exports = chainMaker;
