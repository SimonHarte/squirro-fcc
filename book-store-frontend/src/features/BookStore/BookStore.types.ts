import type { StoreAttributes } from '../../types/Stores';

export type BookStoreProps = StoreAttributes & {
  id: string;
  books: Array<string>;
  countryId: string;
};
