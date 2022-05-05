import { type ReactElement, type FC } from 'react';
import type { DataEntry } from '../../types/Base';
import type { Store, StoreRelationships } from '../../types/Stores';
import BookStore from '../BookStore';
import type { OverviewProps } from './Overview.types';
import styles from './Overview.module.scss';

export const getRelationShipData = (
  relationships: StoreRelationships
): {
  books: Array<string>;
  countryId: string;
} => {
  const books = relationships?.books?.data?.reduce(
    (all: Array<string>, entry: DataEntry) => {
      all.push(entry.id);
      return all;
    },
    []
  );
  const countryId = relationships.countries.data.id;

  return { books: books || [], countryId };
};

const Overview: FC<OverviewProps> = ({
  stores,
}: OverviewProps): ReactElement => {
  return (
    <div className={styles.wrapper}>
      {stores.map(({ id, attributes, relationships }: Store): ReactElement => {
        const { books, countryId } = getRelationShipData(relationships);

        return (
          <div key={id} className={styles.store}>
            <BookStore
              {...attributes}
              id={id}
              books={books}
              countryId={countryId || ''}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Overview;
