export interface AstronomicalObject {
  astronomicalObjectType: string;
  location: null | {
    uid: string;
    name: string;
  };
  name: string;
  uid: string;
}

export interface Page {
  firstPage: boolean;
  lastPage: boolean;
  numberOfElements: number;
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}

export interface ApiData {
  astronomicalObjects: AstronomicalObject[];
  page: Page;
  sort: {
    clauses: [];
  };
}
