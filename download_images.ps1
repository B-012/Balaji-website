New-Item -ItemType Directory -Force -Path "images\packages" | Out-Null
$base = (Resolve-Path '.').Path

$imgs = @(
  @{ name="bhutan.jpg";     url="https://images.unsplash.com/photo-1680087853050-3ee37e8d5b39?w=600&q=80" },
  @{ name="meghalaya.jpg";  url="https://images.unsplash.com/photo-1626095416635-d3fc3c2b9757?w=600&q=80" },
  @{ name="darjeeling.jpg"; url="https://images.unsplash.com/photo-1558618047-f2f29cf74bf0?w=600&q=80" },
  @{ name="kolkata.jpg";    url="https://images.unsplash.com/photo-1558431382-27e303142255?w=600&q=80" },
  @{ name="jaipur.jpg";     url="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80" },
  @{ name="delhi.jpg";      url="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80" },
  @{ name="singapore.jpg";  url="https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=600&q=80" },
  @{ name="europe.jpg";     url="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80" },
  @{ name="northeast.jpg";  url="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
  @{ name="chardham.jpg";   url="https://images.unsplash.com/photo-1543158266-0066955047b1?w=600&q=80" },
  @{ name="kashmir.jpg";    url="https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=600&q=80" },
  @{ name="rajasthan.jpg";  url="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80" },
  @{ name="goa.jpg";        url="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80" },
  @{ name="kerala.jpg";     url="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80" },
  @{ name="andaman.jpg";    url="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600&q=80" },
  @{ name="dubai.jpg";      url="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80" },
  @{ name="thailand.jpg";   url="https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=80" },
  @{ name="maldives.jpg";   url="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80" },
  @{ name="manali.jpg";     url="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80" },
  @{ name="srilanka.jpg";   url="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80" },
  @{ name="australia.jpg";  url="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80" },
  @{ name="croatia.jpg";    url="https://images.unsplash.com/photo-1555990793-da11153b2473?w=600&q=80" },
  @{ name="fiji.jpg";       url="https://images.unsplash.com/photo-1505881502353-a1986add3762?w=600&q=80" },
  @{ name="finland.jpg";    url="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&q=80" },
  @{ name="france.jpg";     url="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80" },
  @{ name="egypt.jpg";      url="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&q=80" },
  @{ name="uttarakhand.jpg";url="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  @{ name="pench.jpg";      url="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=600&q=80" }
)

$wc = New-Object System.Net.WebClient
$wc.Headers.Add('User-Agent','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')
$wc.Headers.Add('Referer','https://unsplash.com/')

foreach ($img in $imgs) {
  $path = "$base\images\packages\$($img.name)"
  try {
    $wc.DownloadFile($img.url, $path)
    $size = (Get-Item $path).Length
    Write-Host "OK: $($img.name) ($size bytes)"
  } catch {
    Write-Host "FAIL: $($img.name) - $_"
  }
}
Write-Host "Done!"
