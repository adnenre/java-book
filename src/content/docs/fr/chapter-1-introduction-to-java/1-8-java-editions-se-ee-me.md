---
title: Éditions de Java (SE, EE, ME)
sidebar:
  order: 8
  label: 1.8 Éditions de Java (SE, EE, ME)
---

# Éditions de Java (SE, EE, ME)

Java est disponible en plusieurs éditions adaptées à différents environnements de développement.

## Java SE (Standard Edition)

**Java SE** est la plateforme de base. Elle comprend :

- Le JDK et le JRE
- Les API de base : `java.lang`, `java.util`, I/O, réseau, etc.
- Les outils de développement

Elle est utilisée pour les applications de bureau, les outils en ligne de commande et comme fondation pour les autres éditions.

**Exemples** : applications GUI avec Swing/JavaFX, bibliothèques côté serveur, utilitaires.

## Java EE (Enterprise Edition) – maintenant Jakarta EE

**Java EE** (renommée **Jakarta EE** après le transfert d’Oracle vers la Fondation Eclipse) ajoute des bibliothèques pour les applications d’entreprise à grande échelle et multi‑niveaux.

Technologies clés :

- Servlets, JSP, JSF (applications web)
- Enterprise JavaBeans (EJB)
- JPA (Java Persistence API)
- JMS (messagerie)
- CDI (injection de dépendances)

**Exemples** : plateformes de commerce électronique, systèmes bancaires, services REST.

## Java ME (Micro Edition)

**Java ME** est un sous‑ensemble de Java SE conçu pour les appareils aux ressources limitées tels que :

- Téléphones mobiles (feature phones)
- Systèmes embarqués
- Objets connectés (IoT)

Il fournit des profils adaptés (par ex. CLDC, MIDP) avec une empreinte réduite et des API spécifiques.

**Exemples** : anciens jeux mobiles, cartes à puce, contrôleurs industriels.

## Relations

- **SE** est la base.
- **EE** étend SE avec des fonctionnalités d’entreprise.
- **ME** est un sous‑ensemble de SE adapté aux petits appareils.

Aujourd’hui, de nombreux développeurs utilisent **Spring Boot** (qui s’exécute sur SE) pour les applications d’entreprise plutôt que les serveurs Java EE traditionnels, mais les concepts sous‑jacents restent pertinents.
