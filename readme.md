# 🚀 Microservice `workspace-invite-handler`

## 📌 Description
This microservice handles **processing responses to workspace invitations** in a task management system.
It allows users to **accept or reject invitations** to workspaces and updates the database accordingly.

## 🛠️ Technologies
- Node.js
- Express.js
- PostgreSQL (AWS RDS)
- Sequelize (ORM)
- Docker

## 📂 Project Structure
```
workspace-invite-handler/
│── src/
│   ├── controllers/
│   │   ├── inviteHandlerController.js
│   ├── models/
│   │   ├── Invite.js
│   ├── routes/
│   │   ├── inviteHandlerRoutes.js
│   ├── services/
│   │   ├── inviteHandlerService.js ✅ (Business logic for handling invites)
│   ├── config/
│   │   ├── database.js
│   ├── utils/
│   │   ├── validators.js ✅ (Reusable validation functions)
│   ├── app.js
│── server.js
│── Dockerfile
│── docker-compose.yml
│── .env
│── README.md
```

## 🔧 Installation
```sh
npm install
```

## 🚀 Running the Microservice
```sh
npm start
```
Or using Docker
```sh
docker-compose up --build
```

## 🔗 API Endpoints
### **1️⃣ Respond to an Invitation**
```sh
curl -X POST http://localhost:5010/invites/123/respond -H "Content-Type: application/json" -d '{
  "action": "accepted"
}'
```

### **2️⃣ Response Example**
```json
{
  "message": "Invitation accepted",
  "invite": {
    "id": 123,
    "workspace_id": 1,
    "email": "user@example.com",
    "status": "accepted"
  }
}



