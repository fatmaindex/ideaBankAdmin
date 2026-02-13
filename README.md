# 💡 Idea Bank - Admin Dashboard

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)

**IdeaBankAdmin** is a sophisticated management panel designed to moderate and evaluate innovative ideas. It features a custom scoring algorithm to rank submissions and a secure authentication system for administrators.

---

## 🚀 Key Features

* **Smart Evaluation System:** Rate ideas based on 4 scientific metrics: **Alignment, Innovation, Feasibility, and Scalability**.
* **Dynamic Ranking (Top 3):** An automated algorithm that filters and ranks the top 3 highest-rated ideas for quick decision-making.
* **Secure Authentication:** Session management using `localStorage` and `BehaviorSubject` for real-time UI updates.
* **Route Protection:** Built-in `AuthGuard` to ensure only authorized admins can access the dashboard.
* **Mock Backend Integration:** Seamless communication with a JSON Server to simulate a real production environment.

---

## 🛠 Technical Architecture

### Scoring Logic
The system automatically calculates a score out of **5** using the following formula:
> **Total Score** = `((Alignment + Innovation + Feasibility + Scalability) / 20) * 5`

### Project Structure
* **AuthService:** Manages tokens and login states.
* **IdeaService:** Handles CRUD operations, evaluation updates, and the "Top 3" filtering logic.
* **UserService:** Manages admin profile data and credentials verification.

---

## 💻 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/fatmaindex/ideaBankAdmin.git](https://github.com/fatmaindex/ideaBankAdmin.git)
   cd ideaBankAdmin
Install dependencies:Bashnpm install
Start the Mock Server (JSON Server):Ensure your JSON server is running on http://localhost:3002 (as configured in environments).Run the Application:Bashng serve
Open http://localhost:4200 in your browser.🔐 Example CredentialsUse these credentials to access the admin panel:UsernamePasswordRolefatmapassword123Administratornorapassword345Administrator📡 API Endpoints SummaryActionEndpointMethodLogin / Auth/usersGETFetch Ideas/ideasGETEvaluate Idea/ideas/:idPUTCreate Idea/ideasPOST📝 Development NoteThis project uses RxJS Observables to ensure the UI stays in sync with the data. When an idea is rated, the "Top Three" list updates automatically without requiring a page refresh.
