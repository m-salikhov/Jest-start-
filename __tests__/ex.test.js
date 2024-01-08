describe('stack', () => {
  it('isEmpty', () => {
    let stack = [];
    expect(stack.length).toBe(0);
    stack.push('two');
    expect(stack.length).toBe(1);
    stack.pop();
    expect(stack.length).toBe(0);
  });
});
