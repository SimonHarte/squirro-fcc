import { type ReactElement, type FC } from 'react';
import endpoints from '../../config/endpoints.json';
import { useGetCountryCodeById } from '../../app/hooks';
import type { CountryFlagProps } from './CountryFlag.types';
import styles from './CountryFlag.module.scss';

const CountryFlag: FC<CountryFlagProps> = ({ id }): ReactElement | null => {
  const code = useGetCountryCodeById(id);

  return code ? (
    <img
      className={styles.flag}
      src={`${endpoints.countryFlags.url}${code}`}
      alt={code}
    />
  ) : null;
};

export default CountryFlag;
