export const TOGGLE_MENU = "TOGGLE_MENU";
export const RESET_MENU = "RESET_MENU";

export function toggleMenu() {
  return { type: TOGGLE_MENU };
}

export function reset() {
  return { type: RESET_MENU };
}
