// a palindrome: a word or phrase that is the same forwards or backwards.
let isPalindrome = word => word === word.split('').reverse().join('');

describe('the canary spec for palindrome feature', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true();
  });
});

describe('isPalindrome of', () => {
  it('"mom": true', () => {
    isPalindrome('mom').should.be.true();
  });

  it('"brother": false', () => {
    isPalindrome('brother').should.be.false();
  });

  it('"Mom": False', () => {
    isPalindrome('Mom').should.be.false();
  });

  it('null: false');
  it('"": false');
  it('"      ": false');
  it('1234: false');
});
