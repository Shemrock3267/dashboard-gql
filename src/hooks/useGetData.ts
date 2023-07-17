import { useQuery, gql } from '@apollo/client';

import { IQueryResponse, IStarships } from '../types/api';

export const useGetData = (query: string): IQueryResponse<IStarships> => {
  const { loading, error, data } = useQuery(gql(query));

  return { loading, error, data };
};
