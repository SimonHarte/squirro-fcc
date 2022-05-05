import { type DataEntry } from './Base';

export type AuthorAttributes = {
  fullName: string;
};

export type Author = DataEntry & {
  attributes: AuthorAttributes;
};

export type AuthorsData = {
  data: Array<Author>;
};
