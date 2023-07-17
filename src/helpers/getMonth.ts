export const getMonth = (date: string | number): string => {
  const curr = new Date(date);
  const month = curr.toLocaleString('en-US', { month: 'long' });
  return month;
};
