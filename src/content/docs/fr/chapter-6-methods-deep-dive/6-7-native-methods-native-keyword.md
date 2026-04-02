---
title: Méthodes natives (mot‑clé native)
sidebar:
  order: 9
  label: 6.7 Méthodes natives (mot‑clé native)
---

Une **méthode native** est une méthode Java dont l’implémentation est écrite dans un autre langage, généralement C ou C++. Le mot‑clé `native` l’indique.

**Pourquoi utiliser des méthodes natives ?**

- Accéder à des fonctionnalités spécifiques à la plateforme (OS, matériel).
- Réutiliser du code existant hérité.
- Opérations critiques pour les performances (ex. cryptographie, graphismes).

**Syntaxe** :

```java
public native typeRetour nomMethode(parametres);
```

**Exemple** :

```java
public class DemoNative {
    static {
        System.loadLibrary("libNative"); // charge la bibliothèque partagée
    }

    public native void direBonjour();
}
```

**Étapes pour créer une méthode native** :

1. Écrivez le code Java avec la déclaration `native`.
2. Compilez le code Java : `javac DemoNative.java`
3. Générez l’en‑tête C/C++ : `javac -h . DemoNative.java`
4. Implémentez la méthode native en C/C++ en utilisant l’en‑tête généré.
5. Compilez le code natif en bibliothèque partagée (`.dll` sur Windows, `.so` sur Linux, `.dylib` sur macOS).
6. Chargez la bibliothèque avec `System.loadLibrary()`.

**Exemple d’implémentation C** (simplifié) :

```c
#include <jni.h>
#include "DemoNative.h"

JNIEXPORT void JNICALL Java_DemoNative_direBonjour(JNIEnv *env, jobject obj) {
    printf("Bonjour depuis C !\n");
}
```

**Remarques importantes** :

- Les méthodes natives contournent la sécurité et la gestion de mémoire de Java.
- Elles ne sont pas portables ; chaque plateforme a besoin de sa propre bibliothèque.
- Java Native Interface (JNI) est l’API standard pour les méthodes natives.
- Utilisez‑les avec parcimonie ; préférez Java pur quand c’est possible.
