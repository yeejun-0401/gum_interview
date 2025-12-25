import { Specialist } from '../types/specialist';


const MOCK_SPECIALISTS: Specialist[] = [
  { id: '1', firstName: 'Kan', lastName: 'Chung', photo: '' , sort: 1},
  { id: '2', firstName: 'Alisa', lastName: 'Mak', photo: '', sort: 2 },
  { id: '3', firstName: 'Justin', lastName: 'Liu', photo: '', sort: 3 },
];

// loading
export const fetchSpecialists = async (): Promise<Specialist[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_SPECIALISTS);
    }, 1000);
  });
};