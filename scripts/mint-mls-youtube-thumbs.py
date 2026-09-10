import urllib.request, urllib.parse, json, os, re

SATORI_BASE = "https://satori-neon.vercel.app"
TOKEN = "satori_0c00f62203a65529f7dac2f75b74e684f3806484f23724a3"

YOUTUBES = {
    "philadelphia-union-5-fc-cincinnati-0": "IgYggOVGuFY",
    "chicago-fire-1-inter-miami-1": "qj9eXliDCW4",
    "atlanta-united-2-orlando-city-3": "80y0fh8XSyI",
    "toronto-fc-2-nashville-sc-1": "LeDj2OSZrCs",
    "dc-united-2-columbus-crew-1": "2Wx96QmRpGk",
    "nycfc-1-new-england-revolution-2": "ObjT9RsHtWA",
    "cf-montreal-1-charlotte-fc-2": "ILV_Lt5oDak",
    "houston-dynamo-2-real-salt-lake-1": "CCwo1uf-69A",
    "portland-timbers-2-st-louis-city-2": "Bqm6n2Qj_UQ",
    "vancouver-whitecaps-3-la-galaxy-0": "ElOZTNk_rGg",
    "lafc-2-new-york-red-bulls-0": "UPwnry04iGk",
    "san-diego-fc-2-san-jose-earthquakes-3": "R_EFmWS0aYY",
}

for slug, vid in YOUTUBES.items():
    print(f"\n=== {slug} ===")
    
    # Step 1: Fetch YouTube metadata
    req = urllib.request.Request(
        f"{SATORI_BASE}/api/v1/fetch-youtube",
        data=json.dumps({"url": f"https://www.youtube.com/watch?v={vid}"}).encode(),
        headers={"Content-Type": "application/json"},
        method="POST"
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            yt = json.loads(resp.read())
    except Exception as e:
        print(f"  ❌ YouTube fetch failed: {e}")
        continue
    
    yt_title = yt["title"]
    yt_channel = yt["channelName"]
    yt_thumb = yt["thumbnailUrl"]
    print(f"  📺 {yt_title[:60]}...")
    print(f"  🖼  {yt_thumb}")

    # Step 2: Register with Satori quick-generate
    title_short = yt_title.replace("HIGHLIGHTS | MLS 2026", "").replace("|", "-").strip()[:80]
    payload = json.dumps({
        "network": "ozone",
        "slug": slug,
        "title": title_short,
        "subtitle": f"Full match highlights via {yt_channel}",
        "layout": "cinematic",
    }).encode()
    
    req2 = urllib.request.Request(
        f"{SATORI_BASE}/api/v1/quick-generate",
        data=payload,
        headers={"Content-Type": "application/json", "Authorization": f"Bearer {TOKEN}"},
        method="POST"
    )
    try:
        with urllib.request.urlopen(req2, timeout=15) as resp2:
            qg = json.loads(resp2.read())
        image_url = qg.get("image_url", yt_thumb)
        print(f"  🖼  Satori image: {image_url[:60]}...")
    except Exception as e:
        print(f"  ⚠️  quick-generate failed, using YouTube thumb: {e}")
        image_url = yt_thumb

    # Step 3: Render PNG
    params = urllib.parse.urlencode({
        "network": "ozone",
        "title": title_short[:100],
        "subtitle": "Full match highlights, MLS September 9 2026",
        "image_url": image_url,
        "layout": "cinematic",
        "accent": "#1d4ed8",
        "overlay": "75",
    })
    
    out_path = f"public/thumbnails/mls-09-09-26-{slug}.jpg"
    try:
        req3 = urllib.request.Request(f"{SATORI_BASE}/api/v1/generate?{params}")
        with urllib.request.urlopen(req3, timeout=30) as resp3:
            png_bytes = resp3.read()
        os.makedirs("public/thumbnails", exist_ok=True)
        with open(out_path, "wb") as f:
            f.write(png_bytes)
        print(f"  ✅ Saved: {out_path} ({len(png_bytes)//1024} KB)")
    except Exception as e:
        print(f"  ❌ Render failed: {e}")
        continue

    # Step 4: Update page.tsx with YouTube link
    page_path = f"app/mls/09-09-26/{slug}/page.tsx"
    if os.path.exists(page_path):
        with open(page_path, "r") as f:
            content = f.read()
        
        # Inject YouTube link into the body before the closing </SportArticle>
        yt_block = f'\n      <div className="mt-6">\n        <a\n          href="https://www.youtube.com/watch?v={vid}"\n          target="_blank"\n          rel="noopener noreferrer"\n          className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700 transition-colors"\n        >\n          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>\n          Watch Highlights on YouTube\n        </a>\n      </div>\n'
        
        # Insert before the final </SportArticle>
        if "</SportArticle>" in content:
            content = content.replace("</SportArticle>", yt_block + "    </SportArticle>")
            with open(page_path, "w") as f:
                f.write(content)
            print(f"  ✅ Updated: {page_path}")
        else:
            print(f"  ⚠️  Could not find </SportArticle> in {page_path}")
    else:
        print(f"  ⚠️  Page not found: {page_path}")

print("\n\n🎉 All done!")