---
title: Floating‑point types (float, double)
sidebar:
  order: 4
  label: 2.2.2 Floating‑point types (float, double)
---

Java provides two types for numbers with fractional parts.

| Type     | Size    | Precision              | Default |
| -------- | ------- | ---------------------- | ------- |
| `float`  | 4 bytes | 6‑7 significant digits | `0.0f`  |
| `double` | 8 bytes | 15 significant digits  | `0.0d`  |

**float** literals must end with `f` or `F`:

```java
float pi = 3.14159f;
```

**double** is the default for decimal literals:

```java
double e = 2.718281828459045;
```

You can also use scientific notation:

```java
double avogadro = 6.022e23;   // 6.022 × 10²³
float planck = 6.626e-34f;    // 6.626 × 10⁻³⁴
```

**Special values**:

- `Float.POSITIVE_INFINITY`, `Double.NEGATIVE_INFINITY`
- `Float.NaN`, `Double.NaN` (Not‑a‑Number)

**Be careful with floating‑point comparisons**:

```java
double result = 0.1 + 0.2;
System.out.println(result == 0.3); // false!
```

Due to binary representation, use a tolerance for equality:

```java
double epsilon = 1e-10;
if (Math.abs(result - 0.3) < epsilon) {
    System.out.println("Approximately equal");
}
```

**When to use**:

- `float` – memory‑sensitive applications (e.g., 3D graphics, arrays with millions of elements)
- `double` – default for most calculations (better precision)
