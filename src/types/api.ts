import { ApolloError } from '@apollo/client';

export interface IQueryResponse<T> {
  loading: boolean;
  error: ApolloError | undefined;
  data: T;
}

export interface IStarship {
  id: string;
  name: string;
  costInCredits: number | null;
  length: number | null;
  hyperdriveRating: number | null;
  starshipClass: string;
  created: string;
}

export interface IStarships {
  allStarships: {
    starships: IStarship[];
  };
}
