# 🎭 Playwright Web Testing

## 📌 Overview

This repository contains an **Angular web application** based on the `ngx-admin` template, along with a complete **end-to-end (E2E) testing suite** powered by **Playwright**. It showcases a modern web architecture while following best practices for automation using the **Page Object Model (POM)** pattern.

---

## 🧩 Key Components

- **Angular Application (`src/`)**  
  A feature-rich frontend app built with Angular and the **Nebular UI library**. Includes UI components, pages (dashboard, forms, tables, charts), theme management, and core services.

- **Playwright Tests (`tests/`, `pom/`, `Test Environment/`, `helpers/`)**  
  A modular Playwright test suite for automated E2E testing of the Angular app, structured using the **Page Object Model (POM)** for scalability and maintainability.

---

## 🛠️ Development Setup

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) and npm (or yarn) installed

### 📥 Installation

```bash
# 1. Clone the repository
git clone <repo-url>

# 2. Navigate into the project directory
cd playwright_web_testing

# 3. Install dependencies
npm install --force
```
🚀 Running the Angular Application
```bash
npm start
```
This command runs ng serve (as defined in package.json).
By default, the app is served at http://localhost:4200 — aligned with the baseURL in playwright.config.ts.

🧪 Running Playwright Tests
```bash
# 1. Headless Mode
npx playwright test

# 2. UI Mode
npx playwright test --ui
