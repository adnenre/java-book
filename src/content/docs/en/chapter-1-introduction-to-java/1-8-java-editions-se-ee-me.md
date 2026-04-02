---
title: Java editions (SE, EE, ME)
sidebar:
  order: 8
  label: 1.8 Java editions (SE, EE, ME)
---

# Java editions (SE, EE, ME)

Java is available in several editions tailored to different development environments.

## Java SE (Standard Edition)

**Java SE** is the core platform. It includes:

- The JDK and JRE
- Core APIs: `java.lang`, `java.util`, I/O, networking, etc.
- Development tools

It is used for desktop applications, command‑line tools, and as the foundation for other editions.

**Examples**: GUI applications with Swing/JavaFX, server‑side libraries, and utilities.

## Java EE (Enterprise Edition) – now Jakarta EE

**Java EE** (renamed **Jakarta EE** after Oracle transferred it to the Eclipse Foundation) adds libraries for large‑scale, multi‑tier enterprise applications.

Key technologies:

- Servlets, JSP, JSF (web applications)
- Enterprise JavaBeans (EJB)
- JPA (Java Persistence API)
- JMS (messaging)
- CDI (dependency injection)

**Examples**: e‑commerce platforms, banking systems, RESTful services.

## Java ME (Micro Edition)

**Java ME** is a subset of Java SE designed for resource‑constrained devices such as:

- Mobile phones (feature phones)
- Embedded systems
- IoT devices

It provides tailored profiles (e.g., CLDC, MIDP) that offer a smaller footprint and specific APIs.

**Examples**: older mobile games, smart cards, industrial controllers.

## Relationship

- **SE** is the base.
- **EE** extends SE with enterprise features.
- **ME** is a subset of SE adapted for small devices.

Today, many developers use **Spring Boot** (which runs on SE) for enterprise applications instead of traditional Java EE servers, but the underlying concepts remain relevant.
