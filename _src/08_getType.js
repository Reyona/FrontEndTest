export function getType(object) {
  if (object === null) return String(object);
  if (typeof object === 'object') return Object.prototype.toString.call(object);
  return typeof object;
}
