import { z } from "zod";

export const phoneSchema = z.object({
  phone: z.string().min(10, "Введите номер полностью"),
});

export const nameSchema = z.object({
  name: z.string().min(2).max(30),
});

export const addressSchema = z.object({
  address: z.string().min(2),
});

export const tripleSchema = z.object({
  name: z
    .string()
    .min(2, "Минимум 2 символа")
    .max(30, "Максимум 30 символов")
    .regex(/^[A-Za-zА-Яа-яЁё\s]+$/, "Только буквы"),

  address: z.string().min(2, "Минимум 2 символа"),

  phone: z.string().min(10, "Введите номер полностью"),
});

export const nameAndPhoneSchema = z.object({
  name: z
    .string()
    .min(2, "Минимум 2 символа")
    .max(30)
    .regex(/^[A-Za-zА-Яа-яЁё\s-]+$/, "Только буквы"),
  phone: z.string().min(10, "Введите номер полностью"),
});

export const emailSchema = z.object({
  email: z.string().min(1, "Введите email").email("Некорректный email"),
});
