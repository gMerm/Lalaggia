# Λαλάγγια Μάνης, στατική ιστοσελίδα

Καθαρό HTML/CSS/JS, χωρίς build step. Ανεβαίνει όπως είναι σε οποιονδήποτε web server (π.χ. nginx στο Hetzner).

## Δομή
- `index.html`: όλη η σελίδα, SEO meta, Open Graph, JSON-LD (WebSite, LocalBusiness, Product, FAQPage)
- `assets/css/style.css`: στυλ (tokens χρωμάτων στην αρχή)
- `assets/js/main.js`: μενού κινητού, animation τίτλου, κύλιση
- `assets/img/`: φωτογραφίες σε WebP + JPG (δύο μεγέθη η καθεμία), favicon, og-image
- `assets/fonts/`: Alegreya και Commissioner, self-hosted (χωρίς Google Fonts, OK για GDPR)
- `robots.txt`, `sitemap.xml` (με τις φωτογραφίες για το Google Images)

## Επικοινωνία
Μοναδικός τρόπος επικοινωνίας είναι το τηλέφωνο 690 700 6816. Δεν υπάρχει φόρμα, email ή χάρτης.

## Πριν τη δημοσίευση
Τα στοιχεία από την ετικέτα (επωνυμία, τηλέφωνο, Μερόπη Μεσσηνίας, συστατικά, 500 γρ., διατήρηση 2 μηνών, EAN 5214003784019) έχουν ήδη μπει.
Ό,τι λείπει έχει class `todo` (διακεκομμένο πλαίσιο). Αναζήτηση: `class="todo"`.
- ΑΦΜ στο footer
- Domain: αντικατάσταση του `https://lalaggia.gr/` (canonical, og:url, og:image, twitter:image, JSON-LD, robots.txt, sitemap.xml) αν επιλεγεί άλλο

## Μετά τη δημοσίευση
- Υποβολή του `sitemap.xml` στο Google Search Console
- Προφίλ στο Google Business Profile, με το ίδιο όνομα και τηλέφωνο
- Έλεγχος του JSON-LD στο Rich Results Test
