class CircularBuffer {
  constructor(maxLength = 20) {
    this.buffer = [];
    this.maxLength = maxLength;
  }
  addValue(v){
    this.buffer.push(v);
    if(this.buffer.length > this.maxLength){
      this.buffer.shift();
    }
  }
  getAverage(){
    if(this.buffer.length === 0) return 0
    const total = this.buffer.reduce((prev,acc) => (prev+acc),0)
    return total/this.buffer.length;
  }
  clear(){
    this.buffer = [];
  }
}

export default CircularBuffer;
