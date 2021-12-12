export function isTouchDevice() {
  if (window.matchMedia("(pointer: coarse)").matches) {
    return true;
  }
  return false;
}

export function getThemeDark() {
  return getComputedStyle(document.documentElement).getPropertyValue("--theme-dark");
}

export function getThemeMedium() {
  return getComputedStyle(document.documentElement).getPropertyValue(
    "--theme-medium"
  );
}

export function getThemeLight() {
  return getComputedStyle(document.documentElement).getPropertyValue(
    "--theme-light"
  );
}
