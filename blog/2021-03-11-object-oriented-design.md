---
slug: object-oriented-design
title: Object Oriented Design
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [OO]
---

## Symptoms ob Bad Design

- Rigidity
- Fragility
- Immobility
- Viscosity

### Rigidity

Changes are difficult and painful.

Every change requires cascade of changes in **dependent modules**.

Scope of change is unpredictable.

Your manager has a favorite scope multiplier, usually more than 2.

### Fragility

Closely related to _Rigidity_

You can never predict the impact of the change.

_You never know what will break_.

The "Christmas tree".

## Basic Principles of Object Oriented Design

1. **S**ingle responsibility principle. A class should have only one reason to change.
2. **O**pen-Closed principle. Modules should be open for extension but closed for modification.
3. **L**iskov substitution principle. Basically means that children classes should not break parent's interface.
4. **I**nterface segregation principle.
5. **D**ependency inversion principle. High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend upon details. Details should depend upon abstractions.

### 1. How to Spot single responsibility principle violation

Member groups or even coalitions, boolean flags, hard to name classes, long unit tests, hard to test-double units.

### 2. Open Closed Principle

Design patterns: Visitor, Decorator.

### 3. How to spot Liskov substitution principle violation

Derivative that tries to do less than the base class.

Instanceof checks.

Hiding or stubbing parent methods.

Polymorphic if statements.

### 5. Friends of Dependency inversion principle

Abstractions (Interfaces/Abstract Classes)

Patterns

- Factory, Abstract Factory
- Adapter
- Service Locator
