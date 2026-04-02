---
title: Recursion vs iteration
sidebar:
  order: 7
  label: 6.5.2 Recursion vs iteration
---

Both recursion and iteration can solve repetitive problems. Choose based on clarity and performance constraints.

| Aspect          | Recursion                                                            | Iteration                           |
| --------------- | -------------------------------------------------------------------- | ----------------------------------- |
| **Memory**      | Uses stack (each call adds a frame)                                  | Uses fixed memory (loop variables)  |
| **Performance** | Overhead of function calls                                           | Generally faster (no call overhead) |
| **Risk**        | Stack overflow for deep recursion                                    | No stack overflow                   |
| **Readability** | Elegant for tree‑like problems (e.g., file system, divide & conquer) | Better for simple, linear problems  |
| **Code size**   | Often shorter                                                        | Usually longer                      |

**Example – factorial (recursion vs iteration)**:

```java
// Recursive
int factRec(int n) {
    if (n <= 1) return 1;
    return n * factRec(n - 1);
}

// Iterative
int factIter(int n) {
    int result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
```

**When to use recursion**:

- Tree/graph traversal
- Backtracking (e.g., maze solving, N‑Queens)
- Divide and conquer (merge sort, quick sort)
- Problems with recursive definition (Fibonacci, factorial)

**When to use iteration**:

- Simple loops over arrays/collections
- Performance‑critical code
- When depth is large or unknown

**Hybrid approach**: Use recursion for clarity, but convert to iteration with explicit stack if needed for performance.
