import { Specialist } from '../types/specialist';


const MOCK_SPECIALISTS: Specialist[] = [
  { id: '1', firstName: 'Kan', lastName: 'Chung', photo: 'backBottom' , sort: 1},
  { id: '2', firstName: 'Alisa', lastName: 'Mak', photo: '', sort: 2 },
  { id: '3', firstName: 'Justin', lastName: 'Liu', photo: '', sort: 3 },
];

let shouldFail = true; // 第一次失敗

export const fetchSpecialists = async (): Promise<Specialist[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        console.log('Simulating API Error...');
        shouldFail = false; // 設定下次請求成功
        reject(new Error('Network Error'));
      } else {
        console.log('API Success!');
        resolve(MOCK_SPECIALISTS);
      }
    }, 1000);
  });
};