import ValuesBuffer from "./ValuesBuffer"

describe('ValueBuffer',()=>{
  it('should accept an object with number values and store them',()=>{
    const vb = new ValuesBuffer();
    vb.receive({a:1,b:2,c:3})
    expect(vb.getAverages()).toEqual({a:1,b:2,c:3})
  })
})

