# Copy images folder to WP theme
Write-Host "Copying images to WP theme..."
New-Item -ItemType Directory -Force -Path "balaji-travels-theme\images\packages" | Out-Null
Copy-Item "images\packages\*" "balaji-travels-theme\images\packages\" -Force

# Sync data.js
Write-Host "Syncing data.js..."
Copy-Item "js\data.js" "balaji-travels-theme\js\data.js" -Force

# Build ZIP
Write-Host "Building ZIP..."
Compress-Archive -Path "balaji-travels-theme\*" -DestinationPath "balaji-travels-theme.zip" -Force

$size = [math]::Round((Get-Item "balaji-travels-theme.zip").Length / 1MB, 2)
Write-Host ""
Write-Host "====================================="
Write-Host " WordPress ZIP is ready!"
Write-Host " File: balaji-travels-theme.zip"
Write-Host " Size: $size MB"
Write-Host "====================================="
