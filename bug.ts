function greet(person: string): string {
  return `Hello, ${person}!`;
}

greet(123); // This will compile without error, but could cause runtime issues.