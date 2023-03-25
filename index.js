class SortedList {
  constructor() {
    this.items= []
    this.length=this.items.length
  }

  add(item) {this.items.push(item)}

  get(pos) {
    if(pos<this.items.length) return this.items[pos]
    else throw new Error('OutOfBounds');
  }

  max() {
    if (this.items.length>0) return this.items[this.items.length-1]
    else throw new Error('EmptySortedList');
  }

  min() {
    if (this.items.length>0) return this.items[0]
    else throw new Error('EmptySortedList');
  }

  sum() {
    let sum=0
    for(let i=0; i<this.items.lenght; i++){
      sum+=this.items[i]
    }
    return sum
  }

  avg() {
    return (this.sum()/this.items.length)
    
  }
}

module.exports = SortedList;
