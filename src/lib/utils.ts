import { clsx, type ClassValue } from "clsx"
import { json } from "stream/consumers"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertToPalinText<T>(value:T){
return JSON.parse(JSON.stringify(value));
} 

export function formatNumberWithDecimal(num: number): string {
  const [int, decimal] = num.toString().split('.');
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`
}