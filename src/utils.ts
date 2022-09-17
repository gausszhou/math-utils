export function clamp( min: number, max: number,num: number,): number {
  if (min > max) throw new Error("min must be less than max");
  if (num < min) return min;
  if (num > max) return max;
  return num;
}

export function smoothstep(v0: number, v1: number, t: number): number {
  const x = Math.max(0.0, Math.min(1.0, (t - v0) / (v1 - v0)));
  const y = x * x * (3 - 2 * x);
  return y;
}

export function lerp(v0: number, v1: number, t: number) {
  const linear = v0 * (1 - t) + v1 * t;
  return linear;
}
