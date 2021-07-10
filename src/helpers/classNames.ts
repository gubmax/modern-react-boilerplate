export function cn(...args: Array<string | 0 | null | undefined | false>): string {
  return args.filter(Boolean).join(' ')
}
