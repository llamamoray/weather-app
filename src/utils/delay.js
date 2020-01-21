/** Returns a Promise with the given delay */
export function delay(ms = 1500) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
