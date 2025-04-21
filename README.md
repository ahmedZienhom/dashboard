# Angular Dashboard Project

[![Angular Version](https://img.shields.io/badge/Angular-19+-dd0031.svg?logo=angular)](https://angular.io/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A responsive admin dashboard application with external API integrations for key analytics, charts, and recent orders table management.

## Features
- 📊 Interactive charts using JSON server data
- 🛠️ Modular component architecture
- 🔒 Route protection with guards
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
│   │   └── interfaces/    # Type definitions
│   │
│   └── app-routing.module.ts # Routing configuration
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

5. Access on `http://localhost:4200`

## Key Components
| Component      | Path                   | Description                      |
|----------------|------------------------|----------------------------------|
| `HeaderNav`    | `/components/header-nav` | Main navigation bar              |
| `Analytics`    | `/components/analytics`  | Data visualization widgets       |
| `RecentOrders` | `/components/recent-orders` | Table of recent orders with pagination |
| `Report`       | `/components/report`     | Report generation interface      |

## API Configuration
### JSON Server
A JSON Server is used for handling chart data. Ensure your dataset is properly placed in the `db.json` file in the root directory. Run the server with the following command:
```bash
json-server --watch db.json
```
This will make the data accessible to the application at runtime.

### DummyJSON
Product data is sourced from DummyJSON's API endpoint. No additional setup is required.

## Responsive Design
The application layout is designed to adapt gracefully to different screen sizes:
- Sidebar collapses or transforms on smaller screens.
- Top navigation adjusts to display user profile, notifications, and search inputs seamlessly.

## License
MIT © Ahmed Zienhom - See [LICENSE](LICENSE) for details

