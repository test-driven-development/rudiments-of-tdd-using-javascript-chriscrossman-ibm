// a palindrome: a word or phrase that is the same forwards or backwards.

describe('the canary spec for palindrome feature', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true();
  });
});

describe('isPalindrome of', () => {
  it('"mom": true');
  it('"brother": false');
  it('"Mom": false');
  it('null: false');
  it('"": false');
  it('"      ": false');
  it('1234: false');
});
