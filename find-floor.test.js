const findFloor = require("./find-floor");

describe("#findFloor", function(){
  it("returns the floor or -1", function(){
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 9)).toBe(8);
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 20)).toBe(19);
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 0)).toBe(-1);
  });
});
