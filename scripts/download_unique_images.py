import os
import urllib.request
import hashlib

IMAGE_MAP = {
    # Unique Hero Images for each major route
    "src/assets/images/hero/hero-operations-lead.jpg": "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1400&q=85",
    "src/assets/images/hero/solutions-hero.jpg": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "src/assets/images/hero/industries-hero.jpg": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    "src/assets/images/hero/approach-hero.jpg": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    "src/assets/images/hero/case-studies-hero.jpg": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "src/assets/images/hero/about-hero.jpg": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    "src/assets/images/hero/contact-hero.jpg": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",

    # Section-specific unique images
    "src/assets/images/sections/operational-reality.jpg": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    "src/assets/images/sections/what-we-solve.jpg": "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    "src/assets/images/sections/build-integrate-improve.jpg": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    "src/assets/images/sections/global-local.jpg": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    "src/assets/images/sections/zimbabwe-operations.jpg": "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
    "src/assets/images/sections/editorial-statement.jpg": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    "src/assets/images/sections/final-cta.jpg": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",

    # Distinct Industry Images (All 17 Unique)
    "src/assets/images/industries/agriculture.jpg": "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/financial-services.jpg": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/healthcare.jpg": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/pharmaceuticals.jpg": "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/retail.jpg": "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/fmcg.jpg": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/manufacturing.jpg": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/wholesale-distribution.jpg": "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/logistics-transport.jpg": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/construction.jpg": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    "src/assets/images/industries/real-estate.jpg": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
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
    "src/assets/images/case-studies/document-ai.jpg": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=900&q=80",

    # About
    "src/assets/images/about/corebridge-team-harare.jpg": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    "src/assets/images/about/corebridge-engineering-focus.jpg": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

for path, url in IMAGE_MAP.items():
    os.makedirs(os.path.dirname(path), exist_ok=True)
    print(f"Downloading {path}...")
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=25) as resp, open(path, 'wb') as f:
        f.write(resp.read())

print("\nVerifying image uniqueness...")
hashes = {}
duplicates = []
for path in IMAGE_MAP.keys():
    with open(path, 'rb') as f:
        h = hashlib.md5(f.read()).hexdigest()
    if h in hashes:
        duplicates.append((path, hashes[h]))
    else:
        hashes[h] = path

if duplicates:
    print("Found duplicates:", duplicates)
else:
    print(f"SUCCESS: All {len(IMAGE_MAP)} images are 100% unique!")
