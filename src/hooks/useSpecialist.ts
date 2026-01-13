import { useQuery } from '@tanstack/react-query';
import { fetchSpecialists } from '../services/api';

export const useSpecialist = () => {
  return useQuery({
    queryKey: ['specialists'],
    queryFn: fetchSpecialists,
    retry: false, // Disable automatic retries
  });
};