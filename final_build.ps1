Copy-Item "contact.html" "balaji-travels-theme\page-contact-us.php" -Force
Write-Host "Contact page synced."

Copy-Item "js\data.js" "balaji-travels-theme\js\data.js" -Force
Write-Host "data.js synced."

New-Item -ItemType Directory -Force -Path "balaji-travels-theme\images\packages" | Out-Null
Copy-Item "images\packages\*" "balaji-travels-theme\images\packages\" -Force
Write-Host "Images synced."

Compress-Archive -Path "balaji-travels-theme\*" -DestinationPath "balaji-travels-theme.zip" -Force
Write-Host "ZIP built successfully!"
Write-Host "Location: balaji-travels-theme.zip"
