import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

export const stateFulSetUser = () => {
  const token =Cookies.get('user-token');
  
  if (token) {
    try {
      const decoded = jwt.decode(token); // Decode without verifying
      return decoded;
    } catch (error) {
      throw new Error('Error decoding token');
    }
  }
  return null
};
