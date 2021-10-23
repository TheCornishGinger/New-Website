export function isTouchDevice() {
  if (window.matchMedia("(pointer: coarse)").matches) {
    return true;
  }
  return false;
}
