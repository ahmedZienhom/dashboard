# Angular Dashboard Project

A responsive admin dashboard application with external API integrations for key analytics, charts, and recent orders table management.

## Features

- 📊 Interactive charts using JSON server data
- 🛠️ Modular component architecture
- 🔒 Route protection with guards and external authentication
- 🔐 Authentication via [ecommerce.routemisr.com](https://ecommerce.routemisr.com/) using JWT
- 📱 Responsive layouts
- 🎨 Customizable UI components
- 🌐 Product data sourced from [DummyJSON](https://dummyjson.com)

## Project Structure

```
dashboard/
├── public/                # Static assets
│   └── images/            # Application images (e.g., avatar, icons)
│
├── db.json                # JSON Server dataset
│
├── src/app/
│   ├── components/        # Reusable components
│   │   ├── analytics/     # Charts & graphs
│   │   ├── dash-board/    # Main dashboard
│   │   ├── header-nav/    # Top navigation
│   │   └── ...            # Other components
│   │
│   ├── core/              # Core functionality
│   │   ├── guards/        # Route protection
│   │   ├── services/      # Data services (API integrations)
│   │   ├── interceptors/  # HTTP interceptors (e.g., add auth tokens)
│   │   ├── interfaces/    # Type definitions
│   │   └── environment/   # Environment configuration (BASE_URL etc.)
│   │
│   ├── layouts/           # Application layouts
│   │   ├── auth-layout/   # Layout for auth-related pages
│   │   └── blank-layout/  # Minimal layout without sidebar/navigation
```

## Quick Start

1. Clone repository:

```bash
git clone https://github.com/yourusername/dashboard.git
cd dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Start JSON Server for chart data:

```bash
json-server --watch db.json
```

4. Start development server:

```bash
ng serve
```

5. Access the application at `http://localhost:4200`

## Authentication

Authentication is handled through an external API:\
**Base URL**: `https://ecommerce.routemisr.com/`

- **Login/Register** using the provided API.
- **JWT** tokens are decoded using `jwt-decode` library to extract user information.
- Tokens are automatically attached to protected API requests using an HTTP Interceptor.
- User session is managed via localStorage.

> **Note:** Make sure you install `jwt-decode`:
>
> ```bash
> npm install jwt-decode
> ```

## Key Components

| Component        | Path                        | Description                            |
| ---------------- | --------------------------- | -------------------------------------- |
| `HeaderNav`      | `/components/header-nav`    | Main navigation bar                    |
| `Analytics`      | `/components/analytics`     | Data visualization widgets             |
| `RecentOrders`   | `/components/recent-orders` | Table of recent orders with pagination |
| `Report`         | `/components/report`        | Report generation interface            |
| `Authentication` | `/components/auth`          | Login, Register and JWT handling       |

## API Configuration

### JSON Server

For handling local chart data (`db.json`):

```bash
json-server --watch db.json
```

Accessible locally during development.

### External API - Ecommerce

Authentication and product management are handled through the Ecommerce API.\
Endpoints (example):

- `/api/v1/auth/signup`
- `/api/v1/auth/signin`
- `/api/v1/products`
- etc.

## Responsive Design

The application layout is fully responsive:

- Sidebar collapses or adapts on smaller screens.
- Top navigation adjusts elements for mobile-friendly UX.

## License

MIT © Ahmed Zienhom - See [LICENSE](LICENSE) for details.
