# Angular Dashboard Project

[![Angular Version](https://img.shields.io/badge/Angular-19+-dd0031.svg?logo=angular)](https://angular.io/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A responsive dashboard application with local data management and analytics features.

## Features
- 📊 Interactive charts using local JSON data
- 🛠️ Modular component architecture
- 🔒 Route protection with guards
- 📱 Responsive layouts
- 🎨 Customizable UI components

## Project Structure
```
dashboard/
├── public/                # Static assets
│   ├── data/              # JSON datasets
│   └── images/            # Application images
│
├── src/app/
│   ├── components/        # Reusable components
│   │   ├── analytics/     # Charts & graphs
│   │   ├── dash-board/    # Main dashboard
│   │   ├── header-nav/    # Top navigation
│   │   └── ...           # Other components
│   │
│   ├── core/              # Core functionality
│   │   ├── guards/        # Route protection
│   │   ├── services/      # Data services
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

3. Start development server:
```bash
ng serve
```

4. Access on `http://localhost:4200`

## Data Flow
```typescript
// Example data service usage
export class ReportComponent {
  constructor(private dataService: DataService) {}
  
  ngOnInit() {
    this.dataService.getSalesData().subscribe(data => {
      // Handle data
    });
  }
}
```

## Key Components
| Component | Path | Description |
|-----------|------|-------------|
| `HeaderNav` | `/components/header-nav` | Main navigation bar |
| `Analytics` | `/components/analytics` | Data visualization widgets |
| `Report` | `/components/report` | Report generation interface |

## License
MIT © Ahmed Zienhom - See [LICENSE](LICENSE) for details