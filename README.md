```
StockComedy-Admin/
│
├── index.html                   # Login page (default page)
│
├── pages/                       # Folder for individual HTML pages
│   ├── dashboard.html           # Dashboard page (post-login)
│   ├── ipo-list.html            # IPO list page (view all IPOs)
│   ├── add-ipo.html             # Add IPO page (form for adding a new IPO)
│   ├── edit-ipo.html            # Edit IPO page (form for editing an existing IPO)
│
├── assets/                      # Folder for static assets (CSS, JS, images)
│   ├── css/                     # Folder for CSS files
│   │   ├── global.css           # Global styles (layout, typography, etc.)
│   │   ├── login.css            # Login page styles
│   │   ├── dashboard.css        # Dashboard-specific styles
│   │   ├── ipo-list.css         # IPO list-specific styles
│   │   ├── add-ipo.css          # Add IPO page styles
│   │   ├── edit-ipo.css         # Edit IPO page styles
│
│   ├── js/                      # Folder for JavaScript files
│   │   ├── global.js            # Global interactions (e.g., navigation, auth checks)
│   │   ├── login.js             # Login functionality (authentication)
│   │   ├── dashboard.js         # Dashboard interactions (analytics, stats)
│   │   ├── ipo-list.js          # IPO list interactions (loading, filtering, deleting IPOs)
│   │   ├── add-ipo.js           # Form interactions for adding a new IPO
│   │   ├── edit-ipo.js          # Form interactions for editing an IPO
│
│   ├── images/                  # Folder for image files (logos, icons, etc.)
│   │   ├── logo.png             # Main logo image
│   │   ├── login-bg.jpg         # Background image for login page
│   │   ├── dashboard-icon.png   # Icon for dashboard
│   │   ├── ipo-icon.png         # Icon for IPO section
│
├── firebase/                    # Folder for Firebase configuration and services
│   ├── config.js                # Firebase configuration settings
│   ├── auth.js                  # Firebase authentication logic
│   ├── ipoService.js            # Firebase CRUD logic for IPO data
│
├── backend/                     # Folder for Node.js backend
│   ├── server.js                # Main server file using Express (handles API requests)
│   ├── controllers/             # Folder for handling API logic
│   │   ├── authController.js    # Controller for authentication logic
│   │   ├── ipoController.js     # Controller for IPO-related API logic
│   ├── routes/                  # Folder for API route definitions
│   │   ├── authRoutes.js        # Routes for authentication
│   │   ├── ipoRoutes.js         # Routes for IPO-related requests
│   ├── services/                # Folder for services handling Firebase data operations
│   │   ├── firebaseService.js   # Firebase CRUD logic used in backend
│   ├── utils/                   # Folder for utility functions
│   │   ├── validator.js         # Validation logic for input data
│
├── .gitignore                   # Git ignore file (to exclude node_modules, etc.)
├── package.json                 # Node.js dependencies and project configuration
└── README.md                    # Project documentation (setup, usage, etc.)
```
