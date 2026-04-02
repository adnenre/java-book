---
title: Native methods (native keyword)
sidebar:
  order: 9
  label: 6.7 Native methods (native keyword)
---

A **native method** is a Java method whose implementation is written in another language, typically C or C++. The `native` keyword indicates this.

**Why use native methods?**

- Access platform‑specific features (OS, hardware).
- Reuse existing legacy code.
- Performance‑critical operations (e.g., cryptography, graphics).

**Syntax**:

```java
public native returnType methodName(parameters);
```

**Example**:

```java
public class NativeDemo {
    static {
        System.loadLibrary("nativeLib"); // load shared library
    }

    public native void sayHello();
}
```

**Steps to create a native method**:

1. Write Java code with `native` method declaration.
2. Compile Java code: `javac NativeDemo.java`
3. Generate C/C++ header: `javac -h . NativeDemo.java`
4. Implement the native method in C/C++ using the generated header.
5. Compile the native code into a shared library (`.dll` on Windows, `.so` on Linux, `.dylib` on macOS).
6. Load the library using `System.loadLibrary()`.

**C implementation example** (simplified):

```c
#include <jni.h>
#include "NativeDemo.h"

JNIEXPORT void JNICALL Java_NativeDemo_sayHello(JNIEnv *env, jobject obj) {
    printf("Hello from C!\n");
}
```

**Important notes**:

- Native methods bypass Java's security and memory management.
- They are not portable; each platform needs its own library.
- Java Native Interface (JNI) is the standard API for native methods.
- Use sparingly; prefer pure Java when possible.
