#!/bin/bash

set -e

echo "🛠 Building frontend Docker image..."
docker build -t vitalpath-frontend:latest -f frontend/Dockerfile frontend

echo "🏷️ Tagging image for Azure Container Registry..."
docker tag vitalpath-frontend:latest vitalpathregistry.azurecr.io/vitalpath-frontend:latest

echo "🔐 Logging into Azure Container Registry..."
az acr login --name vitalpathregistry

echo "📦 Pushing image to Azure Container Registry..."
docker push vitalpathregistry.azurecr.io/vitalpath-frontend:latest

echo "🚀 Updating Azure Container App..."
az containerapp update \
  --name vitalpath-frontend \
  --resource-group vitalpath-frontend_group \
  --image vitalpathregistry.azurecr.io/vitalpath-frontend:latest

echo "✅ Frontend Deployment Complete!"
