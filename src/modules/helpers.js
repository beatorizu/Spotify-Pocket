export const getContentNameById = (id, items = []) => {
  if (!id && items.length === 0) {
    return '';
  }
  const { name ='' } = items.find(category => category.id === id) || '';
  return name;
};
