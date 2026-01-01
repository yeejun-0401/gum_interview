import { Specialist } from '../types/specialist';


const MOCK_SPECIALISTS: Specialist[] = [
  { id: '1', firstName: 'Kan', lastName: 'Chung', photo: require('../../assets/bg.png') },
  { id: '2', firstName: 'Alisa', lastName: 'Mak', photo: '' },
  { id: '3', firstName: 'Justin', lastName: 'Liu', photo: '' },
];

let shouldFail = true; // Toggle to simulate error on first call

export const fetchSpecialists = async (): Promise<Specialist[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        console.log('Simulating API Error...');
        shouldFail = false; // Next time will succeed
        reject(new Error('Network Error'));
      } else {
        console.log('API Success!');
        resolve(MOCK_SPECIALISTS);
      }
    }, 1000);
  });
};