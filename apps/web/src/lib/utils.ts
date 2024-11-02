export const validateEmail = (value: string) => {
  if (value.length === 0) {
    return true;
  }
  return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
};
