---
title: Creating jar files
sidebar:
  order: 5
  label: 9.5 Creating jar files
---

A **JAR (Java Archive)** file bundles compiled Java classes, metadata, and resources into a single file. It uses the ZIP format.

**Basic commands**:

**Create a JAR**:

```bash
jar cf myapp.jar -C bin/ .
```

- `c` – create archive
- `f` – specify file name
- `-C` – change directory before adding files

**View contents**:

```bash
jar tf myapp.jar
```

- `t` – table of contents

**Extract**:

```bash
jar xf myapp.jar
```

- `x` – extract

**Create an executable JAR** (with a main class):

1. Create a manifest file `manifest.txt`:

```
Main-Class: com.example.Main
```

2. Build JAR with manifest:

```bash
jar cfm myapp.jar manifest.txt -C bin/ .
```

- `m` – include manifest information

**Run executable JAR**:

```bash
java -jar myapp.jar
```

**Using `jar` with `--main-class` (Java 9+)**:

```bash
jar --create --file myapp.jar --main-class com.example.Main -C bin/ .
```

**Common options**:

| Option   | Description                                  |
| -------- | -------------------------------------------- |
| `-v`     | verbose output                               |
| `-C dir` | change directory                             |
| `-e`     | specify main class (alternative to manifest) |

**Maven/Gradle** typically handle JAR creation automatically.
