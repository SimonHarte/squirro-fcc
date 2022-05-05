import { type ReactElement, type FC } from 'react';
import { useGetBestsellers } from '../../app/hooks';
import Rating from '../Rating';
import Bestseller from '../Bestseller';
import StoreMeta from '../StoreMeta';
import CountryFlag from '../CountryFlag';
import type { BookStoreProps } from './BookStore.types';
import styles from './BookStore.module.scss';

const BookStore: FC<BookStoreProps> = ({
  id,
  name,
  storeImage,
  establishmentDate,
  website,
  rating,
  books,
  countryId,
}: BookStoreProps): ReactElement => {
  const bestsellers = useGetBestsellers(books);

  return (
    <div className={styles.wrapper}>
      <div className={styles.detailsWrapper}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageFrame}>
            <img className={styles.image} src={storeImage} alt={name} />
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.header}>
            <h2 className={styles.title}>{name}</h2>
            <Rating storeName={name} currentRating={rating} />
          </div>
          <Bestseller books={bestsellers} />
        </div>
      </div>
      <div className={styles.footer}>
        <StoreMeta date={establishmentDate} website={website} />
        <CountryFlag id={countryId} />
      </div>
    </div>
  );
};

export default BookStore;
