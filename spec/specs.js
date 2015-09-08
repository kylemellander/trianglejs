describe('triangleTracker', function(){

  it('returns "equilateral" if all the sides are the same value', function(){
    expect(triangleTracker(2, 2, 2)).to.equal("equilateral");
  });

  it('returns "isosceles" if exactly 2 sides are the same value', function(){
    expect(triangleTracker(2, 2, 3)).to.equal("isosceles");
  });

  it('returns "scalene" if no sides are the same value', function(){
    expect(triangleTracker(2, 3, 4)).to.equal("scalene");
  });

  it('returns "not a triangle" if the smaller 2 sides added together are not greater than the 3rd side', function(){
    expect(triangleTracker(2, 2, 5)).to.equal("not a triangle");
  });

});
