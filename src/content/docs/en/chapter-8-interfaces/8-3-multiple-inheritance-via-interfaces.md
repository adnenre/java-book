---
title: Multiple inheritance via interfaces
sidebar:
  order: 3
  label: 8.3 Multiple inheritance via interfaces
---

Java does not support multiple inheritance of classes (a class can extend only one superclass), but it supports **multiple inheritance of type** through interfaces. A class can implement any number of interfaces.

**Benefits**:

- A class can exhibit behaviors from multiple sources.
- Avoids the diamond problem of multiple class inheritance (ambiguous method resolution) because interfaces have no state and method conflicts must be resolved by the implementing class.

**Example**:

```java
interface MusicPlayer {
    void play();
    void stop();
}

interface VideoPlayer {
    void play();
    void display();
}

class SmartDevice implements MusicPlayer, VideoPlayer {
    // Must implement all abstract methods
    @Override
    public void play() {
        System.out.println("Playing media");
    }

    @Override
    public void stop() {
        System.out.println("Stopping music");
    }

    @Override
    public void display() {
        System.out.println("Displaying video");
    }
}
```

**Handling conflicting default methods** (Java 8+):
If two interfaces provide default methods with the same signature, the implementing class must override the method (or use `super` to choose).

```java
interface A {
    default void show() { System.out.println("A"); }
}
interface B {
    default void show() { System.out.println("B"); }
}
class C implements A, B {
    @Override
    public void show() {
        A.super.show(); // choose A's default
        // or B.super.show();
        // or provide new implementation
    }
}
```
