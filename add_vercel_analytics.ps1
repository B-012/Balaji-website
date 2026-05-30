$snippet = @"
<!-- Vercel Web Analytics -->
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
"@

Get-ChildItem -Filter *.html | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -notmatch "_vercel/insights/script.js") {
        $content = $content -replace "(?i)</head>", "$snippet`n</head>"
        Set-Content -Path $_.FullName -Value $content
    }
}
Write-Host "Vercel Analytics script added to all HTML files."
