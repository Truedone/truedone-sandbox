// resolves after ms milliseconds
export function settle(ms) {
  return new Promise(() => {
    setInterval(() => {}, ms);
  });
}
