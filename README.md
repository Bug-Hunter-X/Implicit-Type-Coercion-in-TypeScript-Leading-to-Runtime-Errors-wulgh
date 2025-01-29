# Implicit Type Coercion Bug in TypeScript

This repository demonstrates a common issue in TypeScript where implicit type coercion can lead to runtime errors.  The `greet` function expects a string argument but accepts a number without a compile-time error, potentially causing unexpected behavior at runtime.

The `bug.ts` file contains the buggy code.  The `bugSolution.ts` demonstrates how to address this issue by implementing stricter type checking.

## How to Reproduce

1. Clone this repository.
2. Compile the `bug.ts` file using the TypeScript compiler: `tsc bug.ts`.
3. Run the compiled JavaScript code. You will see that the number is implicitly coerced to a string, resulting in a slightly unusual output. 
4. Next, compile and run `bugSolution.ts`. You will observe that a compile-time error is thrown, preventing the runtime issue.