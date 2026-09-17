// types

type Str = string;
type Num = number;

type currency = { code: Str; name: Str; symbol: Str };

type language = {
  name: Str;
  iso639_1: Str;
  iso639_2: Str;
  nativeName: Str;
};

interface Country {
  alpha2Code: Str;
  alpha3Code: Str;
  altSpellings: Str[];
  area: Num | undefined;
  borders: Str[] | undefined;
  callingCodes: Str[];
  capital: Str | undefined;
  cioc: Str;
  currencies: currency[] | undefined;
  demonym: Str;
  flag: Str;
  flags: {
    png: Str;
    svg: Str;
  };
  independent: boolean;
  languages: language[];

  latlng: Num[];
  maps: {
    googleMaps: Str;
    openStreetMaps: Str;
  };

  name: Str;
  nativeName: Str;
  numericCode: Str;
  population: Num;
  populationDensity: Num;
  region: Str;
  regionalBlocs: {
    acronym: Str;
    name: Str;
  };
  subregion: Str;
  timezones: Str[];
  topLevelDomain: Str[];
  translations: {
    br: Str;
    de: Str;
    es: Str;
    fa: Str;
    fr: Str;
    hr: Str;
    hu: Str;
    it: Str;
    ja: Str;
    nl: Str;
    pt: Str;
  };
}

type Filter = {
  query: Str;
  sort: Str;
  regions: Str[];
  status: Str;
};

type Details = { id: number; title: string; value: string };

type Region = {
  id: Num;
  region: Str;
};

type Sort = {
  id: Num;
  sort: Str;
};

export { type Filter, type Country, type Details };

// data

const regions: Region[] = [
  {
    id: 1,
    region: "Americas",
  },
  {
    id: 2,
    region: "Antarctic",
  },
  {
    id: 3,
    region: "Africa",
  },
  {
    id: 4,
    region: "Asia",
  },
  {
    id: 5,
    region: "Europe",
  },
  {
    id: 6,
    region: "Oceania",
  },
];

const sort: Sort[] = [
  {
    id: 1,
    sort: "population",
  },
  {
    id: 2,
    sort: "area",
  },
];

export { regions, sort };
