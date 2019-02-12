describe('TESTING FRAMEWORK', function() {

  describe('Should pass:', function() {
    it('#toEqual', function() {
      expect(1).toEqual(1)
    })

    it('#toInclude', function() {
      expect([1,2,3]).toInclude(1)
    })
  })

  describe('Should fail:', function() {
    it('#toEqual', function() {
      expect(1).toEqual(2)
    })

    it('#toInclude', function() {
      expect([1,2,3]).toInclude(4)
    })
  })
})
