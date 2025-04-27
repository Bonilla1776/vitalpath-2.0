#!/bin/bash
set -e

echo "🚀 Building Frontend Docker Image..."
docker build -t vitalpath-frontend ./frontend

echo "🔐 Logging into Azure Container Registry..."
az acr login --name vitalpathregistry

echo "📤 Pushing Frontend Docker Image to ACR..."
docker tag vitalpath-frontend vitalpathregistry.azurecr.io/vitalpath-frontend:latest
docker push vitalpathregistry.azurecr.io/vitalpath-frontend:latest

echo "♻️ Restarting Azure Web App (Frontend)..."
az webapp restart --name vitalpath-frontend --resource-group vitalpath-frontend_group

echo "✅ Frontend Deployment Complete!"