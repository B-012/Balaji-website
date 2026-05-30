$wc = New-Object System.Net.WebClient
$wc.Headers.Add('User-Agent','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')
$base = (Resolve-Path '.').Path + '\images\packages\'

# bhutan - mountain monastery
$wc.DownloadFile('https://images.unsplash.com/photo-1558618047-f2f29cf74bf0?w=600&q=80', $base + 'bhutan.jpg')
Write-Host "bhutan done"

# meghalaya - lush hills
$wc.DownloadFile('https://images.unsplash.com/photo-1511497584788-876760111969?w=600&q=80', $base + 'meghalaya.jpg')
Write-Host "meghalaya done"

# darjeeling - mountains
$wc.DownloadFile('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', $base + 'darjeeling.jpg')
Write-Host "darjeeling done"

Write-Host "All 3 done!"
