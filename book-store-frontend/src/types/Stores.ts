import { type DataEntry } from './Base';

export type StoreAttributes = {
  name: string;
  website: string;
  rating: number;
  storeImage: string;
  establishmentDate: string;
};

export type StoreRelationships = {
  countries: {
    data: DataEntry;
  };
  books?: {
    data: Array<DataEntry>;
  };
};

export type Store = DataEntry & {
  attributes: StoreAttributes;
  relationships: StoreRelationships;
};

export type StoresData = {
  data: Array<Store>;
};
