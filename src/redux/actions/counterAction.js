import { INCREMENT, DECREMENT, RESET } from "../constants/counterTypes";

export function increase() {
  return { type: INCREMENT };
}
export function decrease() {
  return { type: DECREMENT };
}
export function reset() {
  return { type: RESET };
}
