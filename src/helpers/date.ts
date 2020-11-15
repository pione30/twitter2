const formatDate = (dateString: string): string => {
  const orgDate = new Date(dateString);
  const year = orgDate.getFullYear();
  const month = orgDate.getMonth() + 1;
  const date = orgDate.getDate();
  const hour = orgDate.getHours();
  const minute = orgDate.getMinutes();
  const second = orgDate.getSeconds();

  return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
};

export { formatDate };
