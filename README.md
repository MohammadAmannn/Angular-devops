📌 MEAN Stack CRUD Application DevOps Deployment

🚀 Project Overview

This project demonstrates the containerization, orchestration, and cloud deployment of a full-stack MEAN (MongoDB, Express, Angular, Node.js) CRUD application.

The application enables complete tutorial management with the following features:

Create Tutorial

Retrieve All Tutorials

Retrieve Single Tutorial

Update Tutorial

Delete Tutorial

Search Tutorials by Title

The system is fully containerized using Docker and deployed on AWS EC2 with an automated CI/CD pipeline via GitHub Actions.


# Architecture Overview

User
  │
  ▼
Nginx (Reverse Proxy - Port 80)
  │
  ├──► Frontend (Angular - Nginx)
  │
  └──► Backend (Node.js + Express API)
            │
            ▼
        MongoDB

 #Technology Stack
 
Layer	Technology
Frontend	Angular 15 (served via Nginx)
Backend	Node.js + Express
Database	MongoDB
Reverse Proxy	Nginx
Containerization	Docker
Orchestration	Docker Compose
Cloud	AWS EC2 (Ubuntu)
CI/CD	GitHub Actions
Image Registry	Docker Hub     


#Containerization

Backend

Multi-stage Docker build

Build Stage: Node 18 Alpine

Runtime Stage: Distroless Image

Exposes Port 8080

mongodb://mongodb:27017/dd_db

Uses Docker network alias mongodb

Data persisted using Docker volumes


#Frontend

Built using Node (Angular production build)

Runtime served via Nginx Alpine

SPA routing supported using:

try_files $uri $uri/ /index.html;

Exposes Port 80

🔁 Reverse Proxy Configuration

Nginx is configured to:

Route / → Frontend container

Route /api → Backend container

Expose entire application via Port 80

This enables a single public entry point for the complete application.

☁️ #AWS Deployment
EC2 Configuration

OS: Ubuntu

Docker Installed

Docker Compose Installed

Security Group Configuration:

Port 80 (HTTP)

Port 22 (SSH)

🔄 #CI/CD Pipeline – GitHub Actions
Trigger

Pipeline runs automatically on:

Push to main branch

Pipeline Workflow

Checkout Repository

Login to Docker Hub

Build Backend Docker Image

Push Backend Image

Build Frontend Docker Image

Push Frontend Image

SSH into EC2

Pull Latest Images

Restart Containers Automatically


#CI/CD Flow Diagram

Code Push
   ↓
GitHub Actions
   ↓
Build Docker Images
   ↓
Push to Docker Hub
   ↓
SSH into EC2
   ↓
Pull Latest Images
   ↓
Restart Containers


🌐 Application Access

http://<EC2_PUBLIC_IP>

#ScreenShot

![Alt text for the screenshot](screenshot/ss1.png)
![Alt text for the screenshot](screenshot/ss2.png)
![Alt text for the screenshot](screenshot/ss3.png)
![Alt text for the screenshot](screenshot/ss4.png)
![Alt text for the screenshot](screenshot/ss5.png)
![Alt text for the screenshot](screenshot/ss6.png)

