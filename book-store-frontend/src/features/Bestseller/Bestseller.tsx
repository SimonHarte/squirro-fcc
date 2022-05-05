import { type ReactElement, type FC } from 'react';
import classNames from 'classnames';
import type { BestSeller } from '../../types/Books';
import type { BestsellerProps } from './Bestseller.types';
import styles from './Bestseller.module.scss';

const Bestseller: FC<BestsellerProps> = ({
  books,
}: BestsellerProps): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <caption className={styles.caption}>Best-selling books</caption>
        <tbody>
          {books.length > 0 ? (
            books.map(({ name, author }: BestSeller) => (
              <tr key={name} className={styles.row}>
                <td className={classNames(styles.cell, styles.book)}>{name}</td>
                <td className={classNames(styles.cell, styles.author)}>
                  {author}
                </td>
              </tr>
            ))
          ) : (
            <tr className={styles.row}>
              <td className={styles.cell}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Bestseller;
