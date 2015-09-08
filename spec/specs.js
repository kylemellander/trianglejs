describe('triangleTracker', function(){
  
  it('returns "equilateral" if all the sides are the same value', function(){
    expect(triangleTracker(2, 2, 2)).to.equal("equilateral");
  });

});
