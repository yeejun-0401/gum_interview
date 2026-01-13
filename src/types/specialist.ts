import { ImageSourcePropType } from 'react-native';

export interface Specialist {
  id: string;
  firstName: string;
  lastName: string;
  photo: ImageSourcePropType;
}