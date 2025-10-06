📘 WizFit Challenge — Vue.js API Integration

This is a frontend application built using Vue 3 + Vite to integrate with the WizFit Challenge API.
The app displays a list of participating schools, includes a search feature, and shows school logos.

🚀 Features

Fetches school list from the WizFit Challenge API

Dynamic search using debounce

Displays name, city, and logo for each school

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

git clone https://github.com/<your-username>/wizfit-vue.git
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

<img width="1920" height="1080" alt="Screenshot 2025-10-06 202522" src="https://github.com/user-attachments/assets/890a89a7-e2f5-4ce5-b573-4545d4350be8" />
<img width="1920" height="1080" alt="Screenshot 2025-10-06 202701" src="https://github.com/user-attachments/assets/c0ba8914-98af-4399-aa96-d6a4e5715e2d" />
<img width="1920" height="1080" alt="Screenshot 2025-10-06 202735" src="https://github.com/user-attachments/assets/06416b58-51ed-41ae-b9ac-a41795f210a0" />


🧑‍💻 Author

Lokesh Bhardwaj
Frontend Developer — React.js | Vue.js | API Integration
