// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeGalaxy from "starlight-theme-galaxy";

// https://astro.build/config
export default defineConfig({
  site: "https://adnenre.github.io/Java-book",
  base: ".",

  integrations: [
    starlight({
      plugins: [starlightThemeGalaxy()],
      title: { en: "Java Book", fr: "Java Livre" },
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/adnenre/Java-book/" }],
      defaultLocale: "en",
      locales: {
        // English docs in `src/content/docs/en/`
        en: {
          label: "English",
          lang: "en",
        },
        fr: {
          label: "Français",
          lang: "fr",
        },
      },
      sidebar: [
        {
          label: "1 - Introduction toJava",
          translations: {
            fr: "1 - Introduction àJava",
          },
          collapsed: true,
          items: [
            {
              label: "1.1 History and evolution ofJava",
              translations: {
                fr: "1.1 Historique et évolution deJava",
              },
              slug: "chapter-1-introduction-to-java/1-1-history-and-evolution-of-java",
            },
            {
              label: "1.2 Java philosophy (write once, run anywhere)",
              translations: {
                fr: "1.2 PhilosophieJava (write once, run anywhere)",
              },
              slug: "chapter-1-introduction-to-java/1-2-java-philosophy-write-once-run-anywhere",
            },
            {
              label: "1.3 InstallingJava (JDK, JRE, JVM)",
              translations: {
                fr: "1.3 InstallerJava (JDK, JRE, JVM)",
              },
              slug: "chapter-1-introduction-to-java/1-3-installing-java-jdk-jre-jvm",
            },
            {
              label: "1.4 Setting up your development environment (intellij, eclipse, vs code)",
              translations: {
                fr: "1.4 Configurer votre environnement de développement (intellij, eclipse, vs code)",
              },
              slug: "chapter-1-introduction-to-java/1-4-setting-up-your-development-environment-intellij-eclipse-vs-code",
            },
            {
              label: "1.5 Your firstJava program",
              translations: {
                fr: "1.5 Votre premier programmeJava",
              },
              slug: "chapter-1-introduction-to-java/1-5-your-first-java-program",
            },
            {
              label: "1.6 Compiling and runningJava programs (javac,Java)",
              translations: {
                fr: "1.6 Compiler et exécuter des programmesJava (javac,Java)",
              },
              slug: "chapter-1-introduction-to-java/1-6-compiling-and-running-java-programs-javac-java",
            },
            {
              label: "1.7 Understanding theJava platform (JVM, bytecode)",
              translations: {
                fr: "1.7 Comprendre la plateformeJava (JVM, bytecode)",
              },
              slug: "chapter-1-introduction-to-java/1-7-understanding-the-java-platform-jvm-bytecode",
            },
            {
              label: "1.8 Java editions (SE, EE, ME)",
              translations: {
                fr: "1.8 éDitions deJava (SE, EE, ME)",
              },
              slug: "chapter-1-introduction-to-java/1-8-java-editions-se-ee-me",
            },
            {
              label: "1.9 Java version history and features",
              translations: {
                fr: "1.9 Historique et fonctionnalités par version deJava",
              },
              slug: "chapter-1-introduction-to-java/1-9-java-version-history-and-features",
            },
          ],
        },
        {
          label: "2 - Variables and primitive data types",
          translations: {
            fr: "2 - Variables et types de données primitifs",
          },
          collapsed: true,
          items: [
            {
              label: "2.1 Variables and identifiers",
              translations: {
                fr: "2.1 Variables et identifiants",
              },
              slug: "chapter-2-variables-and-primitive-data-types/2-1-variables-and-identifiers",
            },
            {
              label: "2.2 Primitive data types",
              translations: {
                fr: "2.2 Types primitifs",
              },
              slug: "chapter-2-variables-and-primitive-data-types/2-2-primitive-data-types",
            },
            {
              label: "2.2.1 Integer types (byte, short, int, long)",
              translations: {
                fr: "2.2.1 Types entiers (byte, short, int, long)",
              },
              slug: "chapter-2-variables-and-primitive-data-types/2-2-1-integer-types-byte-short-int-long",
            },
            {
              label: "2.2.2 Floating‑point types (float, double)",
              translations: {
                fr: "2.2.2 Types à virgule flottante (float, double)",
              },
              slug: "chapter-2-variables-and-primitive-data-types/2-2-2-floatingpoint-types-float-double",
            },
            {
              label: "2.2.3 Character type (char)",
              translations: {
                fr: "2.2.3 Type caractère (char)",
              },
              slug: "chapter-2-variables-and-primitive-data-types/2-2-3-character-type-char",
            },
            {
              label: "2.2.4 Boolean type (boolean)",
              translations: {
                fr: "2.2.4 Type booléen (boolean)",
              },
              slug: "chapter-2-variables-and-primitive-data-types/2-2-4-boolean-type-boolean",
            },
            {
              label: "2.3 Literals and constants (final)",
              translations: {
                fr: "2.3 Littéraux et constantes (final)",
              },
              slug: "chapter-2-variables-and-primitive-data-types/2-3-literals-and-constants-final",
            },
            {
              label: "2.4 Type conversion and casting",
              translations: {
                fr: "2.4 Conversion de type et casting",
              },
              slug: "chapter-2-variables-and-primitive-data-types/2-4-type-conversion-and-casting",
            },
            {
              label: "2.4.1 Implicit (widening) conversion",
              translations: {
                fr: "2.4.1 Conversion implicite (élargissement)",
              },
              slug: "chapter-2-variables-and-primitive-data-types/2-4-1-implicit-widening-conversion",
            },
            {
              label: "2.4.2 Explicit (narrowing) casting",
              translations: {
                fr: "2.4.2 Conversion explicite (rétrécissement)",
              },
              slug: "chapter-2-variables-and-primitive-data-types/2-4-2-explicit-narrowing-casting",
            },
            {
              label: "2.5 Variable scope and lifetime",
              translations: {
                fr: "2.5 Portée et durée de vie des variables",
              },
              slug: "chapter-2-variables-and-primitive-data-types/2-5-variable-scope-and-lifetime",
            },
            {
              label: "2.6 Default values of primitives",
              translations: {
                fr: "2.6 Valeurs par défaut des primitifs",
              },
              slug: "chapter-2-variables-and-primitive-data-types/2-6-default-values-of-primitives",
            },
            {
              label: "2.7 Wrapper classes (integer, double, boolean, etc.) and autoboxing/unboxing",
              translations: {
                fr: "2.7 Classes wrapper (integer, double, boolean, etc.) et autoboxing/unboxing",
              },
              slug: "chapter-2-variables-and-primitive-data-types/2-7-wrapper-classes-integer-double-boolean-etc-and-autoboxingunboxing",
            },
          ],
        },
        {
          label: "3 - Operators and expressions",
          translations: {
            fr: "3 - Opérateurs et expressions",
          },
          collapsed: true,
          items: [
            {
              label: "3.1 Arithmetic operators",
              translations: {
                fr: "3.1 Opérateurs arithmétiques",
              },
              slug: "chapter-3-operators-and-expressions/3-1-arithmetic-operators",
            },
            {
              label: "3.2 Assignment operators",
              translations: {
                fr: "3.2 Opérateurs d’affectation",
              },
              slug: "chapter-3-operators-and-expressions/3-2-assignment-operators",
            },
            {
              label: "3.3 Relational operators",
              translations: {
                fr: "3.3 Opérateurs relationnels",
              },
              slug: "chapter-3-operators-and-expressions/3-3-relational-operators",
            },
            {
              label: "3.4 Equality operators",
              translations: {
                fr: "3.4 Opérateurs d’égalité",
              },
              slug: "chapter-3-operators-and-expressions/3-4-equality-operators",
            },
            {
              label: "3.5 Logical operators",
              translations: {
                fr: "3.5 Opérateurs logiques",
              },
              slug: "chapter-3-operators-and-expressions/3-5-logical-operators",
            },
            {
              label: "3.6 Bitwise operators",
              translations: {
                fr: "3.6 Opérateurs bit à bit",
              },
              slug: "chapter-3-operators-and-expressions/3-6-bitwise-operators",
            },
            {
              label: "3.7 Ternary operator",
              translations: {
                fr: "3.7 Opérateur ternaire",
              },
              slug: "chapter-3-operators-and-expressions/3-7-ternary-operator",
            },
            {
              label: "3.8 Unary operators",
              translations: {
                fr: "3.8 Opérateurs unaires",
              },
              slug: "chapter-3-operators-and-expressions/3-8-unary-operators",
            },
            {
              label: "3.9 Operator precedence and associativity",
              translations: {
                fr: "3.9 Précédence et associativité des opérateurs",
              },
              slug: "chapter-3-operators-and-expressions/3-9-operator-precedence-and-associativity",
            },
            {
              label: "3.10 String concatenation",
              translations: {
                fr: "3.10 Concaténation de chaînes",
              },
              slug: "chapter-3-operators-and-expressions/3-10-string-concatenation",
            },
          ],
        },
        {
          label: "4 - Control flow",
          translations: {
            fr: "4 - Flux de contrôle",
          },
          collapsed: true,
          items: [
            {
              label: "4.1 Conditional statements",
              translations: {
                fr: "4.1 Instructions conditionnelles",
              },
              slug: "chapter-4-control-flow/4-1-conditional-statements",
            },
            {
              label: "4.1.1 If, else if, else",
              translations: {
                fr: "4.1.1 If, else if, else",
              },
              slug: "chapter-4-control-flow/4-1-1-if-else-if-else",
            },
            {
              label: "4.1.2 Nested if",
              translations: {
                fr: "4.1.2 If imbriqué",
              },
              slug: "chapter-4-control-flow/4-1-2-nested-if",
            },
            {
              label: "4.1.3 Switch statement (traditional and enhanced with arrows, yield)",
              translations: {
                fr: "4.1.3 Instruction switch (traditionnelle et améliorée avec flèches, yield)",
              },
              slug: "chapter-4-control-flow/4-1-3-switch-statement-traditional-and-enhanced-with-arrows-yield",
            },
            {
              label: "4.1.4 Ternary operator",
              translations: {
                fr: "4.1.4 Opérateur ternaire",
              },
              slug: "chapter-4-control-flow/4-1-4-ternary-operator",
            },
            {
              label: "4.2 Loops",
              translations: {
                fr: "4.2 Boucles",
              },
              slug: "chapter-4-control-flow/4-2-loops",
            },
            {
              label: "4.2.1 For loop (traditional)",
              translations: {
                fr: "4.2.1 Boucle for (traditionnelle)",
              },
              slug: "chapter-4-control-flow/4-2-1-for-loop-traditional",
            },
            {
              label: "4.2.2 Enhanced for loop (for‑each)",
              translations: {
                fr: "4.2.2 Boucle for améliorée (for‑each)",
              },
              slug: "chapter-4-control-flow/4-2-2-enhanced-for-loop-foreach",
            },
            {
              label: "4.2.3 While loop",
              translations: {
                fr: "4.2.3 Boucle while",
              },
              slug: "chapter-4-control-flow/4-2-3-while-loop",
            },
            {
              label: "4.2.4 Do‑while loop",
              translations: {
                fr: "4.2.4 Boucle do‑while",
              },
              slug: "chapter-4-control-flow/4-2-4-dowhile-loop",
            },
            {
              label: "4.3 Loop control (break, continue, labeled statements)",
              translations: {
                fr: "4.3 Contrôle des boucles (break, continue, instructions étiquetées)",
              },
              slug: "chapter-4-control-flow/4-3-loop-control-break-continue-labeled-statements",
            },
            {
              label: "4.4 The break and continue with labels",
              translations: {
                fr: "4.4 Break et continue avec étiquettes",
              },
              slug: "chapter-4-control-flow/4-4-the-break-and-continue-with-labels",
            },
          ],
        },
        {
          label: "5 - Classes and objects",
          translations: {
            fr: "5 - Classes et objets",
          },
          collapsed: true,
          items: [
            {
              label: "5.1 Defining classes (class)",
              translations: {
                fr: "5.1 Définition de classes (class)",
              },
              slug: "chapter-5-classes-and-objects/5-1-defining-classes-class",
            },
            {
              label: "5.2 Fields (instance variables)",
              translations: {
                fr: "5.2 Champs (variables d’instance)",
              },
              slug: "chapter-5-classes-and-objects/5-2-fields-instance-variables",
            },
            {
              label: "5.3 Methods (instance methods)",
              translations: {
                fr: "5.3 Méthodes (méthodes d’instance)",
              },
              slug: "chapter-5-classes-and-objects/5-3-methods-instance-methods",
            },
            {
              label: "5.4 Constructors",
              translations: {
                fr: "5.4 Constructeurs",
              },
              slug: "chapter-5-classes-and-objects/5-4-constructors",
            },
            {
              label: "5.4.1 Default constructor",
              translations: {
                fr: "5.4.1 Constructeur par défaut",
              },
              slug: "chapter-5-classes-and-objects/5-4-1-default-constructor",
            },
            {
              label: "5.4.2 Parameterized constructors",
              translations: {
                fr: "5.4.2 Constructeurs paramétrés",
              },
              slug: "chapter-5-classes-and-objects/5-4-2-parameterized-constructors",
            },
            {
              label: "5.4.3 Constructor overloading",
              translations: {
                fr: "5.4.3 Surcharge de constructeurs",
              },
              slug: "chapter-5-classes-and-objects/5-4-3-constructor-overloading",
            },
            {
              label: "5.4.4 Copy constructors",
              translations: {
                fr: "5.4.4 Constructeurs de copie",
              },
              slug: "chapter-5-classes-and-objects/5-4-4-copy-constructors",
            },
            {
              label: "5.5 The this keyword",
              translations: {
                fr: "5.5 Le mot‑clé this",
              },
              slug: "chapter-5-classes-and-objects/5-5-the-this-keyword",
            },
            {
              label: "5.6 The new keyword and object creation",
              translations: {
                fr: "5.6 Le mot‑clé new et la création d’objets",
              },
              slug: "chapter-5-classes-and-objects/5-6-the-new-keyword-and-object-creation",
            },
            {
              label: "5.7 Access modifiers (public, protected, default, private)",
              translations: {
                fr: "5.7 Modificateurs d’accès (public, protected, default, private)",
              },
              slug: "chapter-5-classes-and-objects/5-7-access-modifiers-public-protected-default-private",
            },
            {
              label: "5.8 Static members (static fields, static methods, static blocks)",
              translations: {
                fr: "5.8 Membres statiques (champs statiques, méthodes statiques, blocs statiques)",
              },
              slug: "chapter-5-classes-and-objects/5-8-static-members-static-fields-static-methods-static-blocks",
            },
            {
              label: "5.9 Final keyword (final variables, methods, classes)",
              translations: {
                fr: "5.9 Mot‑clé final (variables finales, méthodes, classes)",
              },
              slug: "chapter-5-classes-and-objects/5-9-final-keyword-final-variables-methods-classes",
            },
            {
              label: "5.10 Garbage collection and finalize() method",
              translations: {
                fr: "5.10 Ramasse‑miettes (garbage collector) et méthode finalize()",
              },
              slug: "chapter-5-classes-and-objects/5-10-garbage-collection-and-finalize-method",
            },
            {
              label: "5.11 Object lifecycle",
              translations: {
                fr: "5.11 Cycle de vie d’un objet",
              },
              slug: "chapter-5-classes-and-objects/5-11-object-lifecycle",
            },
          ],
        },
        {
          label: "6 - Methods deep dive",
          translations: {
            fr: "6 - Méthodes (approfondissement)",
          },
          collapsed: true,
          items: [
            {
              label: "6.1 Method signature and overloading",
              translations: {
                fr: "6.1 Signature de méthode et surcharge",
              },
              slug: "chapter-6-methods-deep-dive/6-1-method-signature-and-overloading",
            },
            {
              label: "6.2 Passing parameters (pass‑by‑value)",
              translations: {
                fr: "6.2 Passage de paramètres (passage par valeur)",
              },
              slug: "chapter-6-methods-deep-dive/6-2-passing-parameters-passbyvalue",
            },
            {
              label: "6.3 Varargs (variable‑length arguments)",
              translations: {
                fr: "6.3 Varargs (arguments de longueur variable)",
              },
              slug: "chapter-6-methods-deep-dive/6-3-varargs-variablelength-arguments",
            },
            {
              label: "6.4 Returning values",
              translations: {
                fr: "6.4 Retour de valeurs",
              },
              slug: "chapter-6-methods-deep-dive/6-4-returning-values",
            },
            {
              label: "6.5 Recursion",
              translations: {
                fr: "6.5 Récursivité",
              },
              slug: "chapter-6-methods-deep-dive/6-5-recursion",
            },
            {
              label: "6.5.1 Base case and recursive case",
              translations: {
                fr: "6.5.1 Cas de base et cas récursif",
              },
              slug: "chapter-6-methods-deep-dive/6-5-1-base-case-and-recursive-case",
            },
            {
              label: "6.5.2 Recursion vs iteration",
              translations: {
                fr: "6.5.2 Récursivité vs itération",
              },
              slug: "chapter-6-methods-deep-dive/6-5-2-recursion-vs-iteration",
            },
            {
              label: "6.6 Method hiding (static methods)",
              translations: {
                fr: "6.6 Masquage de méthodes (méthodes statiques)",
              },
              slug: "chapter-6-methods-deep-dive/6-6-method-hiding-static-methods",
            },
            {
              label: "6.7 Native methods (native keyword)",
              translations: {
                fr: "6.7 Méthodes natives (mot‑clé native)",
              },
              slug: "chapter-6-methods-deep-dive/6-7-native-methods-native-keyword",
            },
          ],
        },
        {
          label: "7 - Inheritance and polymorphism",
          translations: {
            fr: "7 - Héritage et polymorphisme",
          },
          collapsed: true,
          items: [
            {
              label: "7.1 Extending classes (extends)",
              translations: {
                fr: "7.1 éTendre des classes (extends)",
              },
              slug: "chapter-7-inheritance-and-polymorphism/7-1-extending-classes-extends",
            },
            {
              label: "7.2 The object class and its methods (tostring, equals, hashcode, clone, finalize)",
              translations: {
                fr: "7.2 La classe object et ses méthodes (tostring, equals, hashcode, clone, finalize)",
              },
              slug: "chapter-7-inheritance-and-polymorphism/7-2-the-object-class-and-its-methods-tostring-equals-hashcode-clone-finalize",
            },
            {
              label: "7.3 Overriding methods (@override)",
              translations: {
                fr: "7.3 Redéfinition de méthodes (@override)",
              },
              slug: "chapter-7-inheritance-and-polymorphism/7-3-overriding-methods-override",
            },
            {
              label: "7.4 The super keyword",
              translations: {
                fr: "7.4 Le mot‑clé super",
              },
              slug: "chapter-7-inheritance-and-polymorphism/7-4-the-super-keyword",
            },
            {
              label: "7.5 Polymorphism (compile‑time vs runtime)",
              translations: {
                fr: "7.5 Polymorphisme (compilation vs exécution)",
              },
              slug: "chapter-7-inheritance-and-polymorphism/7-5-polymorphism-compiletime-vs-runtime",
            },
            {
              label: "7.6 Dynamic method dispatch",
              translations: {
                fr: "7.6 Dispatch dynamique des méthodes",
              },
              slug: "chapter-7-inheritance-and-polymorphism/7-6-dynamic-method-dispatch",
            },
            {
              label: "7.7 Abstract classes and methods (abstract)",
              translations: {
                fr: "7.7 Classes et méthodes abstraites (abstract)",
              },
              slug: "chapter-7-inheritance-and-polymorphism/7-7-abstract-classes-and-methods-abstract",
            },
            {
              label: "7.8 Final classes and methods",
              translations: {
                fr: "7.8 Classes et méthodes finales",
              },
              slug: "chapter-7-inheritance-and-polymorphism/7-8-final-classes-and-methods",
            },
            {
              label: "7.9 Inheritance and constructors (super() call)",
              translations: {
                fr: "7.9 Héritage et constructeurs (appel à super())",
              },
              slug: "chapter-7-inheritance-and-polymorphism/7-9-inheritance-and-constructors-super-call",
            },
          ],
        },
        {
          label: "8 - Interfaces",
          translations: {
            fr: "8 - Interfaces",
          },
          collapsed: true,
          items: [
            {
              label: "8.1 Defining interfaces (interface)",
              translations: {
                fr: "8.1 Définir des interfaces (interface)",
              },
              slug: "chapter-8-interfaces/8-1-defining-interfaces-interface",
            },
            {
              label: "8.2 Implementing interfaces (implements)",
              translations: {
                fr: "8.2 Implémenter des interfaces (implements)",
              },
              slug: "chapter-8-interfaces/8-2-implementing-interfaces-implements",
            },
            {
              label: "8.3 Multiple inheritance via interfaces",
              translations: {
                fr: "8.3 Héritage multiple via les interfaces",
              },
              slug: "chapter-8-interfaces/8-3-multiple-inheritance-via-interfaces",
            },
            {
              label: "8.4 Default methods (default)",
              translations: {
                fr: "8.4 Méthodes par défaut (default)",
              },
              slug: "chapter-8-interfaces/8-4-default-methods-default",
            },
            {
              label: "8.5 Static methods in interfaces",
              translations: {
                fr: "8.5 Méthodes statiques dans les interfaces",
              },
              slug: "chapter-8-interfaces/8-5-static-methods-in-interfaces",
            },
            {
              label: "8.6 Private methods in interfaces (java 9+)",
              translations: {
                fr: "8.6 Méthodes privées dans les interfaces (java 9+)",
              },
              slug: "chapter-8-interfaces/8-6-private-methods-in-interfaces-java-9",
            },
            {
              label: "8.7 Functional interfaces and @functionalinterface",
              translations: {
                fr: "8.7 Interfaces fonctionnelles et @functionalinterface",
              },
              slug: "chapter-8-interfaces/8-7-functional-interfaces-and-functionalinterface",
            },
            {
              label: "8.8 Marker interfaces (serializable, cloneable)",
              translations: {
                fr: "8.8 Interfaces marqueurs (serializable, cloneable)",
              },
              slug: "chapter-8-interfaces/8-8-marker-interfaces-serializable-cloneable",
            },
          ],
        },
        {
          label: "9 - Packages and imports",
          translations: {
            fr: "9 - Paquetages et imports",
          },
          collapsed: true,
          items: [
            {
              label: "9.1 Creating packages (package)",
              translations: {
                fr: "9.1 Créer des paquetages (package)",
              },
              slug: "chapter-9-packages-and-imports/9-1-creating-packages-package",
            },
            {
              label: "9.2 Importing classes (import)",
              translations: {
                fr: "9.2 Importer des classes (import)",
              },
              slug: "chapter-9-packages-and-imports/9-2-importing-classes-import",
            },
            {
              label: "9.3 Static imports (import static)",
              translations: {
                fr: "9.3 Imports statiques (import static)",
              },
              slug: "chapter-9-packages-and-imports/9-3-static-imports-import-static",
            },
            {
              label: "9.4 Package access and protection",
              translations: {
                fr: "9.4 Accès et protection au niveau des paquetages",
              },
              slug: "chapter-9-packages-and-imports/9-4-package-access-and-protection",
            },
            {
              label: "9.5 Creating jar files",
              translations: {
                fr: "9.5 Créer des fichiers jar",
              },
              slug: "chapter-9-packages-and-imports/9-5-creating-jar-files",
            },
            {
              label: "9.6 Module system (java 9+)",
              translations: {
                fr: "9.6 Système de modules (java 9+)",
              },
              slug: "chapter-9-packages-and-imports/9-6-module-system-java-9",
            },
            {
              label: "9.6.1 Module‑info.java",
              translations: {
                fr: "9.6.1 Module‑info.java",
              },
              slug: "chapter-9-packages-and-imports/9-6-1-moduleinfojava",
            },
            {
              label: "9.6.2 Module dependencies and exports",
              translations: {
                fr: "9.6.2 Dépendances et exports des modules",
              },
              slug: "chapter-9-packages-and-imports/9-6-2-module-dependencies-and-exports",
            },
          ],
        },
        {
          label: "10 - Strings and string handling",
          translations: {
            fr: "10 - Chaînes de caractères et leur manipulation",
          },
          collapsed: true,
          items: [
            {
              label: "10.1 String class (immutable)",
              translations: {
                fr: "10.1 Classe string (immuable)",
              },
              slug: "chapter-10-strings-and-string-handling/10-1-string-class-immutable",
            },
            {
              label: "10.2 String methods (charat, length, substring, indexof, replace, split, etc.)",
              translations: {
                fr: "10.2 Méthodes de string (charat, length, substring, indexof, replace, split, etc.)",
              },
              slug: "chapter-10-strings-and-string-handling/10-2-string-methods-charat-length-substring-indexof-replace-split-etc",
            },
            {
              label: "10.3 String comparison (equals, equalsignorecase, compareto)",
              translations: {
                fr: "10.3 Comparaison de chaînes (equals, equalsignorecase, compareto)",
              },
              slug: "chapter-10-strings-and-string-handling/10-3-string-comparison-equals-equalsignorecase-compareto",
            },
            {
              label: "10.4 Stringbuilder and stringbuffer (mutable strings)",
              translations: {
                fr: "10.4 Stringbuilder et stringbuffer (chaînes modifiables)",
              },
              slug: "chapter-10-strings-and-string-handling/10-4-stringbuilder-and-stringbuffer-mutable-strings",
            },
            {
              label: "10.5 String joiner and string.join",
              translations: {
                fr: "10.5 String joiner et string.join",
              },
              slug: "chapter-10-strings-and-string-handling/10-5-string-joiner-and-stringjoin",
            },
            {
              label: "10.6 String tokenizer",
              translations: {
                fr: "10.6 String tokenizer",
              },
              slug: "chapter-10-strings-and-string-handling/10-6-string-tokenizer",
            },
            {
              label: "10.7 Regular expressions (java.util.regex)",
              translations: {
                fr: "10.7 Expressions régulières (java.util.regex)",
              },
              slug: "chapter-10-strings-and-string-handling/10-7-regular-expressions-javautilregex",
            },
            {
              label: "10.7.1 Pattern and matcher",
              translations: {
                fr: "10.7.1 Pattern et matcher",
              },
              slug: "chapter-10-strings-and-string-handling/10-7-1-pattern-and-matcher",
            },
            {
              label: "10.7.2 Regex syntax",
              translations: {
                fr: "10.7.2 Syntaxe des regex",
              },
              slug: "chapter-10-strings-and-string-handling/10-7-2-regex-syntax",
            },
            {
              label: "10.7.3 Groups and flags",
              translations: {
                fr: "10.7.3 Groupes et indicateurs",
              },
              slug: "chapter-10-strings-and-string-handling/10-7-3-groups-and-flags",
            },
          ],
        },
        {
          label: "11 - Arrays",
          translations: {
            fr: "11 - Tableaux",
          },
          collapsed: true,
          items: [
            {
              label: "11.1 Declaring and creating arrays",
              translations: {
                fr: "11.1 Déclarer et créer des tableaux",
              },
              slug: "chapter-11-arrays/11-1-declaring-and-creating-arrays",
            },
            {
              label: "11.2 Accessing array elements",
              translations: {
                fr: "11.2 Accéder aux éléments d’un tableau",
              },
              slug: "chapter-11-arrays/11-2-accessing-array-elements",
            },
            {
              label: "11.3 Array length",
              translations: {
                fr: "11.3 Longueur d’un tableau",
              },
              slug: "chapter-11-arrays/11-3-array-length",
            },
            {
              label: "11.4 Multidimensional arrays",
              translations: {
                fr: "11.4 Tableaux multidimensionnels",
              },
              slug: "chapter-11-arrays/11-4-multidimensional-arrays",
            },
            {
              label: "11.5 Copying arrays (system.arraycopy, arrays.copyof)",
              translations: {
                fr: "11.5 Copier des tableaux (system.arraycopy, arrays.copyof)",
              },
              slug: "chapter-11-arrays/11-5-copying-arrays-systemarraycopy-arrayscopyof",
            },
            {
              label: "11.6 Arrays utility class (java.util.arrays)",
              translations: {
                fr: "11.6 Classe utilitaire arrays (java.util.arrays)",
              },
              slug: "chapter-11-arrays/11-6-arrays-utility-class-javautilarrays",
            },
            {
              label: "11.6.1 Sorting (sort, parallelsort)",
              translations: {
                fr: "11.6.1 Tri (sort, parallelsort)",
              },
              slug: "chapter-11-arrays/11-6-1-sorting-sort-parallelsort",
            },
            {
              label: "11.6.2 Searching (binarysearch)",
              translations: {
                fr: "11.6.2 Recherche (binarysearch)",
              },
              slug: "chapter-11-arrays/11-6-2-searching-binarysearch",
            },
            {
              label: "11.6.3 Filling (fill)",
              translations: {
                fr: "11.6.3 Remplissage (fill)",
              },
              slug: "chapter-11-arrays/11-6-3-filling-fill",
            },
            {
              label: "11.6.4 Comparing (equals, deepequals)",
              translations: {
                fr: "11.6.4 Comparaison (equals, deepequals)",
              },
              slug: "chapter-11-arrays/11-6-4-comparing-equals-deepequals",
            },
            {
              label: "11.6.5 Converting to list (aslist)",
              translations: {
                fr: "11.6.5 Conversion en liste (aslist)",
              },
              slug: "chapter-11-arrays/11-6-5-converting-to-list-aslist",
            },
            {
              label: "11.7 Jagged arrays",
              translations: {
                fr: "11.7 Tableaux en dents de scie",
              },
              slug: "chapter-11-arrays/11-7-jagged-arrays",
            },
          ],
        },
        {
          label: "12 - Enum types",
          translations: {
            fr: "12 - Types énumérés",
          },
          collapsed: true,
          items: [
            {
              label: "12.1 Defining enums (enum)",
              translations: {
                fr: "12.1 Définir des énumérations (enum)",
              },
              slug: "chapter-12-enum-types/12-1-defining-enums-enum",
            },
            {
              label: "12.2 Enum constants and fields",
              translations: {
                fr: "12.2 Constantes et champs d’enum",
              },
              slug: "chapter-12-enum-types/12-2-enum-constants-and-fields",
            },
            {
              label: "12.3 Enum methods (values, valueof, ordinal)",
              translations: {
                fr: "12.3 Méthodes d’enum (values, valueof, ordinal)",
              },
              slug: "chapter-12-enum-types/12-3-enum-methods-values-valueof-ordinal",
            },
            {
              label: "12.4 Enums with constructors and methods",
              translations: {
                fr: "12.4 Enum avec constructeurs et méthodes",
              },
              slug: "chapter-12-enum-types/12-4-enums-with-constructors-and-methods",
            },
            {
              label: "12.5 Enumset and enummap",
              translations: {
                fr: "12.5 Enumset et enummap",
              },
              slug: "chapter-12-enum-types/12-5-enumset-and-enummap",
            },
            {
              label: "12.6 Using enums in switch statements",
              translations: {
                fr: "12.6 Utiliser des enum dans les instructions switch",
              },
              slug: "chapter-12-enum-types/12-6-using-enums-in-switch-statements",
            },
          ],
        },
        {
          label: "13 - Date and time API (java.time)",
          translations: {
            fr: "13 - API date et heure (java.time)",
          },
          collapsed: true,
          items: [
            {
              label: "13.1 Legacy date and calendar (java.util.date,Java.util.calendar)",
              translations: {
                fr: "13.1 Date et calendar legacy (java.util.date,Java.util.calendar)",
              },
              slug: "chapter-13-date-and-time-api-javatime/13-1-legacy-date-and-calendar-javautildate-javautilcalendar",
            },
            {
              label: "13.2 New date/time API (java 8+)",
              translations: {
                fr: "13.2 Nouvelle API date/heure (java 8+)",
              },
              slug: "chapter-13-date-and-time-api-javatime/13-2-new-datetime-api-java-8",
            },
            {
              label: "13.2.1 Localdate, localtime, localdatetime",
              translations: {
                fr: "13.2.1 Localdate, localtime, localdatetime",
              },
              slug: "chapter-13-date-and-time-api-javatime/13-2-1-localdate-localtime-localdatetime",
            },
            {
              label: "13.2.2 Zoneddatetime, offsetdatetime",
              translations: {
                fr: "13.2.2 Zoneddatetime, offsetdatetime",
              },
              slug: "chapter-13-date-and-time-api-javatime/13-2-2-zoneddatetime-offsetdatetime",
            },
            {
              label: "13.2.3 Instant and duration",
              translations: {
                fr: "13.2.3 Instant et duration",
              },
              slug: "chapter-13-date-and-time-api-javatime/13-2-3-instant-and-duration",
            },
            {
              label: "13.2.4 Period",
              translations: {
                fr: "13.2.4 Period",
              },
              slug: "chapter-13-date-and-time-api-javatime/13-2-4-period",
            },
            {
              label: "13.2.5 Formatting and parsing (datetimeformatter)",
              translations: {
                fr: "13.2.5 Formatage et analyse (datetimeformatter)",
              },
              slug: "chapter-13-date-and-time-api-javatime/13-2-5-formatting-and-parsing-datetimeformatter",
            },
            {
              label: "13.2.6 Temporal adjusters",
              translations: {
                fr: "13.2.6 Ajusteurs temporels (temporal adjusters)",
              },
              slug: "chapter-13-date-and-time-api-javatime/13-2-6-temporal-adjusters",
            },
            {
              label: "13.3 Working with time zones (zoneid, zoneoffset)",
              translations: {
                fr: "13.3 Travailler avec les fuseaux horaires (zoneid, zoneoffset)",
              },
              slug: "chapter-13-date-and-time-api-javatime/13-3-working-with-time-zones-zoneid-zoneoffset",
            },
          ],
        },
        {
          label: "14 - Collections overview",
          translations: {
            fr: "14 - Collections (vue d’ensemble)",
          },
          collapsed: true,
          items: [
            {
              label: "14.1 Collection framework hierarchy",
              translations: {
                fr: "14.1 Hiérarchie du framework collections",
              },
              slug: "chapter-14-collections-overview/14-1-collection-framework-hierarchy",
            },
            {
              label: "14.2 Iterable and iterator",
              translations: {
                fr: "14.2 Iterable et iterator",
              },
              slug: "chapter-14-collections-overview/14-2-iterable-and-iterator",
            },
            {
              label: "14.3 Collection interface",
              translations: {
                fr: "14.3 Interface collection",
              },
              slug: "chapter-14-collections-overview/14-3-collection-interface",
            },
            {
              label: "14.4 Generics in collections",
              translations: {
                fr: "14.4 Génériques dans les collections",
              },
              slug: "chapter-14-collections-overview/14-4-generics-in-collections",
            },
            {
              label: "14.5 Legacy classes (vector, stack, hashtable, enumeration)",
              translations: {
                fr: "14.5 Classes legacy (vector, stack, hashtable, enumeration)",
              },
              slug: "chapter-14-collections-overview/14-5-legacy-classes-vector-stack-hashtable-enumeration",
            },
          ],
        },
        {
          label: "15 - List interface",
          translations: {
            fr: "15 - Interface list",
          },
          collapsed: true,
          items: [
            {
              label: "15.1 Arraylist",
              translations: {
                fr: "15.1 Arraylist",
              },
              slug: "chapter-15-list-interface/15-1-arraylist",
            },
            {
              label: "15.1.1 Creating arraylist",
              translations: {
                fr: "15.1.1 Créer un arraylist",
              },
              slug: "chapter-15-list-interface/15-1-1-creating-arraylist",
            },
            {
              label: "15.1.2 Adding and removing elements",
              translations: {
                fr: "15.1.2 Ajouter et supprimer des éléments",
              },
              slug: "chapter-15-list-interface/15-1-2-adding-and-removing-elements",
            },
            {
              label: "15.1.3 Iteration and listiterator",
              translations: {
                fr: "15.1.3 Itération et listiterator",
              },
              slug: "chapter-15-list-interface/15-1-3-iteration-and-listiterator",
            },
            {
              label: "15.1.4 Sorting (collections.sort, list.sort)",
              translations: {
                fr: "15.1.4 Tri (collections.sort, list.sort)",
              },
              slug: "chapter-15-list-interface/15-1-4-sorting-collectionssort-listsort",
            },
            {
              label: "15.2 Linkedlist",
              translations: {
                fr: "15.2 Linkedlist",
              },
              slug: "chapter-15-list-interface/15-2-linkedlist",
            },
            {
              label: "15.2.1 Linkedlist as list and deque",
              translations: {
                fr: "15.2.1 Linkedlist comme list et deque",
              },
              slug: "chapter-15-list-interface/15-2-1-linkedlist-as-list-and-deque",
            },
            {
              label: "15.2.2 Methods specific to linkedlist",
              translations: {
                fr: "15.2.2 Méthodes spécifiques à linkedlist",
              },
              slug: "chapter-15-list-interface/15-2-2-methods-specific-to-linkedlist",
            },
            {
              label: "15.3 Vector and stack",
              translations: {
                fr: "15.3 Vector et stack",
              },
              slug: "chapter-15-list-interface/15-3-vector-and-stack",
            },
            {
              label: "15.4 Copyonwritearraylist (concurrent)",
              translations: {
                fr: "15.4 Copyonwritearraylist (concurrent)",
              },
              slug: "chapter-15-list-interface/15-4-copyonwritearraylist-concurrent",
            },
          ],
        },
        {
          label: "16 - Set interface",
          translations: {
            fr: "16 - Interface set",
          },
          collapsed: true,
          items: [
            {
              label: "16.1 Hashset",
              translations: {
                fr: "16.1 Hashset",
              },
              slug: "chapter-16-set-interface/16-1-hashset",
            },
            {
              label: "16.1.1 Hashing and hashcode()",
              translations: {
                fr: "16.1.1 Hachage et hashcode()",
              },
              slug: "chapter-16-set-interface/16-1-1-hashing-and-hashcode",
            },
            {
              label: "16.1.2 Performance considerations",
              translations: {
                fr: "16.1.2 Considérations de performance",
              },
              slug: "chapter-16-set-interface/16-1-2-performance-considerations",
            },
            {
              label: "16.2 Linkedhashset (insertion order)",
              translations: {
                fr: "16.2 Linkedhashset (ordre d’insertion)",
              },
              slug: "chapter-16-set-interface/16-2-linkedhashset-insertion-order",
            },
            {
              label: "16.3 Treeset (sortedset)",
              translations: {
                fr: "16.3 Treeset (sortedset)",
              },
              slug: "chapter-16-set-interface/16-3-treeset-sortedset",
            },
            {
              label: "16.3.1 Comparable and comparator",
              translations: {
                fr: "16.3.1 Comparable et comparator",
              },
              slug: "chapter-16-set-interface/16-3-1-comparable-and-comparator",
            },
            {
              label: "16.3.2 Navigableset methods",
              translations: {
                fr: "16.3.2 Méthodes de navigableset",
              },
              slug: "chapter-16-set-interface/16-3-2-navigableset-methods",
            },
            {
              label: "16.4 Enumset",
              translations: {
                fr: "16.4 Enumset",
              },
              slug: "chapter-16-set-interface/16-4-enumset",
            },
            {
              label: "16.5 Copyonwritearrayset",
              translations: {
                fr: "16.5 Copyonwritearrayset",
              },
              slug: "chapter-16-set-interface/16-5-copyonwritearrayset",
            },
          ],
        },
        {
          label: "17 - Queue and deque interfaces",
          translations: {
            fr: "17 - Interfaces queue et deque",
          },
          collapsed: true,
          items: [
            {
              label: "17.1 Queue interface",
              translations: {
                fr: "17.1 Interface queue",
              },
              slug: "chapter-17-queue-and-deque-interfaces/17-1-queue-interface",
            },
            {
              label: "17.1.1 Linkedlist as queue",
              translations: {
                fr: "17.1.1 Linkedlist comme queue",
              },
              slug: "chapter-17-queue-and-deque-interfaces/17-1-1-linkedlist-as-queue",
            },
            {
              label: "17.1.2 Priorityqueue",
              translations: {
                fr: "17.1.2 Priorityqueue",
              },
              slug: "chapter-17-queue-and-deque-interfaces/17-1-2-priorityqueue",
            },
            {
              label: "17.1.3 Arraydeque",
              translations: {
                fr: "17.1.3 Arraydeque",
              },
              slug: "chapter-17-queue-and-deque-interfaces/17-1-3-arraydeque",
            },
            {
              label: "17.2 Deque interface",
              translations: {
                fr: "17.2 Interface deque",
              },
              slug: "chapter-17-queue-and-deque-interfaces/17-2-deque-interface",
            },
            {
              label: "17.2.1 Operations at both ends",
              translations: {
                fr: "17.2.1 Opérations aux deux extrémités",
              },
              slug: "chapter-17-queue-and-deque-interfaces/17-2-1-operations-at-both-ends",
            },
            {
              label: "17.2.2 Stack using deque",
              translations: {
                fr: "17.2.2 Pile (stack) avec deque",
              },
              slug: "chapter-17-queue-and-deque-interfaces/17-2-2-stack-using-deque",
            },
            {
              label: "17.3 Blockingqueue (concurrent)",
              translations: {
                fr: "17.3 Blockingqueue (concurrent)",
              },
              slug: "chapter-17-queue-and-deque-interfaces/17-3-blockingqueue-concurrent",
            },
            {
              label: "17.3.1 Arrayblockingqueue, linkedblockingqueue",
              translations: {
                fr: "17.3.1 Arrayblockingqueue, linkedblockingqueue",
              },
              slug: "chapter-17-queue-and-deque-interfaces/17-3-1-arrayblockingqueue-linkedblockingqueue",
            },
            {
              label: "17.3.2 Priorityblockingqueue",
              translations: {
                fr: "17.3.2 Priorityblockingqueue",
              },
              slug: "chapter-17-queue-and-deque-interfaces/17-3-2-priorityblockingqueue",
            },
            {
              label: "17.3.3 Delayqueue, synchronousqueue",
              translations: {
                fr: "17.3.3 Delayqueue, synchronousqueue",
              },
              slug: "chapter-17-queue-and-deque-interfaces/17-3-3-delayqueue-synchronousqueue",
            },
          ],
        },
        {
          label: "18 - Map interface",
          translations: {
            fr: "18 - Interface map",
          },
          collapsed: true,
          items: [
            {
              label: "18.1 Hashmap",
              translations: {
                fr: "18.1 Hashmap",
              },
              slug: "chapter-18-map-interface/18-1-hashmap",
            },
            {
              label: "18.1.1 Working with hashmap",
              translations: {
                fr: "18.1.1 Travailler avec hashmap",
              },
              slug: "chapter-18-map-interface/18-1-1-working-with-hashmap",
            },
            {
              label: "18.1.2 Load factor and rehashing",
              translations: {
                fr: "18.1.2 Facteur de charge et rehachage",
              },
              slug: "chapter-18-map-interface/18-1-2-load-factor-and-rehashing",
            },
            {
              label: "18.2 Linkedhashmap (insertion order, access order)",
              translations: {
                fr: "18.2 Linkedhashmap (ordre d’insertion, ordre d’accès)",
              },
              slug: "chapter-18-map-interface/18-2-linkedhashmap-insertion-order-access-order",
            },
            {
              label: "18.3 Treemap (sortedmap)",
              translations: {
                fr: "18.3 Treemap (sortedmap)",
              },
              slug: "chapter-18-map-interface/18-3-treemap-sortedmap",
            },
            {
              label: "18.3.1 Comparable and comparator",
              translations: {
                fr: "18.3.1 Comparable et comparator",
              },
              slug: "chapter-18-map-interface/18-3-1-comparable-and-comparator",
            },
            {
              label: "18.3.2 Navigablemap methods",
              translations: {
                fr: "18.3.2 Méthodes de navigablemap",
              },
              slug: "chapter-18-map-interface/18-3-2-navigablemap-methods",
            },
            {
              label: "18.4 Hashtable (legacy)",
              translations: {
                fr: "18.4 Hashtable (legacy)",
              },
              slug: "chapter-18-map-interface/18-4-hashtable-legacy",
            },
            {
              label: "18.5 Enummap",
              translations: {
                fr: "18.5 Enummap",
              },
              slug: "chapter-18-map-interface/18-5-enummap",
            },
            {
              label: "18.6 Weakhashmap",
              translations: {
                fr: "18.6 Weakhashmap",
              },
              slug: "chapter-18-map-interface/18-6-weakhashmap",
            },
            {
              label: "18.7 Identityhashmap",
              translations: {
                fr: "18.7 Identityhashmap",
              },
              slug: "chapter-18-map-interface/18-7-identityhashmap",
            },
            {
              label: "18.8 Concurrenthashmap and concurrentmap",
              translations: {
                fr: "18.8 Concurrenthashmap et concurrentmap",
              },
              slug: "chapter-18-map-interface/18-8-concurrenthashmap-and-concurrentmap",
            },
          ],
        },
        {
          label: "19 - Utility classes",
          translations: {
            fr: "19 - Classes utilitaires",
          },
          collapsed: true,
          items: [
            {
              label: "19.1 Collections class",
              translations: {
                fr: "19.1 Classe collections",
              },
              slug: "chapter-19-utility-classes/19-1-collections-class",
            },
            {
              label: "19.1.1 Sorting, searching, reversing, shuffling",
              translations: {
                fr: "19.1.1 Tri, recherche, inversion, mélange",
              },
              slug: "chapter-19-utility-classes/19-1-1-sorting-searching-reversing-shuffling",
            },
            {
              label: "19.1.2 Synchronized wrappers",
              translations: {
                fr: "19.1.2 Wrappers synchronisés",
              },
              slug: "chapter-19-utility-classes/19-1-2-synchronized-wrappers",
            },
            {
              label: "19.1.3 Unmodifiable wrappers",
              translations: {
                fr: "19.1.3 Wrappers non modifiables",
              },
              slug: "chapter-19-utility-classes/19-1-3-unmodifiable-wrappers",
            },
            {
              label: "19.1.4 Utility methods (frequency, disjoint, addall, etc.)",
              translations: {
                fr: "19.1.4 Méthodes utilitaires (frequency, disjoint, addall, etc.)",
              },
              slug: "chapter-19-utility-classes/19-1-4-utility-methods-frequency-disjoint-addall-etc",
            },
            {
              label: "19.2 Arrays class (covered in chapter 11)",
              translations: {
                fr: "19.2 Classe arrays (couverte au chapitre 11)",
              },
              slug: "chapter-19-utility-classes/19-2-arrays-class-covered-in-chapter-11",
            },
            {
              label: "19.3 Objects class (null‑safe methods, hash, tostring)",
              translations: {
                fr: "19.3 Classe objects (méthodes null‑safe, hash, tostring)",
              },
              slug: "chapter-19-utility-classes/19-3-objects-class-nullsafe-methods-hash-tostring",
            },
          ],
        },
        {
          label: "20 - Exceptions and assertions",
          translations: {
            fr: "20 - Exceptions et assertions",
          },
          collapsed: true,
          items: [
            {
              label: "20.1 Exception hierarchy (throwable, error, exception)",
              translations: {
                fr: "20.1 Hiérarchie des exceptions (throwable, error, exception)",
              },
              slug: "chapter-20-exceptions-and-assertions/20-1-exception-hierarchy-throwable-error-exception",
            },
            {
              label: "20.2 Checked vs unchecked exceptions",
              translations: {
                fr: "20.2 Exceptions vérifiées vs non vérifiées",
              },
              slug: "chapter-20-exceptions-and-assertions/20-2-checked-vs-unchecked-exceptions",
            },
            {
              label: "20.3 Try‑catch‑finally block",
              translations: {
                fr: "20.3 Bloc try‑catch‑finally",
              },
              slug: "chapter-20-exceptions-and-assertions/20-3-trycatchfinally-block",
            },
            {
              label: "20.4 Try‑with‑resources (autocloseable)",
              translations: {
                fr: "20.4 Try‑with‑resources (autocloseable)",
              },
              slug: "chapter-20-exceptions-and-assertions/20-4-trywithresources-autocloseable",
            },
            {
              label: "20.5 Multiple catch blocks",
              translations: {
                fr: "20.5 Blocs catch multiples",
              },
              slug: "chapter-20-exceptions-and-assertions/20-5-multiple-catch-blocks",
            },
            {
              label: "20.6 The throw and throws keywords",
              translations: {
                fr: "20.6 Mots‑clés throw et throws",
              },
              slug: "chapter-20-exceptions-and-assertions/20-6-the-throw-and-throws-keywords",
            },
            {
              label: "20.7 Creating custom exceptions",
              translations: {
                fr: "20.7 Créer des exceptions personnalisées",
              },
              slug: "chapter-20-exceptions-and-assertions/20-7-creating-custom-exceptions",
            },
            {
              label: "20.8 Chained exceptions",
              translations: {
                fr: "20.8 Exceptions chaînées",
              },
              slug: "chapter-20-exceptions-and-assertions/20-8-chained-exceptions",
            },
            {
              label: "20.9 Assertions (assert)",
              translations: {
                fr: "20.9 Assertions (assert)",
              },
              slug: "chapter-20-exceptions-and-assertions/20-9-assertions-assert",
            },
            {
              label: "20.10 Best practices for exception handling",
              translations: {
                fr: "20.10 Bonnes pratiques pour la gestion des exceptions",
              },
              slug: "chapter-20-exceptions-and-assertions/20-10-best-practices-for-exception-handling",
            },
          ],
        },
        {
          label: "21 - File i/o (java.IO)",
          translations: {
            fr: "21 - Entrées/sorties (java.IO)",
          },
          collapsed: true,
          items: [
            {
              label: "21.1 The file class",
              translations: {
                fr: "21.1 La classe file",
              },
              slug: "chapter-21-file-io-javaio/21-1-the-file-class",
            },
            {
              label: "21.2 Byte streams (inputstream, outputstream, fileinputstream, fileoutputstream)",
              translations: {
                fr: "21.2 Flux d’octets (inputstream, outputstream, fileinputstream, fileoutputstream)",
              },
              slug: "chapter-21-file-io-javaio/21-2-byte-streams-inputstream-outputstream-fileinputstream-fileoutputstream",
            },
            {
              label: "21.3 Character streams (reader, writer, filereader, filewriter)",
              translations: {
                fr: "21.3 Flux de caractères (reader, writer, filereader, filewriter)",
              },
              slug: "chapter-21-file-io-javaio/21-3-character-streams-reader-writer-filereader-filewriter",
            },
            {
              label: "21.4 Buffered streams (bufferedreader, bufferedwriter)",
              translations: {
                fr: "21.4 Flux tamponnés (bufferedreader, bufferedwriter)",
              },
              slug: "chapter-21-file-io-javaio/21-4-buffered-streams-bufferedreader-bufferedwriter",
            },
            {
              label: "21.5 Printstream and printwriter",
              translations: {
                fr: "21.5 Printstream et printwriter",
              },
              slug: "chapter-21-file-io-javaio/21-5-printstream-and-printwriter",
            },
            {
              label: "21.6 Data streams (datainputstream, dataoutputstream)",
              translations: {
                fr: "21.6 Flux de données (datainputstream, dataoutputstream)",
              },
              slug: "chapter-21-file-io-javaio/21-6-data-streams-datainputstream-dataoutputstream",
            },
            {
              label: "21.7 Object streams (objectinputstream, objectoutputstream) and serialization",
              translations: {
                fr: "21.7 Flux d’objets (objectinputstream, objectoutputstream) et sérialisation",
              },
              slug: "chapter-21-file-io-javaio/21-7-object-streams-objectinputstream-objectoutputstream-and-serialization",
            },
            {
              label: "21.8 Transient keyword",
              translations: {
                fr: "21.8 Mot‑clé transient",
              },
              slug: "chapter-21-file-io-javaio/21-8-transient-keyword",
            },
            {
              label: "21.9 Externalizable interface",
              translations: {
                fr: "21.9 Interface externalizable",
              },
              slug: "chapter-21-file-io-javaio/21-9-externalizable-interface",
            },
          ],
        },
        {
          label: "22 - NIO and NIO.2 (java.NIO)",
          translations: {
            fr: "22 - NIO et NIO.2 (java.NIO)",
          },
          collapsed: true,
          items: [
            {
              label: "22.1 Path interface and paths class",
              translations: {
                fr: "22.1 Interface path et classe paths",
              },
              slug: "chapter-22-nio-and-nio2-javanio/22-1-path-interface-and-paths-class",
            },
            {
              label: "22.2 Files class (read, write, copy, move, delete, walk, find)",
              translations: {
                fr: "22.2 Classe files (lire, écrire, copier, déplacer, supprimer, walk, find)",
              },
              slug: "chapter-22-nio-and-nio2-javanio/22-2-files-class-read-write-copy-move-delete-walk-find",
            },
            {
              label: "22.3 File systems and file stores",
              translations: {
                fr: "22.3 Systèmes de fichiers et espaces de stockage",
              },
              slug: "chapter-22-nio-and-nio2-javanio/22-3-file-systems-and-file-stores",
            },
            {
              label: "22.4 Buffers (bytebuffer, charbuffer)",
              translations: {
                fr: "22.4 Buffers (bytebuffer, charbuffer)",
              },
              slug: "chapter-22-nio-and-nio2-javanio/22-4-buffers-bytebuffer-charbuffer",
            },
            {
              label: "22.5 Channels (filechannel, socketchannel, serversocketchannel)",
              translations: {
                fr: "22.5 Canaux (filechannel, socketchannel, serversocketchannel)",
              },
              slug: "chapter-22-nio-and-nio2-javanio/22-5-channels-filechannel-socketchannel-serversocketchannel",
            },
            {
              label: "22.6 Selectors and non‑blocking i/o",
              translations: {
                fr: "22.6 Sélecteurs et e/s non‑bloquantes",
              },
              slug: "chapter-22-nio-and-nio2-javanio/22-6-selectors-and-nonblocking-io",
            },
            {
              label: "22.7 Asynchronous file i/o (asynchronousfilechannel)",
              translations: {
                fr: "22.7 E/s asynchrones (asynchronousfilechannel)",
              },
              slug: "chapter-22-nio-and-nio2-javanio/22-7-asynchronous-file-io-asynchronousfilechannel",
            },
            {
              label: "22.8 Watch service (file change monitoring)",
              translations: {
                fr: "22.8 Service de surveillance (watch service)",
              },
              slug: "chapter-22-nio-and-nio2-javanio/22-8-watch-service-file-change-monitoring",
            },
          ],
        },
        {
          label: "23 - Serialization and deserialization",
          translations: {
            fr: "23 - Sérialisation et désérialisation",
          },
          collapsed: true,
          items: [
            {
              label: "23.1 Serializable interface",
              translations: {
                fr: "23.1 Interface serializable",
              },
              slug: "chapter-23-serialization-and-deserialization/23-1-serializable-interface",
            },
            {
              label: "23.2 Serialversionuid",
              translations: {
                fr: "23.2 Serialversionuid",
              },
              slug: "chapter-23-serialization-and-deserialization/23-2-serialversionuid",
            },
            {
              label: "23.3 Custom serialization (writeobject, readobject)",
              translations: {
                fr: "23.3 Sérialisation personnalisée (writeobject, readobject)",
              },
              slug: "chapter-23-serialization-and-deserialization/23-3-custom-serialization-writeobject-readobject",
            },
            {
              label: "23.4 Externalizable interface",
              translations: {
                fr: "23.4 Interface externalizable",
              },
              slug: "chapter-23-serialization-and-deserialization/23-4-externalizable-interface",
            },
            {
              label: "23.5 JSON and XML processing (jackson, jaxb)",
              translations: {
                fr: "23.5 Traitement JSON et XML (jackson, jaxb)",
              },
              slug: "chapter-23-serialization-and-deserialization/23-5-json-and-xml-processing-jackson-jaxb",
            },
          ],
        },
        {
          label: "24 - Threads and runnables",
          translations: {
            fr: "24 - Threads et runnables",
          },
          collapsed: true,
          items: [
            {
              label: "24.1 Creating threads (thread class, runnable interface)",
              translations: {
                fr: "24.1 Créer des threads (classe thread, interface runnable)",
              },
              slug: "chapter-24-threads-and-runnables/24-1-creating-threads-thread-class-runnable-interface",
            },
            {
              label: "24.2 Thread lifecycle (new, runnable, blocked, waiting, timed waiting, terminated)",
              translations: {
                fr: "24.2 Cycle de vie d’un thread (new, runnable, blocked, waiting, timed waiting, terminated)",
              },
              slug: "chapter-24-threads-and-runnables/24-2-thread-lifecycle-new-runnable-blocked-waiting-timed-waiting-terminated",
            },
            {
              label: "24.3 Thread methods (start, join, sleep, yield, interrupt)",
              translations: {
                fr: "24.3 Méthodes de thread (start, join, sleep, yield, interrupt)",
              },
              slug: "chapter-24-threads-and-runnables/24-3-thread-methods-start-join-sleep-yield-interrupt",
            },
            {
              label: "24.4 Daemon threads",
              translations: {
                fr: "24.4 Threads daemon",
              },
              slug: "chapter-24-threads-and-runnables/24-4-daemon-threads",
            },
            {
              label: "24.5 Thread priorities",
              translations: {
                fr: "24.5 Priorités de threads",
              },
              slug: "chapter-24-threads-and-runnables/24-5-thread-priorities",
            },
            {
              label: "24.6 Thread groups",
              translations: {
                fr: "24.6 Groupes de threads",
              },
              slug: "chapter-24-threads-and-runnables/24-6-thread-groups",
            },
          ],
        },
        {
          label: "25 - Synchronization and locks",
          translations: {
            fr: "25 - Synchronisation et verrous",
          },
          collapsed: true,
          items: [
            {
              label: "25.1 Race conditions and critical sections",
              translations: {
                fr: "25.1 Conditions de concurrence et sections critiques",
              },
              slug: "chapter-25-synchronization-and-locks/25-1-race-conditions-and-critical-sections",
            },
            {
              label: "25.2 Synchronized methods and blocks",
              translations: {
                fr: "25.2 Méthodes et blocs synchronisés",
              },
              slug: "chapter-25-synchronization-and-locks/25-2-synchronized-methods-and-blocks",
            },
            {
              label: "25.3 Intrinsic locks (monitors)",
              translations: {
                fr: "25.3 Verrous intrinsèques (moniteurs)",
              },
              slug: "chapter-25-synchronization-and-locks/25-3-intrinsic-locks-monitors",
            },
            {
              label: "25.4 Volatile keyword",
              translations: {
                fr: "25.4 Mot‑clé volatile",
              },
              slug: "chapter-25-synchronization-and-locks/25-4-volatile-keyword",
            },
            {
              label: "25.5 Deadlock, livelock, and starvation",
              translations: {
                fr: "25.5 Interblocage (deadlock), famine (starvation) et livelock",
              },
              slug: "chapter-25-synchronization-and-locks/25-5-deadlock-livelock-and-starvation",
            },
            {
              label: "25.6 Java.util.concurrent.locks package",
              translations: {
                fr: "25.6 PaquetageJava.util.concurrent.locks",
              },
              slug: "chapter-25-synchronization-and-locks/25-6-javautilconcurrentlocks-package",
            },
            {
              label: "25.6.1 Lock, reentrantlock",
              translations: {
                fr: "25.6.1 Lock, reentrantlock",
              },
              slug: "chapter-25-synchronization-and-locks/25-6-1-lock-reentrantlock",
            },
            {
              label: "25.6.2 Readwritelock, reentrantreadwritelock",
              translations: {
                fr: "25.6.2 Readwritelock, reentrantreadwritelock",
              },
              slug: "chapter-25-synchronization-and-locks/25-6-2-readwritelock-reentrantreadwritelock",
            },
            {
              label: "25.6.3 Stampedlock",
              translations: {
                fr: "25.6.3 Stampedlock",
              },
              slug: "chapter-25-synchronization-and-locks/25-6-3-stampedlock",
            },
            {
              label: "25.7 Condition objects",
              translations: {
                fr: "25.7 Objets condition",
              },
              slug: "chapter-25-synchronization-and-locks/25-7-condition-objects",
            },
          ],
        },
        {
          label: "26 - High‑level concurrency utilities",
          translations: {
            fr: "26 - Utilitaires de concurrence de haut niveau",
          },
          collapsed: true,
          items: [
            {
              label: "26.1 Executor framework",
              translations: {
                fr: "26.1 Framework executor",
              },
              slug: "chapter-26-highlevel-concurrency-utilities/26-1-executor-framework",
            },
            {
              label: "26.1.1 Executor, executorservice, scheduledexecutorservice",
              translations: {
                fr: "26.1.1 Executor, executorservice, scheduledexecutorservice",
              },
              slug: "chapter-26-highlevel-concurrency-utilities/26-1-1-executor-executorservice-scheduledexecutorservice",
            },
            {
              label: "26.1.2 Threadpoolexecutor, scheduledthreadpoolexecutor",
              translations: {
                fr: "26.1.2 Threadpoolexecutor, scheduledthreadpoolexecutor",
              },
              slug: "chapter-26-highlevel-concurrency-utilities/26-1-2-threadpoolexecutor-scheduledthreadpoolexecutor",
            },
            {
              label: "26.1.3 Executors factory methods",
              translations: {
                fr: "26.1.3 Méthodes d’usine de executors",
              },
              slug: "chapter-26-highlevel-concurrency-utilities/26-1-3-executors-factory-methods",
            },
            {
              label: "26.1.4 Callable and future",
              translations: {
                fr: "26.1.4 Callable et future",
              },
              slug: "chapter-26-highlevel-concurrency-utilities/26-1-4-callable-and-future",
            },
            {
              label: "26.1.5 Completionservice and executorcompletionservice",
              translations: {
                fr: "26.1.5 Completionservice et executorcompletionservice",
              },
              slug: "chapter-26-highlevel-concurrency-utilities/26-1-5-completionservice-and-executorcompletionservice",
            },
            {
              label: "26.2 Fork/join framework (forkjoinpool, recursivetask, recursiveaction)",
              translations: {
                fr: "26.2 Framework fork/join (forkjoinpool, recursivetask, recursiveaction)",
              },
              slug: "chapter-26-highlevel-concurrency-utilities/26-2-forkjoin-framework-forkjoinpool-recursivetask-recursiveaction",
            },
            {
              label: "26.3 Concurrent collections (concurrenthashmap, copyonwritearraylist, blockingqueue implementations)",
              translations: {
                fr: "26.3 Collections concurrentes (concurrenthashmap, copyonwritearraylist, implémentations de blockingqueue)",
              },
              slug: "chapter-26-highlevel-concurrency-utilities/26-3-concurrent-collections-concurrenthashmap-copyonwritearraylist-blockingqueue-implementations",
            },
            {
              label: "26.4 Atomic variables (java.util.concurrent.atomic)",
              translations: {
                fr: "26.4 Variables atomiques (java.util.concurrent.atomic)",
              },
              slug: "chapter-26-highlevel-concurrency-utilities/26-4-atomic-variables-javautilconcurrentatomic",
            },
            {
              label: "26.5 Synchronizers (countdownlatch, cyclicbarrier, semaphore, phaser, exchanger)",
              translations: {
                fr: "26.5 Synchroniseurs (countdownlatch, cyclicbarrier, semaphore, phaser, exchanger)",
              },
              slug: "chapter-26-highlevel-concurrency-utilities/26-5-synchronizers-countdownlatch-cyclicbarrier-semaphore-phaser-exchanger",
            },
          ],
        },
        {
          label: "27 - Java memory model and thread safety",
          translations: {
            fr: "27 - Modèle mémoireJava et sécurité des threads",
          },
          collapsed: true,
          items: [
            {
              label: "27.1 Java memory model (jmm)",
              translations: {
                fr: "27.1 Modèle mémoireJava (jmm)",
              },
              slug: "chapter-27-java-memory-model-and-thread-safety/27-1-java-memory-model-jmm",
            },
            {
              label: "27.2 Happens‑before relationship",
              translations: {
                fr: "27.2 Relation happens‑before",
              },
              slug: "chapter-27-java-memory-model-and-thread-safety/27-2-happensbefore-relationship",
            },
            {
              label: "27.3 Immutable objects",
              translations: {
                fr: "27.3 Objets immuables",
              },
              slug: "chapter-27-java-memory-model-and-thread-safety/27-3-immutable-objects",
            },
            {
              label: "27.4 Threadlocal variables",
              translations: {
                fr: "27.4 Variables threadlocal",
              },
              slug: "chapter-27-java-memory-model-and-thread-safety/27-4-threadlocal-variables",
            },
            {
              label: "27.5 Thread safety strategies",
              translations: {
                fr: "27.5 Stratégies de sécurité des threads",
              },
              slug: "chapter-27-java-memory-model-and-thread-safety/27-5-thread-safety-strategies",
            },
          ],
        },
        {
          label: "28 - Lambda expressions",
          translations: {
            fr: "28 - Expressions lambda",
          },
          collapsed: true,
          items: [
            {
              label: "28.1 Introduction to lambdas",
              translations: {
                fr: "28.1 Introduction aux lambdas",
              },
              slug: "chapter-28-lambda-expressions/28-1-introduction-to-lambdas",
            },
            {
              label: "28.2 Syntax and types (functional interfaces)",
              translations: {
                fr: "28.2 Syntaxe et types (interfaces fonctionnelles)",
              },
              slug: "chapter-28-lambda-expressions/28-2-syntax-and-types-functional-interfaces",
            },
            {
              label: "28.3 Method references (class::staticmethod, instance::method, class::new)",
              translations: {
                fr: "28.3 Références de méthodes (class::staticmethod, instance::method, class::new)",
              },
              slug: "chapter-28-lambda-expressions/28-3-method-references-classstaticmethod-instancemethod-classnew",
            },
            {
              label: "28.4 Built‑in functional interfaces (java.util.function)",
              translations: {
                fr: "28.4 Interfaces fonctionnelles prédéfinies (java.util.function)",
              },
              slug: "chapter-28-lambda-expressions/28-4-builtin-functional-interfaces-javautilfunction",
            },
            {
              label: "28.4.1 Predicate, function, consumer, supplier",
              translations: {
                fr: "28.4.1 Predicate, function, consumer, supplier",
              },
              slug: "chapter-28-lambda-expressions/28-4-1-predicate-function-consumer-supplier",
            },
            {
              label: "28.4.2 Primitive specializations (intpredicate, etc.)",
              translations: {
                fr: "28.4.2 Spécialisations primitives (intpredicate, etc.)",
              },
              slug: "chapter-28-lambda-expressions/28-4-2-primitive-specializations-intpredicate-etc",
            },
            {
              label: "28.5 Variable capture (effectively final)",
              translations: {
                fr: "28.5 Capture de variables (effectively final)",
              },
              slug: "chapter-28-lambda-expressions/28-5-variable-capture-effectively-final",
            },
          ],
        },
        {
          label: "29 - Stream API",
          translations: {
            fr: "29 - Stream API",
          },
          collapsed: true,
          items: [
            {
              label: "29.1 Creating streams (from collections, arrays, files, stream.of, generate, iterate)",
              translations: {
                fr: "29.1 Création de streams (depuis collections, tableaux, fichiers, stream.of, generate, iterate)",
              },
              slug: "chapter-29-stream-api/29-1-creating-streams-from-collections-arrays-files-streamof-generate-iterate",
            },
            {
              label: "29.2 Intermediate operations",
              translations: {
                fr: "29.2 Opérations intermédiaires",
              },
              slug: "chapter-29-stream-api/29-2-intermediate-operations",
            },
            {
              label: "29.2.1 Filter, map, flatmap, distinct, sorted, peek, limit, skip",
              translations: {
                fr: "29.2.1 Filter, map, flatmap, distinct, sorted, peek, limit, skip",
              },
              slug: "chapter-29-stream-api/29-2-1-filter-map-flatmap-distinct-sorted-peek-limit-skip",
            },
            {
              label: "29.3 Terminal operations",
              translations: {
                fr: "29.3 Opérations terminales",
              },
              slug: "chapter-29-stream-api/29-3-terminal-operations",
            },
            {
              label: "29.3.1 Foreach, toarray, reduce, collect, min, max, count, anymatch, allmatch, nonematch, findfirst, findany",
              translations: {
                fr: "29.3.1 Foreach, toarray, reduce, collect, min, max, count, anymatch, allmatch, nonematch, findfirst, findany",
              },
              slug: "chapter-29-stream-api/29-3-1-foreach-toarray-reduce-collect-min-max-count-anymatch-allmatch-nonematch-findfirst-findany",
            },
            {
              label: "29.4 Collectors (tolist, toset, tomap, groupingby, partitioningby, joining, summarizingint, etc.)",
              translations: {
                fr: "29.4 Collecteurs (tolist, toset, tomap, groupingby, partitioningby, joining, summarizingint, etc.)",
              },
              slug: "chapter-29-stream-api/29-4-collectors-tolist-toset-tomap-groupingby-partitioningby-joining-summarizingint-etc",
            },
            {
              label: "29.5 Parallel streams",
              translations: {
                fr: "29.5 Streams parallèles",
              },
              slug: "chapter-29-stream-api/29-5-parallel-streams",
            },
            {
              label: "29.6 Stream performance considerations",
              translations: {
                fr: "29.6 Considérations de performance",
              },
              slug: "chapter-29-stream-api/29-6-stream-performance-considerations",
            },
            {
              label: "29.7 Primitive streams (intstream, longstream, doublestream)",
              translations: {
                fr: "29.7 Streams primitifs (intstream, longstream, doublestream)",
              },
              slug: "chapter-29-stream-api/29-7-primitive-streams-intstream-longstream-doublestream",
            },
          ],
        },
        {
          label: "30 - Optional class",
          translations: {
            fr: "30 - Classe optional",
          },
          collapsed: true,
          items: [
            {
              label: "30.1 What is optional?",
              translations: {
                fr: "30.1 Qu’est‑ce que optional ?",
              },
              slug: "chapter-30-optional-class/30-1-what-is-optional",
            },
            {
              label: "30.2 Creating optionals (of, ofnullable, empty)",
              translations: {
                fr: "30.2 Créer des optionals (of, ofnullable, empty)",
              },
              slug: "chapter-30-optional-class/30-2-creating-optionals-of-ofnullable-empty",
            },
            {
              label: "30.3 Optional methods (ispresent, ifpresent, orelse, orelseget, oreelsethrow, map, flatmap, filter)",
              translations: {
                fr: "30.3 Méthodes de optional (ispresent, ifpresent, orelse, orelseget, oreelsethrow, map, flatmap, filter)",
              },
              slug: "chapter-30-optional-class/30-3-optional-methods-ispresent-ifpresent-orelse-orelseget-oreelsethrow-map-flatmap-filter",
            },
            {
              label: "30.4 Best practices (avoid using optional for fields, serialization, etc.)",
              translations: {
                fr: "30.4 Bonnes pratiques (éviter optional pour les champs, sérialisation, etc.)",
              },
              slug: "chapter-30-optional-class/30-4-best-practices-avoid-using-optional-for-fields-serialization-etc",
            },
          ],
        },
        {
          label: "31 - Reflection",
          translations: {
            fr: "31 - Réflexion",
          },
          collapsed: true,
          items: [
            {
              label: "31.1 The class object and class loading",
              translations: {
                fr: "31.1 L’objet class et le chargement des classes",
              },
              slug: "chapter-31-reflection/31-1-the-class-object-and-class-loading",
            },
            {
              label: "31.2 Inspecting classes (getfields, getmethods, getconstructors, getdeclaredfields, etc.)",
              translations: {
                fr: "31.2 Inspecter les classes (getfields, getmethods, getconstructors, getdeclaredfields, etc.)",
              },
              slug: "chapter-31-reflection/31-2-inspecting-classes-getfields-getmethods-getconstructors-getdeclaredfields-etc",
            },
            {
              label: "31.3 Accessing private members (setaccessible)",
              translations: {
                fr: "31.3 Accéder aux membres privés (setaccessible)",
              },
              slug: "chapter-31-reflection/31-3-accessing-private-members-setaccessible",
            },
            {
              label: "31.4 Dynamic invocation (method.invoke)",
              translations: {
                fr: "31.4 Invocation dynamique (method.invoke)",
              },
              slug: "chapter-31-reflection/31-4-dynamic-invocation-methodinvoke",
            },
            {
              label: "31.5 Creating instances dynamically (newinstance)",
              translations: {
                fr: "31.5 Créer des instances dynamiquement (newinstance)",
              },
              slug: "chapter-31-reflection/31-5-creating-instances-dynamically-newinstance",
            },
            {
              label: "31.6 Arrays via reflection",
              translations: {
                fr: "31.6 Tableaux via la réflexion",
              },
              slug: "chapter-31-reflection/31-6-arrays-via-reflection",
            },
            {
              label: "31.7 Reflection and performance",
              translations: {
                fr: "31.7 Réflexion et performance",
              },
              slug: "chapter-31-reflection/31-7-reflection-and-performance",
            },
          ],
        },
        {
          label: "32 - Annotations",
          translations: {
            fr: "32 - Annotations",
          },
          collapsed: true,
          items: [
            {
              label: "32.1 What are annotations?",
              translations: {
                fr: "32.1 Que sont les annotations ?",
              },
              slug: "chapter-32-annotations/32-1-what-are-annotations",
            },
            {
              label: "32.2 Built‑in annotations (@override, @deprecated, @suppresswarnings, @functionalinterface)",
              translations: {
                fr: "32.2 Annotations prédéfinies (@override, @deprecated, @suppresswarnings, @functionalinterface)",
              },
              slug: "chapter-32-annotations/32-2-builtin-annotations-override-deprecated-suppresswarnings-functionalinterface",
            },
            {
              label: "32.3 Meta‑annotations (@retention, @target, @inherited, @documented)",
              translations: {
                fr: "32.3 Méta‑annotations (@retention, @target, @inherited, @documented)",
              },
              slug: "chapter-32-annotations/32-3-metaannotations-retention-target-inherited-documented",
            },
            {
              label: "32.4 Creating custom annotations",
              translations: {
                fr: "32.4 Créer des annotations personnalisées",
              },
              slug: "chapter-32-annotations/32-4-creating-custom-annotations",
            },
            {
              label: "32.5 Processing annotations at runtime (reflection)",
              translations: {
                fr: "32.5 Traiter les annotations à l’exécution (réflexion)",
              },
              slug: "chapter-32-annotations/32-5-processing-annotations-at-runtime-reflection",
            },
            {
              label: "32.6 Annotation processing at compile time (abstractprocessor)",
              translations: {
                fr: "32.6 Traitement des annotations à la compilation (abstractprocessor)",
              },
              slug: "chapter-32-annotations/32-6-annotation-processing-at-compile-time-abstractprocessor",
            },
          ],
        },
        {
          label: "33 - Generics deep dive",
          translations: {
            fr: "33 - Génériques (approfondissement)",
          },
          collapsed: true,
          items: [
            {
              label: "33.1 Type parameters and type arguments",
              translations: {
                fr: "33.1 Paramètres de type et arguments de type",
              },
              slug: "chapter-33-generics-deep-dive/33-1-type-parameters-and-type-arguments",
            },
            {
              label: "33.2 Generic classes and interfaces",
              translations: {
                fr: "33.2 Classes et interfaces génériques",
              },
              slug: "chapter-33-generics-deep-dive/33-2-generic-classes-and-interfaces",
            },
            {
              label: "33.3 Generic methods and constructors",
              translations: {
                fr: "33.3 Méthodes et constructeurs génériques",
              },
              slug: "chapter-33-generics-deep-dive/33-3-generic-methods-and-constructors",
            },
            {
              label: "33.4 Bounded type parameters (extends)",
              translations: {
                fr: "33.4 Paramètres de type bornés (extends)",
              },
              slug: "chapter-33-generics-deep-dive/33-4-bounded-type-parameters-extends",
            },
            {
              label: "33.5 Wildcards (?, ? extends t, ? super t)",
              translations: {
                fr: "33.5 Wildcards (?, ? extends t, ? super t)",
              },
              slug: "chapter-33-generics-deep-dive/33-5-wildcards-extends-t-super-t",
            },
            {
              label: "33.6 Type erasure and bridge methods",
              translations: {
                fr: "33.6 Effacement des types et méthodes bridge",
              },
              slug: "chapter-33-generics-deep-dive/33-6-type-erasure-and-bridge-methods",
            },
            {
              label: "33.7 Restrictions on generics",
              translations: {
                fr: "33.7 Restrictions sur les génériques",
              },
              slug: "chapter-33-generics-deep-dive/33-7-restrictions-on-generics",
            },
            {
              label: "33.8 Wildcard capture and helper methods",
              translations: {
                fr: "33.8 Capture de wildcard et méthodes auxiliaires",
              },
              slug: "chapter-33-generics-deep-dive/33-8-wildcard-capture-and-helper-methods",
            },
          ],
        },
        {
          label: "34 - Modules (java platform module system)",
          translations: {
            fr: "34 - Modules (java platform module system)",
          },
          collapsed: true,
          items: [
            {
              label: "34.1 Introduction to modules",
              translations: {
                fr: "34.1 Introduction aux modules",
              },
              slug: "chapter-34-modules-java-platform-module-system/34-1-introduction-to-modules",
            },
            {
              label: "34.2 Module‑info.java (module, exports, requires, opens, provides, uses)",
              translations: {
                fr: "34.2 Module‑info.java (module, exports, requires, opens, provides, uses)",
              },
              slug: "chapter-34-modules-java-platform-module-system/34-2-moduleinfojava-module-exports-requires-opens-provides-uses",
            },
            {
              label: "34.3 Modular jars",
              translations: {
                fr: "34.3 Jars modulaires",
              },
              slug: "chapter-34-modules-java-platform-module-system/34-3-modular-jars",
            },
            {
              label: "34.4 Service loader pattern (provides ... with ..., serviceloader)",
              translations: {
                fr: "34.4 Pattern service loader (provides ... with ..., serviceloader)",
              },
              slug: "chapter-34-modules-java-platform-module-system/34-4-service-loader-pattern-provides-with-serviceloader",
            },
            {
              label: "34.5 Migration and unnamed modules",
              translations: {
                fr: "34.5 Migration et modules non nommés",
              },
              slug: "chapter-34-modules-java-platform-module-system/34-5-migration-and-unnamed-modules",
            },
          ],
        },
        {
          label: "35 - JVM internals and performance",
          translations: {
            fr: "35 - Internes de la JVM et performance",
          },
          collapsed: true,
          items: [
            {
              label: "35.1 JVM architecture (class loader, runtime data areas, execution engine)",
              translations: {
                fr: "35.1 Architecture de la JVM (chargeur de classes, zones de données runtime, moteur d’exécution)",
              },
              slug: "chapter-35-jvm-internals-and-performance/35-1-jvm-architecture-class-loader-runtime-data-areas-execution-engine",
            },
            {
              label: "35.2 Garbage collection",
              translations: {
                fr: "35.2 Ramasse‑miettes (garbage collection)",
              },
              slug: "chapter-35-jvm-internals-and-performance/35-2-garbage-collection",
            },
            {
              label: "35.2.1 Gc algorithms (mark‑sweep, copying, mark‑compact)",
              translations: {
                fr: "35.2.1 Algorithmes gc (mark‑sweep, copying, mark‑compact)",
              },
              slug: "chapter-35-jvm-internals-and-performance/35-2-1-gc-algorithms-marksweep-copying-markcompact",
            },
            {
              label: "35.2.2 Generational gc",
              translations: {
                fr: "35.2.2 Gc générationnel",
              },
              slug: "chapter-35-jvm-internals-and-performance/35-2-2-generational-gc",
            },
            {
              label: "35.2.3 Gc implementations (serial, parallel, cms, g1, zgc, shenandoah)",
              translations: {
                fr: "35.2.3 Implémentations gc (serial, parallel, cms, g1, zgc, shenandoah)",
              },
              slug: "chapter-35-jvm-internals-and-performance/35-2-3-gc-implementations-serial-parallel-cms-g1-zgc-shenandoah",
            },
            {
              label: "35.3 JVM tuning (heap size, gc logging, etc.)",
              translations: {
                fr: "35.3 Réglage de la JVM (taille du tas, journalisation gc, etc.)",
              },
              slug: "chapter-35-jvm-internals-and-performance/35-3-jvm-tuning-heap-size-gc-logging-etc",
            },
            {
              label: "35.4 Bytecode and class file structure",
              translations: {
                fr: "35.4 Bytecode et structure des fichiers de classe",
              },
              slug: "chapter-35-jvm-internals-and-performance/35-4-bytecode-and-class-file-structure",
            },
            {
              label: "35.5 Just‑in‑time (jit) compilation",
              translations: {
                fr: "35.5 Compilation just‑in‑time (jit)",
              },
              slug: "chapter-35-jvm-internals-and-performance/35-5-justintime-jit-compilation",
            },
            {
              label: "35.6 Profiling and monitoring (jconsole, jvisualvm,Java flight recorder, mission control)",
              translations: {
                fr: "35.6 Profilage et surveillance (jconsole, jvisualvm,Java flight recorder, mission control)",
              },
              slug: "chapter-35-jvm-internals-and-performance/35-6-profiling-and-monitoring-jconsole-jvisualvm-java-flight-recorder-mission-control",
            },
          ],
        },
        {
          label: "36 - Security",
          translations: {
            fr: "36 - Sécurité",
          },
          collapsed: true,
          items: [
            {
              label: "36.1 Java security model (sandbox, permissions)",
              translations: {
                fr: "36.1 Modèle de sécuritéJava (sandbox, permissions)",
              },
              slug: "chapter-36-security/36-1-java-security-model-sandbox-permissions",
            },
            {
              label: "36.2 Class loaders and security",
              translations: {
                fr: "36.2 Chargeurs de classes et sécurité",
              },
              slug: "chapter-36-security/36-2-class-loaders-and-security",
            },
            {
              label: "36.3 Security manager (deprecated) and policy files",
              translations: {
                fr: "36.3 Security manager (obsolète) et fichiers de stratégie",
              },
              slug: "chapter-36-security/36-3-security-manager-deprecated-and-policy-files",
            },
            {
              label: "36.4 Cryptography (java.security, jca, jce)",
              translations: {
                fr: "36.4 Cryptographie (java.security, jca, jce)",
              },
              slug: "chapter-36-security/36-4-cryptography-javasecurity-jca-jce",
            },
            {
              label: "36.5 Ssl/tls (javax.net.ssl)",
              translations: {
                fr: "36.5 Ssl/tls (javax.net.ssl)",
              },
              slug: "chapter-36-security/36-5-ssltls-javaxnetssl",
            },
            {
              label: "36.6 Authentication and authorization (jaas)",
              translations: {
                fr: "36.6 Authentification et autorisation (jaas)",
              },
              slug: "chapter-36-security/36-6-authentication-and-authorization-jaas",
            },
            {
              label: "36.7 Secure coding guidelines (input validation, escaping, SQL injection prevention)",
              translations: {
                fr: "36.7 Directives de codage sécurisé (validation des entrées, échappement, prévention des injections SQL)",
              },
              slug: "chapter-36-security/36-7-secure-coding-guidelines-input-validation-escaping-sql-injection-prevention",
            },
          ],
        },
        {
          label: "37 - Internationalization (i18n)",
          translations: {
            fr: "37 - Internationalisation (i18n)",
          },
          collapsed: true,
          items: [
            {
              label: "37.1 Locale class",
              translations: {
                fr: "37.1 Classe locale",
              },
              slug: "chapter-37-internationalization-i18n/37-1-locale-class",
            },
            {
              label: "37.2 Resourcebundle and properties files",
              translations: {
                fr: "37.2 Resourcebundle et fichiers properties",
              },
              slug: "chapter-37-internationalization-i18n/37-2-resourcebundle-and-properties-files",
            },
            {
              label: "37.3 Number and currency formatting (numberformat)",
              translations: {
                fr: "37.3 Formatage des nombres et devises (numberformat)",
              },
              slug: "chapter-37-internationalization-i18n/37-3-number-and-currency-formatting-numberformat",
            },
            {
              label: "37.4 Date and time formatting (dateformat, datetimeformatter)",
              translations: {
                fr: "37.4 Formatage des dates et heures (dateformat, datetimeformatter)",
              },
              slug: "chapter-37-internationalization-i18n/37-4-date-and-time-formatting-dateformat-datetimeformatter",
            },
            {
              label: "37.5 Messageformat and choiceformat",
              translations: {
                fr: "37.5 Messageformat et choiceformat",
              },
              slug: "chapter-37-internationalization-i18n/37-5-messageformat-and-choiceformat",
            },
            {
              label: "37.6 Unicode and character encoding",
              translations: {
                fr: "37.6 Unicode et encodage des caractères",
              },
              slug: "chapter-37-internationalization-i18n/37-6-unicode-and-character-encoding",
            },
          ],
        },
        {
          label: "38 - Networking",
          translations: {
            fr: "38 - Réseau",
          },
          collapsed: true,
          items: [
            {
              label: "38.1 Socket programming (java.net.socket, serversocket)",
              translations: {
                fr: "38.1 Programmation socket (java.net.socket, serversocket)",
              },
              slug: "chapter-38-networking/38-1-socket-programming-javanetsocket-serversocket",
            },
            {
              label: "38.2 URL and urlconnection (httpurlconnection)",
              translations: {
                fr: "38.2 URL et urlconnection (httpurlconnection)",
              },
              slug: "chapter-38-networking/38-2-url-and-urlconnection-httpurlconnection",
            },
            {
              label: "38.3 Datagram sockets (udp)",
              translations: {
                fr: "38.3 Sockets datagram (udp)",
              },
              slug: "chapter-38-networking/38-3-datagram-sockets-udp",
            },
            {
              label: "38.4 Inetaddress",
              translations: {
                fr: "38.4 Inetaddress",
              },
              slug: "chapter-38-networking/38-4-inetaddress",
            },
            {
              label: "38.5 HTTP client (java 11+)",
              translations: {
                fr: "38.5 HTTP client (java 11+)",
              },
              slug: "chapter-38-networking/38-5-http-client-java-11",
            },
            {
              label: "38.5.1 Httpclient, httprequest, httpresponse",
              translations: {
                fr: "38.5.1 Httpclient, httprequest, httpresponse",
              },
              slug: "chapter-38-networking/38-5-1-httpclient-httprequest-httpresponse",
            },
            {
              label: "38.5.2 Synchronous and asynchronous requests",
              translations: {
                fr: "38.5.2 Requêtes synchrones et asynchrones",
              },
              slug: "chapter-38-networking/38-5-2-synchronous-and-asynchronous-requests",
            },
            {
              label: "38.5.3 HTTP/2 support",
              translations: {
                fr: "38.5.3 Support HTTP/2",
              },
              slug: "chapter-38-networking/38-5-3-http2-support",
            },
            {
              label: "38.6 Rmi (remote method invocation) – overview",
              translations: {
                fr: "38.6 Rmi (remote method invocation) – aperçu",
              },
              slug: "chapter-38-networking/38-6-rmi-remote-method-invocation-overview",
            },
          ],
        },
        {
          label: "39 - Database access (JDBC)",
          translations: {
            fr: "39 - Accès aux bases de données (JDBC)",
          },
          collapsed: true,
          items: [
            {
              label: "39.1 JDBC architecture",
              translations: {
                fr: "39.1 Architecture JDBC",
              },
              slug: "chapter-39-database-access-jdbc/39-1-jdbc-architecture",
            },
            {
              label: "39.2 Connecting to a database (drivermanager, datasource)",
              translations: {
                fr: "39.2 Connexion à une base de données (drivermanager, datasource)",
              },
              slug: "chapter-39-database-access-jdbc/39-2-connecting-to-a-database-drivermanager-datasource",
            },
            {
              label: "39.3 Statement, preparedstatement, callablestatement",
              translations: {
                fr: "39.3 Statement, preparedstatement, callablestatement",
              },
              slug: "chapter-39-database-access-jdbc/39-3-statement-preparedstatement-callablestatement",
            },
            {
              label: "39.4 Resultset and rowset",
              translations: {
                fr: "39.4 Resultset et rowset",
              },
              slug: "chapter-39-database-access-jdbc/39-4-resultset-and-rowset",
            },
            {
              label: "39.5 Transactions (commit, rollback, savepoints)",
              translations: {
                fr: "39.5 Transactions (commit, rollback, savepoints)",
              },
              slug: "chapter-39-database-access-jdbc/39-5-transactions-commit-rollback-savepoints",
            },
            {
              label: "39.6 Connection pooling (hikaricp, etc.)",
              translations: {
                fr: "39.6 Pool de connexions (hikaricp, etc.)",
              },
              slug: "chapter-39-database-access-jdbc/39-6-connection-pooling-hikaricp-etc",
            },
            {
              label: "39.7 Orm frameworks (jpa, hibernate) – overview",
              translations: {
                fr: "39.7 Frameworks orm (jpa, hibernate) – aperçu",
              },
              slug: "chapter-39-database-access-jdbc/39-7-orm-frameworks-jpa-hibernate-overview",
            },
          ],
        },
        {
          label: "40 - Java for enterprise (overview)",
          translations: {
            fr: "40 - Java pour l’entreprise (aperçu)",
          },
          collapsed: true,
          items: [
            {
              label: "40.1 Servlets and jsp",
              translations: {
                fr: "40.1 Servlets et jsp",
              },
              slug: "chapter-40-java-for-enterprise-overview/40-1-servlets-and-jsp",
            },
            {
              label: "40.2 Spring framework (core, boot, mvc)",
              translations: {
                fr: "40.2 Spring framework (core, boot, mvc)",
              },
              slug: "chapter-40-java-for-enterprise-overview/40-2-spring-framework-core-boot-mvc",
            },
            {
              label: "40.3 Java ee / jakarta ee (ejb, jms, cdi, jta)",
              translations: {
                fr: "40.3 Java ee / jakarta ee (ejb, jms, cdi, jta)",
              },
              slug: "chapter-40-java-for-enterprise-overview/40-3-java-ee-jakarta-ee-ejb-jms-cdi-jta",
            },
            {
              label: "40.4 Microservices (spring cloud, micronaut, quarkus)",
              translations: {
                fr: "40.4 Microservices (spring cloud, micronaut, quarkus)",
              },
              slug: "chapter-40-java-for-enterprise-overview/40-4-microservices-spring-cloud-micronaut-quarkus",
            },
            {
              label: "40.5 Build tools (maven, gradle)",
              translations: {
                fr: "40.5 Outils de construction (maven, gradle)",
              },
              slug: "chapter-40-java-for-enterprise-overview/40-5-build-tools-maven-gradle",
            },
          ],
        },
        {
          label: "41 - Unit testing with junit",
          translations: {
            fr: "41 - Tests unitaires avec junit",
          },
          collapsed: true,
          items: [
            {
              label: "41.1 Junit 5 (jupiter)",
              translations: {
                fr: "41.1 Junit 5 (jupiter)",
              },
              slug: "chapter-41-unit-testing-with-junit/41-1-junit-5-jupiter",
            },
            {
              label: "41.2 Test lifecycle (@beforeeach, @aftereach, @beforeall, @afterall)",
              translations: {
                fr: "41.2 Cycle de vie des tests (@beforeeach, @aftereach, @beforeall, @afterall)",
              },
              slug: "chapter-41-unit-testing-with-junit/41-2-test-lifecycle-beforeeach-aftereach-beforeall-afterall",
            },
            {
              label: "41.3 Assertions (assertequals, asserttrue, assertthrows, etc.)",
              translations: {
                fr: "41.3 Assertions (assertequals, asserttrue, assertthrows, etc.)",
              },
              slug: "chapter-41-unit-testing-with-junit/41-3-assertions-assertequals-asserttrue-assertthrows-etc",
            },
            {
              label: "41.4 Assumptions (assumetrue)",
              translations: {
                fr: "41.4 Hypothèses (assumetrue)",
              },
              slug: "chapter-41-unit-testing-with-junit/41-4-assumptions-assumetrue",
            },
            {
              label: "41.5 Parameterized tests",
              translations: {
                fr: "41.5 Tests paramétrés",
              },
              slug: "chapter-41-unit-testing-with-junit/41-5-parameterized-tests",
            },
            {
              label: "41.6 Repeated tests",
              translations: {
                fr: "41.6 Tests répétés",
              },
              slug: "chapter-41-unit-testing-with-junit/41-6-repeated-tests",
            },
            {
              label: "41.7 Test suites",
              translations: {
                fr: "41.7 Suites de tests",
              },
              slug: "chapter-41-unit-testing-with-junit/41-7-test-suites",
            },
            {
              label: "41.8 Mocking with mockito",
              translations: {
                fr: "41.8 Mocking avec mockito",
              },
              slug: "chapter-41-unit-testing-with-junit/41-8-mocking-with-mockito",
            },
            {
              label: "41.8.1 Creating mocks",
              translations: {
                fr: "41.8.1 Créer des mocks",
              },
              slug: "chapter-41-unit-testing-with-junit/41-8-1-creating-mocks",
            },
            {
              label: "41.8.2 Stubbing and verification",
              translations: {
                fr: "41.8.2 Stubbing et vérification",
              },
              slug: "chapter-41-unit-testing-with-junit/41-8-2-stubbing-and-verification",
            },
            {
              label: "41.8.3 Argument matchers",
              translations: {
                fr: "41.8.3 Matchers d’arguments",
              },
              slug: "chapter-41-unit-testing-with-junit/41-8-3-argument-matchers",
            },
          ],
        },
        {
          label: "42 - Debugging and logging",
          translations: {
            fr: "42 - Débogage et journalisation",
          },
          collapsed: true,
          items: [
            {
              label: "42.1 Debugging with ides (breakpoints, step over/into, evaluate)",
              translations: {
                fr: "42.1 Débogage avec les ide (points d’arrêt, pas à pas, évaluation)",
              },
              slug: "chapter-42-debugging-and-logging/42-1-debugging-with-ides-breakpoints-step-overinto-evaluate",
            },
            {
              label: "42.2 Logging frameworks (java.util.logging, log4j, slf4j, logback)",
              translations: {
                fr: "42.2 Frameworks de journalisation (java.util.logging, log4j, slf4j, logback)",
              },
              slug: "chapter-42-debugging-and-logging/42-2-logging-frameworks-javautillogging-log4j-slf4j-logback",
            },
            {
              label: "42.3 Configuration and appenders",
              translations: {
                fr: "42.3 Configuration et appenders",
              },
              slug: "chapter-42-debugging-and-logging/42-3-configuration-and-appenders",
            },
            {
              label: "42.4 Best practices for logging",
              translations: {
                fr: "42.4 Bonnes pratiques pour la journalisation",
              },
              slug: "chapter-42-debugging-and-logging/42-4-best-practices-for-logging",
            },
            {
              label: "42.5 Using jdb (java debugger)",
              translations: {
                fr: "42.5 Utilisation de jdb (java debugger)",
              },
              slug: "chapter-42-debugging-and-logging/42-5-using-jdb-java-debugger",
            },
          ],
        },
        {
          label: "43 - Code quality and linting",
          translations: {
            fr: "43 - Qualité du code et linting",
          },
          collapsed: true,
          items: [
            {
              label: "43.1 Coding conventions (java code conventions)",
              translations: {
                fr: "43.1 Conventions de codage (java code conventions)",
              },
              slug: "chapter-43-code-quality-and-linting/43-1-coding-conventions-java-code-conventions",
            },
            {
              label: "43.2 Static analysis tools (checkstyle, pmd, spotbugs)",
              translations: {
                fr: "43.2 Outils d’analyse statique (checkstyle, pmd, spotbugs)",
              },
              slug: "chapter-43-code-quality-and-linting/43-2-static-analysis-tools-checkstyle-pmd-spotbugs",
            },
            {
              label: "43.3 Code formatters (intellij formatter, eclipse formatter)",
              translations: {
                fr: "43.3 Formateurs de code (formateur intellij, formateur eclipse)",
              },
              slug: "chapter-43-code-quality-and-linting/43-3-code-formatters-intellij-formatter-eclipse-formatter",
            },
            {
              label: "43.4 Linting in ides",
              translations: {
                fr: "43.4 Linting dans les ide",
              },
              slug: "chapter-43-code-quality-and-linting/43-4-linting-in-ides",
            },
            {
              label: "43.5 Continuous integration (jenkins, github actions)",
              translations: {
                fr: "43.5 Intégration continue (jenkins, github actions)",
              },
              slug: "chapter-43-code-quality-and-linting/43-5-continuous-integration-jenkins-github-actions",
            },
          ],
        },
        {
          label: "44 - Design patterns inJava",
          translations: {
            fr: "44 - Patrons de conception enJava",
          },
          collapsed: true,
          items: [
            {
              label: "44.1 Creational patterns",
              translations: {
                fr: "44.1 Patrons de création",
              },
              slug: "chapter-44-design-patterns-in-java/44-1-creational-patterns",
            },
            {
              label: "44.1.1 Singleton (classic and enum‑based)",
              translations: {
                fr: "44.1.1 Singleton (classique et basé sur enum)",
              },
              slug: "chapter-44-design-patterns-in-java/44-1-1-singleton-classic-and-enumbased",
            },
            {
              label: "44.1.2 Factory method",
              translations: {
                fr: "44.1.2 Factory method",
              },
              slug: "chapter-44-design-patterns-in-java/44-1-2-factory-method",
            },
            {
              label: "44.1.3 Abstract factory",
              translations: {
                fr: "44.1.3 Abstract factory",
              },
              slug: "chapter-44-design-patterns-in-java/44-1-3-abstract-factory",
            },
            {
              label: "44.1.4 Builder",
              translations: {
                fr: "44.1.4 Builder",
              },
              slug: "chapter-44-design-patterns-in-java/44-1-4-builder",
            },
            {
              label: "44.1.5 Prototype",
              translations: {
                fr: "44.1.5 Prototype",
              },
              slug: "chapter-44-design-patterns-in-java/44-1-5-prototype",
            },
            {
              label: "44.2 Structural patterns",
              translations: {
                fr: "44.2 Patrons structurels",
              },
              slug: "chapter-44-design-patterns-in-java/44-2-structural-patterns",
            },
            {
              label: "44.2.1 Adapter",
              translations: {
                fr: "44.2.1 Adapter",
              },
              slug: "chapter-44-design-patterns-in-java/44-2-1-adapter",
            },
            {
              label: "44.2.2 Decorator",
              translations: {
                fr: "44.2.2 Decorator",
              },
              slug: "chapter-44-design-patterns-in-java/44-2-2-decorator",
            },
            {
              label: "44.2.3 Proxy (dynamic proxies)",
              translations: {
                fr: "44.2.3 Proxy (proxies dynamiques)",
              },
              slug: "chapter-44-design-patterns-in-java/44-2-3-proxy-dynamic-proxies",
            },
            {
              label: "44.2.4 Facade",
              translations: {
                fr: "44.2.4 Facade",
              },
              slug: "chapter-44-design-patterns-in-java/44-2-4-facade",
            },
            {
              label: "44.2.5 Bridge",
              translations: {
                fr: "44.2.5 Bridge",
              },
              slug: "chapter-44-design-patterns-in-java/44-2-5-bridge",
            },
            {
              label: "44.2.6 Composite",
              translations: {
                fr: "44.2.6 Composite",
              },
              slug: "chapter-44-design-patterns-in-java/44-2-6-composite",
            },
            {
              label: "44.2.7 Flyweight",
              translations: {
                fr: "44.2.7 Flyweight",
              },
              slug: "chapter-44-design-patterns-in-java/44-2-7-flyweight",
            },
            {
              label: "44.3 Behavioral patterns",
              translations: {
                fr: "44.3 Patrons comportementaux",
              },
              slug: "chapter-44-design-patterns-in-java/44-3-behavioral-patterns",
            },
            {
              label: "44.3.1 Observer (observable, observer – deprecated, propertychangelistener)",
              translations: {
                fr: "44.3.1 Observer (observable, observer – obsolète, propertychangelistener)",
              },
              slug: "chapter-44-design-patterns-in-java/44-3-1-observer-observable-observer-deprecated-propertychangelistener",
            },
            {
              label: "44.3.2 Strategy",
              translations: {
                fr: "44.3.2 Strategy",
              },
              slug: "chapter-44-design-patterns-in-java/44-3-2-strategy",
            },
            {
              label: "44.3.3 Command",
              translations: {
                fr: "44.3.3 Command",
              },
              slug: "chapter-44-design-patterns-in-java/44-3-3-command",
            },
            {
              label: "44.3.4 Template method",
              translations: {
                fr: "44.3.4 Template method",
              },
              slug: "chapter-44-design-patterns-in-java/44-3-4-template-method",
            },
            {
              label: "44.3.5 Iterator",
              translations: {
                fr: "44.3.5 Iterator",
              },
              slug: "chapter-44-design-patterns-in-java/44-3-5-iterator",
            },
            {
              label: "44.3.6 Mediator",
              translations: {
                fr: "44.3.6 Mediator",
              },
              slug: "chapter-44-design-patterns-in-java/44-3-6-mediator",
            },
            {
              label: "44.3.7 Memento",
              translations: {
                fr: "44.3.7 Memento",
              },
              slug: "chapter-44-design-patterns-in-java/44-3-7-memento",
            },
            {
              label: "44.3.8 State",
              translations: {
                fr: "44.3.8 State",
              },
              slug: "chapter-44-design-patterns-in-java/44-3-8-state",
            },
            {
              label: "44.3.9 Visitor",
              translations: {
                fr: "44.3.9 Visitor",
              },
              slug: "chapter-44-design-patterns-in-java/44-3-9-visitor",
            },
            {
              label: "44.3.10 Chain of responsibility",
              translations: {
                fr: "44.3.10 Chain of responsibility",
              },
              slug: "chapter-44-design-patterns-in-java/44-3-10-chain-of-responsibility",
            },
          ],
        },
        {
          label: "45 - Java memory leaks and profiling",
          translations: {
            fr: "45 - Fuites de mémoire et profilage",
          },
          collapsed: true,
          items: [
            {
              label: "45.1 Common memory leak patterns",
              translations: {
                fr: "45.1 Motifs courants de fuites mémoire",
              },
              slug: "chapter-45-java-memory-leaks-and-profiling/45-1-common-memory-leak-patterns",
            },
            {
              label: "45.2 Using visualvm, jprofiler, yourkit",
              translations: {
                fr: "45.2 Utilisation de visualvm, jprofiler, yourkit",
              },
              slug: "chapter-45-java-memory-leaks-and-profiling/45-2-using-visualvm-jprofiler-yourkit",
            },
            {
              label: "45.3 Heap dumps and analysis (eclipse memory analyzer)",
              translations: {
                fr: "45.3 Dumps de tas et analyse (eclipse memory analyzer)",
              },
              slug: "chapter-45-java-memory-leaks-and-profiling/45-3-heap-dumps-and-analysis-eclipse-memory-analyzer",
            },
            {
              label: "45.4 Garbage collection logs analysis",
              translations: {
                fr: "45.4 Analyse des journaux gc",
              },
              slug: "chapter-45-java-memory-leaks-and-profiling/45-4-garbage-collection-logs-analysis",
            },
            {
              label: "45.5 Thread dumps and deadlock detection",
              translations: {
                fr: "45.5 Dumps de threads et détection d’interblocage",
              },
              slug: "chapter-45-java-memory-leaks-and-profiling/45-5-thread-dumps-and-deadlock-detection",
            },
          ],
        },
      ],
    }),
  ],
});
