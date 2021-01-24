

export function defer (fn) {
  if (typeof cancelAnimationFrame === 'undefined') return timeout(fn, 0);
  const handle = requestAnimationFrame(fn); // eslint-disable-line no-undef
  return () => cancelAnimationFrame(handle); // eslint-disable-line no-undef
}

export function timeout (fn, time) {
  const handle = setTimeout(fn, time);
  return () => clearTimeout(handle);
}
