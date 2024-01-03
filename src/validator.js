const checks = [];

export default () => ({
  addCheck: (fn) => checks.push(fn),
  isValid: (data) => checks.every((fn) => fn(data)),
});
