import os
import urllib.request
import time

IMAGES = {
    "src/assets/images/hero/corebridge-hero-operations.jpg": "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
    "src/assets/images/about/corebridge-team-harare.jpg": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    "src/assets/images/about/corebridge-engineering-focus.jpg": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    
    # Industries
    "src/assets/images/industries/agriculture.jpg": "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/financial-services.jpg": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/healthcare.jpg": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/pharmaceuticals.jpg": "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/retail.jpg": "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/fmcg.jpg": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/manufacturing.jpg": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/wholesale-distribution.jpg": "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/logistics-transport.jpg": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/construction.jpg": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/real-estate.jpg": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/mining.jpg": "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/energy-utilities.jpg": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/hospitality-tourism.jpg": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/education.jpg": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/professional-services.jpg": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/security-services.jpg": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=900&q=80",
    
    # Case Studies
    "src/assets/images/case-studies/pos-odoo-sync.jpg": "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/case-studies/logistics-manifest.jpg": "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/case-studies/field-service.jpg": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/case-studies/document-ai.jpg": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=900&q=80"
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

for path, url in IMAGES.items():
    if os.path.exists(path) and os.path.getsize(path) > 10000:
        print(f"Already exists: {path}")
        continue
    os.makedirs(os.path.dirname(path), exist_ok=True)
    print(f"Downloading {path}...")
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=15) as response, open(path, 'wb') as out_file:
            out_file.write(response.read())
        print(f"Saved {path} ({os.path.getsize(path)} bytes)")
    except Exception as e:
        print(f"Failed {path}: {e}")
    time.sleep(0.5)

print("Image download complete.")
