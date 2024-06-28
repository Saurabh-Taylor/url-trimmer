import zod from "zod";

export const loginSchema = zod.object({
    email: zod.string().email("email is required"),
    password: zod.string().min(6 , "password should be more than 6 characters"),
})

const signupSchema = zod.object({
    email: zod.string().email("email is required"),
    password: zod.string().min(6 , "password should be more than 6 characters"),
})

