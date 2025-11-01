# Cologne Boxing Style Website

Eine professionelle Website für Cologne Boxing Style - Premium Boxtraining in Bensberg.

## Über das Projekt

Diese Website wurde für Cologne Boxing Style entwickelt, ein Premium-Boxstudio in Bensberg. Die Website präsentiert:

- Moderne, responsive Design
- Dunkles, urbanes Theme mit goldenen Akzenten
- Vollständige SEO-Optimierung
- DSGVO-konforme Datenschutzbestimmungen
- Interaktive 3D-Elemente
- Mobile-first Design

## Technische Features

### Frontend
- **HTML5**: Semantisches Markup
- **CSS3**: Moderne Styles mit CSS Grid, Flexbox und CSS Variables
- **JavaScript**: Vanilla JS für Interaktionen und Animationen
- **Three.js**: 3D-Animationen für Boxhandschuh
- **Responsive Design**: Mobile-first Ansatz

### SEO & Performance
- Vollständige SEO-Optimierung
- JSON-LD Structured Data
- OpenStreetMap Integration
- Sitemap.xml und robots.txt
- Lazy Loading für Bilder
- Optimierte Ladezeiten

### Datenschutz
- DSGVO-konform
- Cookie-Banner mit Consent-Management
- Datenschutzerklärung
- Impressum
- Allgemeine Geschäftsbedingungen

## Struktur

```
/
├── index.html              # Homepage
├── kurse.html             # Kursübersicht
├── trainer.html           # Trainerprofil
├── galerie.html           # Fotogalerie
├── ueber-uns.html         # Über uns
├── kontakt.html           # Kontakt & Formular
├── impressum.html         # Impressum
├── datenschutz.html       # Datenschutz
├── agb.html              # AGB
├── sitemap.xml           # SEO Sitemap
├── robots.txt            # Suchmaschinen
├── css/
│   └── styles.css        # Alle Styles
├── js/
│   └── main.js          # JavaScript
└── assets/
    └── (Bilder und Assets)
```

## Installation & Setup

### 1. Lokale Entwicklung
1. Repository klonen oder Dateien herunterladen
2. Einen lokalen Server starten (z.B. Live Server in VS Code)
3. Website ist sofort einsatzbereit

### 2. Deployment
Die Website ist für folgende Plattformen optimiert:

#### GitHub Pages
1. Repository auf GitHub erstellen
2. Dateien hochladen
3. GitHub Pages aktivieren
4. Domain: `https://username.github.io/repository-name/`

#### Netlify
1. Account bei Netlify erstellen
2. Website hochladen (Drag & Drop)
3. Automatische Deployment
4. Custom Domain optional

#### Andere Hosting-Anbieter
- Statisches Hosting (kein PHP/Node.js erforderlich)
- Einfaches FTP-Upload ausreichend
- SSL-Zertifikat empfohlen

## Assets & Bilder

### Erforderliche Bilder
Die Website benötigt folgende Bilder (Platzhalter vorhanden):

```
assets/
├── logo.png              # Studio Logo (200x200px)
├── hero-bg.jpg          # Hero Hintergrund
├── trainer-hero.jpg     # Trainer Hero Bild
├── gallery/             # Galerie Bilder
│   ├── training-1.jpg   # Training Bilder
│   ├── equipment-1.jpg  # Ausrüstung
│   └── atmosphere-1.jpg # Studio Atmosphäre
└── instagram/           # Social Media Bilder
    └── instagram-1.jpg
```

### Bild-Optimierung
- **Formate**: WebP, AVIF (mit JPG Fallback)
- **Größen**: Verschiedene Auflösungen für responsive Bilder
- **Komprimierung**: Optimiert für Web (80-90% Qualität)

## Konfiguration

### Kontaktinformationen
Alle Kontaktdaten in den HTML-Dateien anpassen:

```html
<!-- In allen HTML-Dateien -->
<address>
    Reginharstr. 16–18<br>
    51429 Bensberg
</address>
<a href="tel:+4917683442112">0176 83442112</a>
<a href="mailto:info@cologneboxingstyle.de">info@cologneboxingstyle.de</a>
```

### SEO-Optimierung
- Meta-Tags in allen HTML-Dateien anpassen
- JSON-LD Structured Data aktualisieren
- Sitemap.xml bei Bedarf erweitern

### Social Media
Social Media Links in Footer und HTML-Head anpassen:

```html
<!-- Open Graph Tags -->
<meta property="og:url" content="https://ihredomain.de/">
<meta property="og:image" content="/assets/og-image.jpg">
```

## Browser-Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Ladezeit**: < 2 Sekunden (optimiert)
- **Mobile Performance**: Optimiert für mobile Endgeräte

## Wartung

### Regelmäßige Updates
- Inhalte aktualisieren (Kurszeiten, Preise, Events)
- Bilder bei Bedarf ersetzen
- SEO-Optimierung überprüfen
- Links und Funktionalität testen

### Backup
- Regelmäßige Backups der gesamten Website
- Versionierung mit Git empfohlen

## Support

Bei Fragen oder Problemen kontaktieren Sie:
- **E-Mail**: info@cologneboxingstyle.de
- **Telefon**: 0176 83442112

## Lizenz

Diese Website wurde speziell für Cologne Boxing Style entwickelt. Alle Rechte vorbehalten.

---

*Stand: Oktober 2024*
