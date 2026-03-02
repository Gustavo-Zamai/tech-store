# 🛒 TechStore --- Web Modernization of a Java Swing Desktop System

> A full architectural reinterpretation of a legacy Java Swing desktop
> retail management system, rebuilt as a modular and scalable web
> application using React and TypeScript.

------------------------------------------------------------------------

## 📌 Overview

**TechStore** is a web-based retail management system designed as a
modernization of a previously developed desktop application built with
Java + Swing.

This project simulates a real-world legacy system migration scenario,
focusing on:

-   Architectural restructuring
-   Domain-driven organization
-   Frontend scalability
-   Business-process modeling
-   Separation of concerns

The goal was not just to recreate the UI --- but to redesign the system
with modern engineering principles.

------------------------------------------------------------------------

## 🏗 Project Architecture

The application follows a **domain-based modular structure**, separating
concerns into independent business areas.

    src/
     ├── components/      # Reusable UI components
     ├── pages/           # Domain modules (Clients, Sales, Login, Home)
     ├── services/        # Business services (authentication)
     ├── utils/           # Utility functions
     ├── assets/          # Static resources
     └── App.tsx          # Application root

### 📦 Domain Modules

    pages/
     ├── Clients/
     ├── Sales/
     ├── Login/
     └── Home/

Each domain contains its own pages and types, promoting scalability and
maintainability.

------------------------------------------------------------------------

## 🧠 Domain Modeling

The system was redesigned with relational modeling principles in mind:

    Client 1:N Sale
    Sale 1:N SaleItem
    SaleItem N:1 Product

Even though the current implementation uses mock data, the architecture
is prepared for backend integration using REST APIs.

------------------------------------------------------------------------

## 🚀 Tech Stack

### 🌐 Web Version

-   React
-   TypeScript
-   React Router
-   Component-based architecture
-   Modular folder structure

### 🖥 Original Desktop Version

-   Java
-   Swing
-   JDBC
-   Relational database

------------------------------------------------------------------------

## 🎯 Implemented Features

### 🔐 Authentication

-   Login page
-   Login service abstraction
-   Logout service
-   Session handling structure prepared

### 👥 Clients Module

-   Clients listing page
-   Create new client page
-   Edit client page
-   Modular type definitions
-   Dedicated routing

### 💰 Sales Module

-   New sale creation
-   Multi-item sales logic
-   Automatic total calculation
-   Sales listing page
-   Payment method handling structure

### 🏠 Home & Layout

-   Layout abstraction
-   Header & Footer components
-   Navigation menu
-   Reusable Card components
-   Custom Button & Input components

------------------------------------------------------------------------

## 🔄 Desktop → Web Modernization Strategy

This project demonstrates:

-   Migration from monolithic desktop UI to modular web architecture
-   Decoupling UI from business logic
-   Transition from event-driven Swing components to declarative React
    architecture
-   Refactoring UI flows into reusable components
-   Preparing for REST-based backend communication

This is a practical example of legacy system evolution.

------------------------------------------------------------------------

## 🖥 Sales Business Flow

1.  Select client\
2.  Add products with quantity\
3.  Automatic subtotal and total calculation\
4.  Define payment method\
5.  Finalize sale

> The frontend performs calculations for user experience, but final
> validation is designed to be handled by the backend in future
> integration (security best practice).

------------------------------------------------------------------------

## 🛠 How to Run the Project

``` bash
git clone https://github.com/your-username/techstore.git
cd techstore
npm install
npm start
```

------------------------------------------------------------------------

## 📈 Future Improvements (Engineering Roadmap)

-   Backend integration (Spring Boot)
-   Database persistence
-   Stock management
-   Authentication tokens (JWT)
-   Authorization roles
-   Pagination & filtering
-   Sales dashboard with metrics
-   Production deployment

------------------------------------------------------------------------

## 🧪 Architectural Considerations

### Scalability

The modular domain-based structure allows independent evolution of: -
Clients - Sales - Products - Authentication

### Maintainability

Component-level separation and dedicated service layers reduce coupling.

### Security

The structure anticipates: - Server-side validation - Token-based
authentication - Protected routes

------------------------------------------------------------------------

## 🎓 Engineering Goals

This project was built to:

-   Simulate real-world system modernization
-   Strengthen fullstack architectural skills
-   Apply scalable frontend design
-   Build a portfolio-level professional system
-   Demonstrate capability beyond simple CRUD applications

------------------------------------------------------------------------

## Legacy Version

The original desktop version of this system was built using Java Swing.
Repository available at:
https://github.com/Gustavo-Zamai/tech-store-desktop

## 👨‍💻 Author

**Gus Simão Zamai**\
Software Developer (Fullstack Transition)\
Focused on Software Engineering, Architecture & Scalable Systems
