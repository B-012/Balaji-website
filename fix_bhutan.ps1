# Copy manali as bhutan fallback
Copy-Item "images\packages\manali.jpg" "images\packages\bhutan.jpg" -Force
Write-Host "bhutan.jpg set"

# List all downloaded images
Write-Host ""
Write-Host "=== Downloaded Images ==="
Get-ChildItem "images\packages" | ForEach-Object { Write-Host "$($_.Name) - $([math]::Round($_.Length/1KB, 1)) KB" }
Write-Host ""
Write-Host "Total: $((Get-ChildItem 'images\packages').Count) images"
