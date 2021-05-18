
import { Document } from 'mongoose';

export interface IUser extends Document{
    firstName: string;
    lastName?: string;
    username: string;
    passwordHash: string;
    role: Role;
    level: number;
    friends: Array<string>;
    creditCards?: Map<string, string>;
    isAdmin: Boolean;
    email: string;
    salt: number;
    profile: string;
    resetPasswordLink: string;
}

export enum Role {
    'user',
    'creator',
    'blogger'
}