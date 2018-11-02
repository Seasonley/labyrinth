var labyrinth = require('../lib/labyrinth')

describe('走迷宫', function () {
  it('5*5 lost pStart', function () {
      (function(){
        var arrMap=[
          [0,0,8,0,0],
          [0,0,0,8,0],
          [0,8,8,8,0],
          [0,0,0,8,0],
          [0,0,0,0,2],
        ]
        labyrinth(arrMap,0,1,2)
      }).should.throw('pStart not found')
  })
  it('5*5 lost pEnd', function () {
    (function(){
      var arrMap=[
        [1,0,8,0,0],
        [0,0,0,8,0],
        [0,8,8,8,0],
        [0,0,0,8,0],
        [0,0,0,0,8],
      ]
      labyrinth(arrMap,0,1,2)
    }).should.throw('pEnd not found')
  })
  it('5*5 pass', function () {
    var arrMap=[
      [1,0,8,0,0],
      [0,0,0,8,0],
      [0,8,8,8,0],
      [0,0,0,8,0],
      [0,0,0,0,2],
    ]
    labyrinth(arrMap,0,1,2)
      .should.equal(true)
  })
  it('5*5 false', function () {
    var arrMap=[
      [1,0,8,0,0],
      [0,0,0,8,0],
      [0,8,8,8,0],
      [0,0,0,8,0],
      [0,0,8,0,2],
    ]
    labyrinth(arrMap,0,1,2)
      .should.equal(false)
  })
  
  it('10*10 true', function () {
    var arrMap=[
      [1,0,8,0,0,0,0,0,8,0],
      [0,0,0,8,0,0,0,0,8,0],
      [0,8,8,8,0,0,0,0,8,0],
      [0,0,0,8,0,0,0,0,8,0],
      [0,0,8,0,2,0,0,0,8,0],
      [8,0,8,0,0,0,0,0,8,0],
      [0,0,0,8,0,0,0,0,8,0],
      [0,8,8,8,0,0,0,0,8,0],
      [0,0,8,0,0,0,0,0,8,0],
      [0,0,8,0,0,0,0,0,8,0],
    ]
    labyrinth(arrMap,0,1,2)
      .should.equal(false)
  })
})