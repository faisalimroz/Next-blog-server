import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'; // Assuming you're using Next.js

export const decodeToken = () => {
  const token = cookies().get('user-token');
  
  if (token) {
    try {
      const decoded = jwt.decode(token.value); // Decode without verifying
      return decoded;
    } catch (error) {
      throw new Error('Error decoding token');
    }
  }
  return null
};



