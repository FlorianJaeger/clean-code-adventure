import { Item } from '../model/Item.model';

import { Category } from '../types/Category.enum';

export const filterItemsByCategoryImperative = (
  items: Item[],
  category: Category,
): Item[] => {
  const filteredItems: Item[] = [];
  items.forEach(item => {
    if (item.category === category) {
      filteredItems.push(item);
    }
  });
  return filteredItems;
};

export const filterItemsByCategoryDeclarative = (
  items: Item[],
  category: Category,
): Item[] => {
  return [];
};
