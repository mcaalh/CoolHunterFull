import { Document } from 'mongoose';

export interface IProject extends Document{
    name: string;
    description: string;
    image: string;
    images: string[];
    categories: string[];
    date: Date;
    coolRating: number;
    location: string;
    donationHistory: string[];
    raised: number;
    createdAt: Date;
    createdBy: string;
}