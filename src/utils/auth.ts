import jwt, { Secret } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


export const hash = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  const newPassword = await bcrypt.hash(password, salt);
  return newPassword;
}

export const compare = async (hash: string, pass: string): Promise<boolean> => {
  return await bcrypt.compare(hash, pass);
}

export const generateToken = (id: number) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as Secret, {
    expiresIn: process.env.JWT_EXPIRE
  })
}
