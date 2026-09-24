$dir = "c:\Users\Sakshi\Downloads\New folder\Balaji-website"
$files = Get-ChildItem -Path $dir -Filter "*.html"
$newKeywords = '<meta name="keywords" content="Balaji Travels, travel agency Kolkata, flight booking, train ticket booking, tour operator Kolkata, holiday packages, hotel reservations, visa assistance, chardham yatra packages">'

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # 1. Optimize Meta Keywords (remove keyword stuffing)
    $content = $content -replace '<meta name="keywords" content="[^"]+">', $newKeywords
    
    # 2. Fix Canonical URLs for Vercel Clean URLs
    $content = $content -replace '<link rel="canonical" href="https://balaji-website-zeta\.vercel\.app/index\.html">', '<link rel="canonical" href="https://balaji-website-zeta.vercel.app/">'
    $content = $content -replace '<link rel="canonical" href="https://balaji-website-zeta\.vercel\.app/([^"]+)\.html">', '<link rel="canonical" href="https://balaji-website-zeta.vercel.app/$1">'
    
    # 3. Fix Open Graph URLs
    $content = $content -replace '<meta property="og:url" content="https://balaji-website-zeta\.vercel\.app/index\.html">', '<meta property="og:url" content="https://balaji-website-zeta.vercel.app/">'
    $content = $content -replace '<meta property="og:url" content="https://balaji-website-zeta\.vercel\.app/([^"]+)\.html">', '<meta property="og:url" content="https://balaji-website-zeta.vercel.app/$1">'
    
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
Write-Output "SEO and SMO URL fixes applied to all HTML files."
