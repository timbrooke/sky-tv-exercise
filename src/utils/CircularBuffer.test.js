import CircularBuffer from "./CircularBuffer"

describe('Circular Buffer',()=>{
  it('should store a number',()=>{
    const cb = new CircularBuffer();
    cb.addValue(42)
    expect(cb.getAverage()).toEqual(42)
  })
  it('should provide the average of the numbers stored',()=>{
    const cb = new CircularBuffer();
    cb.addValue(42)
    cb.addValue(24)
    expect(cb.getAverage()).toEqual(33)
  })
  it('only maintain a max number of entrie',()=>{
    const cb = new CircularBuffer(3);
    cb.addValue(2);
    cb.addValue(3);
    cb.addValue(4);
    cb.addValue(5);
    expect(cb.buffer.length).toEqual(3);
    expect(cb.getAverage()).toEqual(4);
  })
});
