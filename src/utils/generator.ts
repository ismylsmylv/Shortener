const characterSet = "123456789ABCDEFGHJKMNPQRSTUVWXYZ";
export function generateUniqueId() {
  return "x"
    .repeat(11)
    .replace(/x/g, () => characterSet[Math.trunc(Math.random() * 32)]);
}
