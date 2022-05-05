import { type DataEntry } from './Base';

export type BestSeller = {
  name: string;
  author: string;
};

export type BookAttributes = {
  name: string;
  copiesSold: number;
};

export type BookRelationships = {
  author: {
    data: DataEntry;
  };
};

export type Book = DataEntry & {
  attributes: BookAttributes;
  relationships: BookRelationships;
};

export type BooksData = {
  data: Array<Book>;
};
