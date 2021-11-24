export function invariant<T>(value: unknown, validator?: (v: unknown) => boolean): value is T {
  return validator?.(value) ?? !!value;
}
