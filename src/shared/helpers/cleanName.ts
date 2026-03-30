export const cleanName = (value: string) => {
  return value
    .replace(/[^A-Za-zА-Яа-яЁё\s-]/g, "") // только буквы, пробел, дефис
    .replace(/\s+/g, " ") // убираем лишние пробелы
    .trimStart(); // убираем пробел в начале
};
export const normalizeName = (value: string) => {
  return value
    .toLowerCase()
    .split(" ")
    .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : ""))
    .join(" ")
    .trim();
};
