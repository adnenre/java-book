---
title: The Object class and its methods (toString, equals, hashCode, clone, finalize)
sidebar:
  order: 2
  label: 7.2 The Object class and its methods
---

Every class in Java implicitly extends `java.lang.Object`. This means all objects inherit the methods of `Object`.

**Commonly overridden methods**:

## toString()

Returns a string representation of the object. Default: `ClassName@hashcode`.

```java
@Override
public String toString() {
    return "Person{name='" + name + "', age=" + age + "}";
}
```

## equals(Object obj)

Compares objects for equality. Default: reference equality (`==`).

```java
@Override
public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    Person p = (Person) obj;
    return age == p.age && name.equals(p.name);
}
```

## hashCode()

Returns an integer hash code. Must be consistent with `equals`: if `a.equals(b)` then `a.hashCode() == b.hashCode()`.

```java
@Override
public int hashCode() {
    return Objects.hash(name, age);
}
```

## clone()

Creates and returns a copy of the object. Requires implementing `Cloneable` interface.

```java
@Override
protected Object clone() throws CloneNotSupportedException {
    return super.clone(); // shallow copy
}
```

## finalize()

Called before garbage collection (deprecated since Java 9). Do not use.

**Best practices**:

- Always override `toString()` for meaningful object representation.
- Override `equals()` and `hashCode()` together (e.g., for use in collections like `HashMap`).
- Prefer `Objects.equals()` and `Objects.hash()` to avoid null checks.
