import { type ReactElement, type FC } from 'react';
import formatDate from '../../libs/formatDate';
import type { StoreMetaProps } from './StoreMeta.types';
import styles from './StoreMeta.module.scss';

const StoreMeta: FC<StoreMetaProps> = ({
  date,
  website,
}: StoreMetaProps): ReactElement => {
  const displayDate = formatDate(date);

  return (
    <div>
      <time dateTime={date}>{displayDate}</time>
      <span className={styles.divider}>-</span>
      <a className={styles.link} href={website}>
        {website}
      </a>
    </div>
  );
};

export default StoreMeta;
