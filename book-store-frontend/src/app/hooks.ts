import type { Author } from '../types/Authors';
import type { Book, BestSeller } from '../types/Books';
import type { DataEntry } from '../types/Base';
import {
  useGetBooksDataQuery,
  useGetAuthorsDataQuery,
  useGetCountryByIdQuery,
} from './api';

export const useGetCountryCodeById = (id: string): string | null => {
  const { data: country, isLoading } = useGetCountryByIdQuery(id);

  return isLoading ? null : country.data.attributes.code;
};

export const useGetBestsellers = (books: Array<string>): Array<BestSeller> => {
  const { data: booksData, isLoading: isLoadingBooks } =
    useGetBooksDataQuery('');
  const { data: authorsData, isLoading: isLoadingAuthors } =
    useGetAuthorsDataQuery('');

  if (isLoadingBooks || isLoadingAuthors) {
    return [];
  }

  const bestsellers = booksData.data
    .filter((book: Book) => {
      return books?.includes(book.id);
    })
    .sort((prev: Book, next: Book) => {
      return next.attributes.copiesSold - prev.attributes.copiesSold;
    })
    .splice(0, 2)
    .map(
      ({
        attributes: { name },
        relationships: {
          author: {
            data: { id: authorId },
          },
        },
      }: Book): BestSeller => {
        const author: Author = authorsData.data.find(
          ({ id }: DataEntry) => id === authorId
        );

        return {
          name,
          author: author.attributes.fullName,
        };
      }
    );

  return bestsellers;
};
