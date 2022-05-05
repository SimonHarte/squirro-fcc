import { type DataEntry } from './Base';

export type CountryAttributes = {
  code: string;
};

export type Country = DataEntry & {
  attributes: CountryAttributes;
};

export type CountriesData = {
  data: Array<Country>;
};
