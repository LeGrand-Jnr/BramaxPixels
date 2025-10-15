// Bramax service samples - provides sampleWorks dataset and modal wiring
(function () {
    // Minimal sample works per service category. Images are expected to be in the same folder or remote URLs.
    const sampleWorks = {
        photography: [
            { title: 'Event Coverage - Lagos Fest', img: 'images/works/photo1.jpg', tags: ['photography', 'events'] },
            { title: 'Product Shoot - Fresh Bites', img: 'images/works/photo2.jpg', tags: ['photography', 'product'] },
            { title: 'Portrait Series - Faces', img: 'images/works/photo3.jpg', tags: ['photography', 'portrait'] }
        ],
        'large-format': [
            { title: 'Billboard - Summer Sale', img: 'images/works/billboard1.jpg', tags: ['large-format', 'banner'] },
            { title: 'Outdoor Banner - Grand Opening', img: 'images/works/banner1.jpg', tags: ['large-format', 'banner'] }
        ],
        branding: [
            { title: 'Brand Identity - Nova', img: 'images/works/brand1.jpg', tags: ['branding', 'logo'] },
            { title: 'Brand Guidelines - Terra', img: 'images/works/brand2.jpg', tags: ['branding', 'guidelines'] }
        ],
        'graphic-design': [
            { title: 'Flyer - Weekend Promo', img: 'images/works/flyer1.jpg', tags: ['flyer', 'graphic-design'] },
            { title: 'Brochure - Product Line', img: 'images/works/brochure1.jpg', tags: ['brochure', 'graphic-design'] }
        ],
        'shirt-printing': [
            { title: 'T-Shirt Mockups - Team', img: 'images/works/shirt1.jpg', tags: ['shirts', 'merch'] },
            { title: 'Caps - Branded', img: 'images/works/cap1.jpg', tags: ['caps', 'merch'] }
        ],
        lamination: [
            { title: 'Laminated Menu - Cafe', img: 'images/works/lam1.jpg', tags: ['lamination'] }
        ],
        other: [
            { title: 'Custom Print - Mugs', img: 'images/works/mug1.jpg', tags: ['mugs', 'souvenir'] }
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
