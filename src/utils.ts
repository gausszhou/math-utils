export function clamp(num:number,min:number,max:number):number{
  if(min > max) throw new Error("min must be less than max")
  if(num < min) return min
  if(num > max) return max
  return num
}