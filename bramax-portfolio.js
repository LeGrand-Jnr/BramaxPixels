// Live portfolio filtering: text search + category buttons
(function () {
    const qs = (s, ctx = document) => ctx.querySelector(s);
    const qsa = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));

    function normalizeText(t) {
        return (t || '').toString().toLowerCase().trim();
    }

    function matchesText(itemEl, query) {
        if (!query) return true;
        const q = normalizeText(query);
        const title = normalizeText(qs('h3', itemEl)?.textContent);
        const desc = normalizeText(qs('p', itemEl)?.textContent);
        const tags = normalizeText(itemEl.getAttribute('data-tags'));
        return title.includes(q) || desc.includes(q) || tags.includes(q);
    }

    function matchesCategory(itemEl, category) {
        if (!category || category === 'all') return true;
        const tags = (itemEl.getAttribute('data-tags') || '').toLowerCase();
        return tags.split(',').map(s => s.trim()).includes(category.toLowerCase());
    }

    function filterGrid() {
        const query = qs('#portfolioSearch')?.value || '';
        const activeBtn = qs('.portfolio-filter button.active');
        const category = activeBtn?.getAttribute('data-category') || 'all';
        const items = qsa('.portfolio-item');

        items.forEach(item => {
            const show = matchesText(item, query) && matchesCategory(item, category);
            item.style.display = show ? '' : 'none';
            if (show) item.classList.remove('opacity-40'); else item.classList.add('opacity-40');
        });
    }

    function init() {
        const buttons = qsa('.portfolio-filter button');
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                filterGrid();
            });
        });

        const input = qs('#portfolioSearch');
        if (input) {
            input.addEventListener('input', () => {
                filterGrid();
            });
        }

        // initial filter
        // ensure exactly one active button
        if (!qs('.portfolio-filter button.active')) {
            const all = qs('.portfolio-filter button[data-category="all"]');
            if (all) all.classList.add('active');
        }
        filterGrid();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
    window.bramaxPortfolioFilter = { filterGrid };
})();
