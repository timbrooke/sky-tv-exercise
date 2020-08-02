import {calcContain } from './video'

describe('calcContain',()=>{
  it('should calculate the target area of destination rect in proportion to source rect',()=>{
    const result1 = calcContain(200,100,100,50);
    expect(result1).toEqual({w:100,h:50});

    const result2 = calcContain(100,50,100,25);
    expect(result2).toEqual({w:50,h:25});
  })
})
