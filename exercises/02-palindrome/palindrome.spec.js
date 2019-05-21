// a palindrome: a word or phrase that is the same forwards or backwards.
let isPalindrome = word => {
  if (typeof (word) !== 'string') return false;
  if (!word || word.trim() === '') return false;
  return word === word.split('').reverse().join('');
};

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

  it('null: False', () => {
    isPalindrome(null).should.be.false();
  });

  it('"": False', () => {
    isPalindrome('').should.be.false();
  });

  it('"    ": False', () => {
    isPalindrome('    ').should.be.false();
  });

  it('1234: False', () => {
    isPalindrome(1234).should.be.false();
  });
});
