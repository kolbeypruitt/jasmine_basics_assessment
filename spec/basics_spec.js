var code = require('../basics.js');

  describe('letterGrader', function(){
    it('score should result in the a letter grade', function(){ expect(code.letterGrader(93)).toEqual('A-'); expect(code.letterGrader(87)).toEqual('B+'); expect(code.letterGrader(72)).toEqual('C-');
  });
});

  describe('averageScore', function(){
    it('should result in average of scores in the array', function(){ expect(code.averageScore([90, 95, 87, 60, 59, 100, 96, 74, 69])).toEqual(81);
  });
});

  describe('medianScore', function(){
    it('should result in median number of array', function(){ expect(code.medianScore([90, 95, 87, 60, 59, 100, 96, 74, 69])).toEqual(87);
  });
});

  describe('modeScore', function(){
    it('should result in mode of scores in the array', function(){ expect(code.modeScore([90, 96, 87, 60, 59, 100, 96, 74, 69])).toEqual(96);
  });
});
