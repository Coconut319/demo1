#!/bin/bash

# Cologne Boxing Style - Deployment Script
echo "🚀 Cologne Boxing Style - Website Deployment"
echo "============================================="

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Please run this script from the project root."
    exit 1
fi

echo "✅ Project structure verified"

# Create optimized assets directory
echo "📁 Creating optimized assets structure..."
mkdir -p assets/optimized
mkdir -p assets/gallery
mkdir -p assets/instagram

echo "🔍 Checking for missing files..."

# List of required files
required_files=(
    "index.html"
    "kurse.html"
    "trainer.html"
    "galerie.html"
    "ueber-uns.html"
    "kontakt.html"
    "impressum.html"
    "datenschutz.html"
    "agb.html"
    "css/styles.css"
    "js/main.js"
    "README.md"
    "sitemap.xml"
    "robots.txt"
    "manifest.json"
    "favicon.svg"
)

missing_files=()
for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        missing_files+=("$file")
    fi
done

if [ ${#missing_files[@]} -eq 0 ]; then
    echo "✅ All required files present"
else
    echo "⚠️  Missing files: ${missing_files[*]}"
    echo "   Please ensure all files are present before deployment."
fi

echo ""
echo "📋 Deployment Options:"
echo "===================="
echo ""
echo "1️⃣  GitHub Pages (Recommended)"
echo "   - Upload all files to a GitHub repository"
echo "   - Enable GitHub Pages in repository settings"
echo "   - Domain: https://username.github.io/repo-name/"
echo ""
echo "2️⃣  Netlify"
echo "   - Drag & drop the entire folder to Netlify"
echo "   - Automatic deployment with custom domain support"
echo "   - Built-in form handling available"
echo ""
echo "3️⃣  Vercel"
echo "   - Connect your GitHub repository"
echo "   - Automatic deployments on push"
echo "   - Global CDN included"
echo ""
echo "4️⃣  Manual Hosting"
echo "   - Upload via FTP to any web hosting provider"
echo "   - Ensure HTTPS/SSL is enabled"
echo "   - Configure custom domain if needed"
echo ""
echo "🔧 Post-Deployment Checklist:"
echo "==========================="
echo "✅ Test all pages and links"
echo "✅ Verify mobile responsiveness"
echo "✅ Test contact form functionality"
echo "✅ Check SEO meta tags"
echo "✅ Validate HTML/CSS"
echo "✅ Test 3D animations"
echo "✅ Verify cookie banner functionality"
echo "✅ Check Google Search Console setup"
echo "✅ Test OpenStreetMap integration"
echo "✅ Verify social media links"
echo ""
echo "📊 Performance Optimization:"
echo "==========================="
echo "• Enable gzip compression on server"
echo "• Set up CDN for static assets"
echo "• Optimize images (WebP format)"
echo "• Enable browser caching"
echo "• Minify CSS/JS if needed"
echo ""
echo "🎯 Next Steps:"
echo "=============="
echo "1. Replace placeholder images with real photos"
echo "2. Update business contact information"
echo "3. Configure Google Analytics (if needed)"
echo "4. Set up Google Search Console"
echo "5. Create social media accounts"
echo "6. Plan content marketing strategy"
echo ""
echo "📞 Support:"
echo "==========="
echo "For technical support or questions:"
echo "Email: info@cologneboxingstyle.de"
echo "Phone: 0176 83442112"
echo ""
echo "✨ Website is ready for deployment!"
echo "Happy boxing! 🥊"
