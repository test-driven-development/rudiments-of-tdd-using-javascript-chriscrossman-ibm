let fahrenheitToCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * 5 / 9;
};

describe('fahrenheit to celsius', () => {
  it('fahrenheit to celsius', () => {
    true.should.be.true();
  });

  describe('fahrenheit to celsius calculator', () => {
    it('212 F => 100 C', function () {
      fahrenheitToCelsius(212).should.equal(100);
    });
    it('32 F => 0 C', function () {
      fahrenheitToCelsius(32).should.equal(0);
    });
    it('50 F => 10 C', function () {
      fahrenheitToCelsius(50).should.equal(10);
    });
  });
});
