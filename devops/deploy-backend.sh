#!/bin/bash
set -e

echo "🚀 Building Backend Docker Image..."
docker build -t vitalpath-backend ./backend

echo "🔐 Logging into Azure Container Registry..."
az acr login --name vitalpathregistry

echo "📤 Pushing Backend Docker Image to ACR..."
docker tag vitalpath-backend vitalpathregistry.azurecr.io/vitalpath-backend:latest
docker push vitalpathregistry.azurecr.io/vitalpath-backend:latest

echo "♻️ Restarting Azure Web App (Backend)..."
az webapp restart --name vitalpath-backend --resource-group vitalpath-backend_group

echo "✅ Backend Deployment Complete!"