const yearRegex = /^\d{4}-\d{2}-\d{2}$/;

export default function(value: string): boolean {
  return yearRegex.test(value);
}
