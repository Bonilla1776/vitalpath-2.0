#!/bin/bash

set -e

echo "🛠 Building backend Docker image..."
docker build -t vitalpath-backend:latest -f backend/Dockerfile backend

echo "🏷️ Tagging image for Azure Container Registry..."
docker tag vitalpath-backend:latest vitalpathregistry.azurecr.io/vitalpath-backend:latest

echo "🔐 Logging into Azure Container Registry..."
az acr login --name vitalpathregistry

echo "📦 Pushing image to Azure Container Registry..."
docker push vitalpathregistry.azurecr.io/vitalpath-backend:latest

echo "🚀 Updating Azure Container App..."
az containerapp update \
  --name vitalpath-backend \
  --resource-group vitalpath-backend_group \
  --image vitalpathregistry.azurecr.io/vitalpath-backend:latest

echo "✅ Deployment Complete!"
