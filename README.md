📌 MEAN Stack CRUD Application DevOps Deployment

Project Overview

This project demonstrates the containerization and deployment of a full-stack MEAN (MongoDB, Express, Angular, Node.js) application.

The application provides CRUD operations for managing tutorials, including:

Create tutorial

Retrieve all tutorials

Retrieve single tutorial

Update tutorial

Delete tutorial

Search tutorials by title

The application is fully containerized and deployed on AWS EC2 with an automated CI/CD pipeline using GitHub Actions.

Architecture Overview

User → Nginx (Reverse Proxy) → Frontend (Angular - Nginx)
                                   |
                                   → Backend (Node.js + Express)
                                          |
                                          → Mongdb
                                        
Components:

Frontend: Angular 15 (served via Nginx)

Backend: Node.js + Express REST API

Database: MongoDB (Docker container)

Reverse Proxy: Nginx (Port 80)

Containerization: Docker

Orchestration: Docker Compose

Cloud Platform: AWS EC2 (Ubuntu)

CI/CD: GitHub Actions

Image Registry: Docker Hub


Containerization
Backend Dockerfile

Multi-stage build

Node 18 Alpine for build

Distroless image for runtime

Exposes port 8080

Frontend Dockerfile

Angular build using Node

Nginx Alpine as runtime

SPA routing support using try_files

Exposes port 80

Database Setup

MongoDB is deployed as a Docker container using the official image:

mongo:6

Backend connects using:

mongodb://mongodb:27017/dd_db
MongoDB data is persisted using Docker volumes.

🔁 Reverse Proxy Configuration

Nginx is configured to:

Route / → Frontend container

Route /api → Backend container

Expose entire application via Port 80

AWS Deployment
EC2 Configuration

OS: Ubuntu

Docker installed

Docker Compose installed

Security group configured:

Port 80 (HTTP)

Port 22 (SSH)

Application runs using:

docker compose up -d

CI/CD Pipeline (GitHub Actions)

Workflow Trigger

Pipeline runs automatically on:
Push to main branch

Pipeline Steps

Checkout repository

Login to Docker Hub

Build backend image

Push backend image

Build frontend image

Push frontend image

SSH into EC2

Pull latest images

Restart containers automatically

Code Push → GitHub Actions → Build Images → Push to Docker Hub
→ SSH into EC2 → Pull Latest Images → Restart Containers

Application Access

Application is accessible via:

http://<EC2_PUBLIC_IP>

#ScreenShot

![Alt text for the screenshot](screenshot/ss1.png)
![Alt text for the screenshot](screenshot/ss2.png)
![Alt text for the screenshot](screenshot/ss3.png)
![Alt text for the screenshot](screenshot/ss4.png)
![Alt text for the screenshot](screenshot/ss5.png)
![Alt text for the screenshot](screenshot/ss6.png)
