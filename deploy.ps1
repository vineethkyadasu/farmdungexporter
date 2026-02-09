#!/usr/bin/env pwsh

# Stop any running Node processes
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

# Initialize Git
git init

# Configure Git user
git config user.email "kyadasuvineeth@gmail.com"
git config user.name "Vineeth Kyadasu"

# Create .gitignore to exclude node_modules and build files
@"
node_modules/
.next/
.env.local
.env
*.npm
"@ | Out-File -FilePath .gitignore -Encoding UTF8

# Add all files
git add .

# Commit
git commit -m "Initial commit: Farm Dung Exporter project"

# Add remote
git remote add origin https://github.com/vineethkyadasu/farmdungexporter.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main

Write-Host "Deployment complete! Project pushed to GitHub."
