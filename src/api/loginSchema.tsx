import {z} from "zod";
export const formSchema=z.object({
    

  username: z
    .string()
    .min(1, "الاسم مطلوب")
    .regex(/^[A-Za-z\u0600-\u06FF\s]+$/, "Name must be letters"),
      password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});
