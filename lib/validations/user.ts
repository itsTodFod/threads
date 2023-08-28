import * as z from 'zod';

export const UserValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3, {message: "Name should be at least 3 characters long"}).max(30, {message: "Name cannot be longer than 30 characters"}),
    username: z.string().min(3, {message: "Username should be at least 3 characters long"}).max(30, {message: "Username cannot be longer than 30 characters"}),
    bio: z.string().min(3, {message: "Bio should be at least 3 characters long"}).max(1000, {message: "Bio cannot be longer than 1000 characters"}),
})