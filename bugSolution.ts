function greet(person: string): string {
  if (typeof person !== 'string') {
    throw new Error('Person must be a string');
  }
  return `Hello, ${person}!`;
}

try {
  greet(123); 
} catch (error) {
  console.error(error); // This will throw an error at compile time.
}

greet("Alice"); // This works correctly.