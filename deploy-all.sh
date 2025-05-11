#!/bin/bash

set -e

# Check if logged into Azure
if ! az account show > /dev/null 2>&1; then
    echo "⚠️ Not logged into Azure CLI. Logging in..."
    az login
fi

# Build and deploy backend
echo "🛠 Building BACKEND..."
docker build -t vitalpath-backend:latest -f backend/Dockerfile backend
docker tag vitalpath-backend:latest vitalpathregistry.azurecr.io/vitalpath-backend:latest
az containerapp update --name vitalpath-backend --resource-group vitalpath-backend_group --image vitalpathregistry.azurecr.io/vitalpath-backend:latest
docker push vitalpathregistry.azurecr.io/vitalpath-backend:latest

# Build and deploy frontend
echo "🛠 Building FRONTEND..."
docker build -t vitalpath-frontend:latest -f frontend/Dockerfile frontend
docker tag vitalpath-frontend:latest vitalpathregistry.azurecr.io/vitalpath-frontend:latest
docker push vitalpathregistry.azurecr.io/vitalpath-frontend:latest
az containerapp update --name vitalpath-frontend --resource-group vitalpath-frontend_group --image vitalpathregistry.azurecr.io/vitalpath-frontend:latest

echo ""
echo "✅ Full deployment complete!"

