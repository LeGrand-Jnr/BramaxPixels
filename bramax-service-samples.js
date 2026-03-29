// Bramax service samples - provides sampleWorks dataset and modal wiring
(function () {
    // Minimal sample works per service category. Images are expected to be in the same folder or remote URLs.
    const sampleWorks = {
        photography: [
            { title: 'Event Coverage - Lagos Fest', img: 'images/works/photo1.jpg', tags: ['photography', 'events'] },
            { title: 'Product Shoot - Fresh Bites', img: 'images/works/photo2.jpg', tags: ['photography', 'product'] },
            { title: 'Portrait Series - Faces', img: 'images/works/photo3.jpg', tags: ['photography', 'portrait'] },
            { title: 'Street Documentary - Market Life', img: 'images/works/photo4.jpg', tags: ['photography', 'documentary'] },
            { title: 'Architecture - Skyline Study', img: 'images/works/photo5.jpg', tags: ['photography', 'architecture'] },
            { title: 'Food Styling - Chef Plate', img: 'images/works/photo6.jpg', tags: ['photography', 'food'] },
            { title: 'Lifestyle Campaign - Urban Wear', img: 'images/works/photo7.jpg', tags: ['photography', 'campaign'] },
            { title: 'Product Detail - Tech Gear', img: 'images/works/photo8.jpg', tags: ['photography', 'product'] }
        ],
        'large-format': [
            { title: 'Billboard - Summer Sale', img: 'images/works/billboard1.jpg', tags: ['large-format', 'banner'] },
            { title: 'Outdoor Banner - Grand Opening', img: 'images/works/banner1.jpg', tags: ['large-format', 'banner'] },
            { title: 'Stage Backdrop - Concert', img: 'images/works/backdrop1.jpg', tags: ['large-format', 'backdrop'] },
            { title: 'Trade Show Panels - Booth', img: 'images/works/panel1.jpg', tags: ['large-format', 'exhibit'] },
            { title: 'Street Pole Banners - Campaign', img: 'images/works/pole1.jpg', tags: ['large-format', 'street'] },
            { title: 'Event Step & Repeat - Media Wall', img: 'images/works/repeat1.jpg', tags: ['large-format', 'media-wall'] },
            { title: 'Outdoor Kiosk Wrap - Retail', img: 'images/works/kiosk1.jpg', tags: ['large-format', 'wrap'] },
            { title: 'Mall Hanging Banner - Promotion', img: 'images/works/hanging1.jpg', tags: ['large-format', 'mall'] }
        ],
        branding: [
            { title: 'Brand Identity - Nova', img: 'images/works/brand1.jpg', tags: ['branding', 'logo'] },
            { title: 'Brand Guidelines - Terra', img: 'images/works/brand2.jpg', tags: ['branding', 'guidelines'] },
            { title: 'Logo Suite - Bloom', img: 'images/works/brand3.jpg', tags: ['branding', 'logo'] },
            { title: 'Business Stationery - Arc', img: 'images/works/brand4.jpg', tags: ['branding', 'stationery'] },
            { title: 'Visual Language - Elemental', img: 'images/works/brand5.jpg', tags: ['branding', 'visual'] },
            { title: 'Packaging Identity - Crate', img: 'images/works/brand6.jpg', tags: ['branding', 'packaging'] },
            { title: 'Campaign Creative - Rise', img: 'images/works/brand7.jpg', tags: ['branding', 'campaign'] },
            { title: 'Naming & Tagline - Verve', img: 'images/works/brand8.jpg', tags: ['branding', 'naming'] }
        ],
        'graphic-design': [
            { title: 'Flyer - Weekend Promo', img: 'images/works/flyer1.jpg', tags: ['flyer', 'graphic-design'] },
            { title: 'Brochure - Product Line', img: 'images/works/brochure1.jpg', tags: ['brochure', 'graphic-design'] },
            { title: 'Poster Series - Exhibition', img: 'images/works/poster1.jpg', tags: ['poster', 'graphic-design'] },
            { title: 'Catalog - Seasonal', img: 'images/works/catalog1.jpg', tags: ['catalog', 'graphic-design'] },
            { title: 'Menu Design - Bistro', img: 'images/works/menu1.jpg', tags: ['menu', 'graphic-design'] },
            { title: 'Label Design - Artisan Foods', img: 'images/works/label1.jpg', tags: ['label', 'packaging'] },
            { title: 'Infographic - Annual Report', img: 'images/works/infographic1.jpg', tags: ['infographic', 'graphic-design'] },
            { title: 'Social Graphics Pack - Launch', img: 'images/works/social1.jpg', tags: ['social', 'graphic-design'] }
        ],
        'shirt-printing': [
            { title: 'T-Shirt Mockups - Team', img: 'images/works/shirt1.jpg', tags: ['shirts', 'merch'] },
            { title: 'Caps - Branded', img: 'images/works/cap1.jpg', tags: ['caps', 'merch'] },
            { title: 'Hoodie Prints - Streetwear', img: 'images/works/hoodie1.jpg', tags: ['hoodies', 'merch'] },
            { title: 'Jersey Design - Club', img: 'images/works/jersey1.jpg', tags: ['jerseys', 'sports'] },
            { title: 'Polo Branding - Corporate', img: 'images/works/polo1.jpg', tags: ['polo', 'corporate'] },
            { title: 'Uniform Batch - School', img: 'images/works/uniform1.jpg', tags: ['uniforms', 'bulk'] },
            { title: 'Mug & Souvenir Set', img: 'images/works/merch1.jpg', tags: ['mugs', 'souvenir'] },
            { title: 'Tote Bags - Event', img: 'images/works/tote1.jpg', tags: ['totes', 'merch'] }
        ],
        lamination: [
            { title: 'Laminated Menu - Cafe', img: 'images/works/lam1.jpg', tags: ['lamination', 'menu'] },
            { title: 'Laminated ID Cards - Staff', img: 'images/works/id1.jpg', tags: ['lamination', 'ids'] },
            { title: 'Laminated Posters - Outdoor', img: 'images/works/lam2.jpg', tags: ['lamination', 'posters'] },
            { title: 'Laminated Certificates - Awards', img: 'images/works/cert1.jpg', tags: ['lamination', 'certificates'] },
            { title: 'Laminated Brochures - Durable', img: 'images/works/lam3.jpg', tags: ['lamination', 'brochure'] },
            { title: 'Laminated Maps - Field', img: 'images/works/map1.jpg', tags: ['lamination', 'maps'] },
            { title: 'Laminated Signage - Office', img: 'images/works/sign1.jpg', tags: ['lamination', 'signage'] },
            { title: 'Lamination Samples Pack', img: 'images/works/lam4.jpg', tags: ['lamination', 'samples'] }
        ],
        other: [
            { title: 'Custom Print - Mugs', img: 'images/works/mug1.jpg', tags: ['mugs', 'souvenir'] },
            { title: 'Sticker Sheets - Branding', img: 'images/works/sticker1.jpg', tags: ['stickers', 'labels'] },
            { title: 'Embroidered Caps - Promo', img: 'images/works/embro1.jpg', tags: ['embroidery', 'caps'] },
            { title: 'Engraved Plaques - Awards', img: 'images/works/plaque1.jpg', tags: ['engraving', 'awards'] },
            { title: 'Window Decals - Retail', img: 'images/works/decal1.jpg', tags: ['decals', 'retail'] },
            { title: 'Foil Stamped Cards - Luxury', img: 'images/works/foil1.jpg', tags: ['foil', 'cards'] },
            { title: 'Die-cut Boxes - Premium', img: 'images/works/box1.jpg', tags: ['boxes', 'packaging'] },
            { title: 'Custom Name Tags - Events', img: 'images/works/nametag1.jpg', tags: ['nametags', 'events'] }
        ]
    };

    // Helper to safely query elements
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

    function openServiceModal(serviceKey) {
        const modal = $('#serviceModal');
        const titleEl = $('#serviceModalTitle');
        const bodyEl = $('#serviceModalBody');

        if (!modal || !bodyEl) return;

        const works = sampleWorks[serviceKey] || [];
        titleEl.textContent = (serviceKey || 'Service').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

        bodyEl.innerHTML = '';

        if (works.length === 0) {
            bodyEl.innerHTML = '<p class="text-gray-600">No sample works available for this service yet.</p>';
        } else {
            const grid = document.createElement('div');
            grid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4';

            works.forEach(w => {
                const card = document.createElement('div');
                card.className = 'bg-white rounded shadow overflow-hidden';

                const img = document.createElement('img');
                img.className = 'w-full h-44 object-cover';
                img.alt = w.title;
                img.src = w.img;

                const cbody = document.createElement('div');
                cbody.className = 'p-3';

                const h = document.createElement('h4');
                h.className = 'font-semibold';
                h.textContent = w.title;

                const tags = document.createElement('p');
                tags.className = 'text-sm text-gray-500 mt-1';
                tags.textContent = w.tags.join(', ');

                cbody.appendChild(h);
                cbody.appendChild(tags);

                card.appendChild(img);
                card.appendChild(cbody);

                grid.appendChild(card);
            });

            bodyEl.appendChild(grid);
        }

        modal.classList.remove('hidden');
        // simple focus trap: focus close button
        const closeBtn = $('#serviceModalClose');
        if (closeBtn) closeBtn.focus();
    }

    function closeServiceModal() {
        const modal = $('#serviceModal');
        if (!modal) return;
        modal.classList.add('hidden');
    }

    // wire click bindings on elements that declare data-service or class 'service-learn'
    function initBindings() {
        // elements with data-service attribute
        $$('[data-service]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const svc = el.getAttribute('data-service');
                openServiceModal(svc);
            });
        });

        // buttons/links with .service-learn
        $$('.service-learn').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const svc = el.getAttribute('data-service') || el.dataset.service || el.closest('[data-service]')?.getAttribute('data-service');
                openServiceModal(svc);
            });
        });

        const close = $('#serviceModalClose');
        if (close) close.addEventListener('click', (e) => {
            e.preventDefault();
            closeServiceModal();
        });

        const overlay = $('#serviceModalOverlay');
        if (overlay) overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeServiceModal();
        });
    }

    // init after DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBindings);
    } else {
        initBindings();
    }

    // expose for debugging
    window.bramaxServiceSamples = { openServiceModal, closeServiceModal, sampleWorks };
})();
