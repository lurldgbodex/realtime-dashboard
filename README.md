# Real-Time Dashboard
A high performance dashbaord application featuring real-time data visualization, built with modern react patterns and Typescript. This project serves as an advanced learning tool for state management, performance optimization, and architectural best practices.

## Features
- **Real-time data** via WebSockets + GraphQL Subscriptions
- **Advanced state management** with Redux Toolkit (RTK Query) + Zustand
- **Type-safe** React components with TypeScript
- **Optimized rendering** with memoization, code splitting, and virtualization
- **Modular architecture** following feature-sliced design
- **Comprehensive testing** with Jest + React Testing Library
- **CI/CD pipeline with GitHub Actions

## Tech Stack
### Core
- React 18 (with Concurrent Mode)
- TypeScript (stric mode)
- Vite (build tool)
- React Router v6

### State Management
- Redux Toolkit(with RTK Query)
- Zustand (for comparison)
- React Context (for theme/auth)

### Data Layer
- Apollo Client (GraphQL)
- WebSockets (Socket.io)
- REST fallback API

### UI/UX
- Material-UI (MUI) + Emotion
- Chart.js (for visualizations)
- React-Window (for virtualization)

### Testing
- Jest+React Testing Library
- Cypress (E2E)
- MSW (API mocking)

### DevOps
- GitHub Actions CI/CD
- Docker containerization

## Performance Optimizations
1. Code Splitting
    - Route-based lazy loading
    - Dynamic imports for heavy components
2. Memoization
    - React.memo for components
    - useMemo/useCallback for expensive calculations
3. Efficient Data Fetching
    - RTK Query caching
    - WebSocket data streaming
    - Debounced updates
4. Rendering Optimizations
    - Vitualized lists with `react-window`
    - Concurrent Mode transitions

## Getting Started
### prerequisites
- Node.js
- npm

### installation
```bash
git clone https://github.com/lurldgbodex/realtime-dashboard.git
cd realtime-dashboard
npm install
```
### Development
```bash
npm run dev
```
Runs the app in development mode at `http://localhost:5173`

### Production Build
```bash
npm run build
npm run preview
```

### Testing
```bash
npm test        # Unit tests
npm run test:e2e # Cypress E2E
```

## Testing Strategy
|   Test Type      |   Tools       |   Coverage Target |
|  --------------  | ------------  | ----------------- |
| Unit Tests       | Jest + RTL    | 80%+              |
| Integration      | Jest + MSW    | critical paths    |
| E2E              | Cypress       | Key user flows    |
| Performance      | Lighthouse CI | >90 score         |

## API Integration
### Endpoints
- `GET /api/metrics` - Histroical data (RTK Query)
- `POST /api/metrics` - Add new metric
- `ws://localhost:3000 ` - WebSocket real-time stream
- `GRAPHQL /graphql` - Apollo Server endpoint

### Environmental Variables
#### Create `.env` file:
```env
VITE_API_BASE_URL=/api
VITE_WS_URL=ws://localhost:3000
VITE_GRAPHQL_URI=/graphql
```
