import { MockData, CompanyData } from '../types/utils';
import { companyNames } from '../constants/helpers';

const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 3001) + 1000;
};

export const generateAreaChartData = (amount: number): MockData[] => {
  const mockData: MockData[] = [];

  for (let i = 0; i < amount; i++) {
    const obj: MockData = ['a', 'b', 'c', 'd', 'e'].reduce(
      (acc: MockData, field: string) => {
        acc[field] = getRandomNumber();
        return acc;
      },
      {} as MockData
    );

    mockData.push(obj);
  }

  return mockData;
};

export const generateCompanyData = (amount: number): CompanyData[] => {
  const companyData: CompanyData[] = [];

  while (companyData.length < amount) {
    const randomCompanyIndex = Math.floor(Math.random() * companyNames.length);
    const randomValue = Math.floor(Math.random() * 901) + 100;
    const companyName = companyNames[randomCompanyIndex];

    // Check for duplicates
    const nameExists = companyData.some((data) => data.name === companyName);

    if (!nameExists) {
      const data: CompanyData = {
        name: companyName,
        value: randomValue,
      };

      companyData.push(data);
    }
  }

  return companyData;
};

export const generateRandomNumber = (min = 100, max = 500): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
