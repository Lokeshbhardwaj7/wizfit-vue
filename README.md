📘 WizFit Challenge — Vue.js API Integration

This is a frontend application built using Vue 3 + Vite to integrate with the WizFit Challenge API.
The app displays a list of participating schools, includes a search feature, and shows school logos.

🚀 Features

Fetches school list from the WizFit Challenge API

Dynamic search using debounce

Displays name and logo for each school

Responsive layout with clean UI

Error handling and empty state

Environment-based API configuration

🛠️ Tech Stack

Vue 3 (Composition API)

Vite for fast builds

JavaScript / CSS

REST API Integration

📡 API Reference

Base URL:

https://api.devharlemwizardsinabox.com


Endpoint:

GET /campaign/campaign_school_list/?search=


You can append a search parameter to filter by school name.
Example:

https://api.devharlemwizardsinabox.com/campaign/campaign_school_list/?search=academy

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/Lokeshbhardwaj7/wizfit-vue.git
cd wizfit-vue


Install dependencies

npm install


Run the development server

npm run dev


Visit in browser

http://localhost:5173

🧩 Environment Variables

The API base URL is configurable via environment files:

.env.development

VITE_API_BASE=https://api.devharlemwizardsinabox.com


.env.production

VITE_API_BASE=https://api.devharlemwizardsinabox.com

🧠 Implementation Notes

Debounce is implemented manually to reduce API calls while typing.

The layout is responsive and works well on both desktop and mobile.

Each school card shows its logo in a circular frame.

Fallback image handling is included if school.logo is missing.

All code follows clean composition API patterns.

🧪 Testing the API

Run npm run dev

Open dev tools → Network → Check API calls hitting
https://api.devharlemwizardsinabox.com/campaign/campaign_school_list/?search=

Try searching by name in the input box.

📷 Preview

<img width="1920" height="1080" alt="Screenshot 2025-10-06 202522" src="https://github.com/user-attachments/assets/200cfadb-78cd-4553-92a4-c8a69275d8e3" />
<img width="1920" height="1080" alt="Screenshot 2025-10-06 202701" src="https://github.com/user-attachments/assets/a1de7a7a-78c8-488b-8760-e80aff83fd8c" />
<img width="1920" height="1080" alt="Screenshot 2025-10-06 202735" src="https://github.com/user-attachments/assets/564cdb86-45f4-4e59-bb37-98fa1de4ba44" />


🧑‍💻 Author

Lokesh Bhardwaj
Frontend Developer — React.js | Vue.js | API Integration
