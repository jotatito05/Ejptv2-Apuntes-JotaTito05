
// State Variables
let currentLang = 'es';
let currentFilePath = 'README.md';
let dynamicSidebarData = {
    es: [],
    en: [],
    ca: []
};

// UI Translations
const uiTranslations = {
    es: {
        loading: "Cargando contenido...",
        error: "Error",
        error_msg: "No se pudo cargar el contenido.",
        home: "Guía Completa"
    },
    en: {
        loading: "Loading content...",
        error: "Error",
        error_msg: "Could not load content.",
        home: "Full Guide"
    },
    ca: {
        loading: "Carregant contingut...",
        error: "Error",
        error_msg: "No s'ha pogut carregar el contingut.",
        home: "Guia Completa"
    }
};

function createSlug(text) {
    return (text || '').toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
}

function decodeContent(b64) {
    try {
        // REVERSE the string back (AV Bypass)
        const reversed = b64.split('').reverse().join('');
        // Handle UTF-8 decoding properly
        const binaryString = atob(reversed);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return new TextDecoder().decode(bytes);
    } catch (e) {
        console.error("Decoding error:", e);
        return "# Error decoding content";
    }
}

function generateSidebarData(content, lang) {
    const sidebar = [];
    // Add Home Link
    sidebar.push({
        title: uiTranslations[lang]?.home || "Home",
        path: "README.md"
    });

    if (!content) return sidebar;

    // Regex to find H2 headers (## Title)
    const regex = /^##\s+(.+)$/gm;
    let match;

    while ((match = regex.exec(content)) !== null) {
        const title = match[1].trim();
        // Skip "Table of Contents" or similar if present (optional filter)
        if (title.toLowerCase().includes('table of contents') || title.toLowerCase().includes('índice')) continue;

        const slug = createSlug(title);
        sidebar.push({
            title: title,
            path: `README.md#${slug}`
        });
    }
    return sidebar;
}

// Decode content safely
let fullContentEs = "";
let fullContentEn = "";
let fullContentCa = "";

try {
    if (typeof b64ContentEs !== 'undefined') fullContentEs = decodeContent(b64ContentEs);
    if (typeof b64ContentEn !== 'undefined') fullContentEn = decodeContent(b64ContentEn);
    if (typeof b64ContentCa !== 'undefined') fullContentCa = decodeContent(b64ContentCa);

    if (!fullContentEs) console.warn("Spanish content failed to load or is empty");
} catch (e) {
    console.error("Critical Initialization Error:", e);
}

// Generate Dynamic Sidebar Data
if (fullContentEs) dynamicSidebarData.es = generateSidebarData(fullContentEs, 'es');
if (fullContentEn) dynamicSidebarData.en = generateSidebarData(fullContentEn, 'en');
if (fullContentCa) dynamicSidebarData.ca = generateSidebarData(fullContentCa, 'ca');

const notesData = {
    es: { "README.md": fullContentEs },
    en: { "README.md": fullContentEn || "# English content processing..." },
    ca: { "README.md": fullContentCa || "# Contingut en català processant-se..." }
};

// Initialize Marked with Custom Slugger
try {
    if (typeof marked === 'undefined') {
        throw new Error("marked.js library not loaded. Check internet connection or CDN.");
    }

    const renderer = new marked.Renderer();
    renderer.heading = function (text, level, raw) {
        const slug = createSlug(raw || text);
        return `<h${level} id="${slug}">${text}</h${level}>`;
    };

    marked.use({
        renderer: renderer,
        highlight: function (code, lang) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language }).value;
        },
        langPrefix: 'hljs language-'
    });
} catch (e) {
    console.error("Marked Initialization Error:", e);
}

// DOM Elements & Initialization
document.addEventListener('DOMContentLoaded', () => {
    try {
        if (!document.getElementById('nav-tree')) throw new Error("nav-tree element not found");
        if (!document.getElementById('content-area')) throw new Error("content-area element not found");

        loadSidebar();
        loadNote('README.md');
        setupEventListeners();
    } catch (e) {
        console.error("Runtime Error:", e);
        document.body.innerHTML += `<div style="color: red; padding: 20px; border-top: 1px solid #333; background: #111; position: fixed; bottom: 0; width: 100%; z-index: 9999;">
            <h3>Runtime Error</h3>
            <p>${e.message}</p>
        </div>`;
    }
});

function loadSidebar() {
    const navTree = document.getElementById('nav-tree');
    if (!navTree) return;

    navTree.innerHTML = '';
    const groupTitle = document.createElement('div');
    groupTitle.className = 'nav-group-title';
    groupTitle.textContent = "CONTENIDO"; // Could assume 'CONTENTS' based on lang but simple is fine
    navTree.appendChild(groupTitle);

    const data = dynamicSidebarData[currentLang] || dynamicSidebarData.es;

    if (!data || data.length === 0) {
        console.warn("Sidebar data is empty");
        navTree.innerHTML += '<div class="nav-link">No loaded content</div>';
        return;
    }

    data.forEach(item => {
        const link = document.createElement('a');
        link.className = 'nav-link';
        link.textContent = item.title;

        if (item.path.includes('#')) {
            link.href = item.path;
            link.onclick = (e) => {
                e.preventDefault();
                const [file, anchor] = item.path.split('#');
                if (currentFilePath !== file) {
                    loadNote(file).then(() => scrollToAnchor(anchor));
                } else {
                    scrollToAnchor(anchor);
                }

                // Active state handling
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    document.querySelector('.sidebar').classList.remove('active');
                }
            };
        } else {
            link.href = "#";
            link.onclick = (e) => {
                e.preventDefault();
                loadNote(item.path);

                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                if (window.innerWidth <= 768) {
                    document.querySelector('.sidebar').classList.remove('active');
                }
            };
        }
        navTree.appendChild(link);
    });
}

function scrollToAnchor(anchorId) {
    // Wait a brief moment for rendering
    setTimeout(() => {
        const element = document.getElementById(anchorId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn("Anchor not found:", anchorId);
        }
    }, 100);
}

async function loadNote(filePath) {
    currentFilePath = filePath;
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `<div class="loading">${uiTranslations[currentLang].loading}</div>`;

    try {
        await new Promise(r => setTimeout(r, 100)); // Short delay for UI feedback
        const content = notesData[currentLang][filePath];

        if (content) {
            contentArea.innerHTML = marked.parse(content);
            hljs.highlightAll();
            enhanceCodeBlocks();
            generateTOC();

            // Fade in effect
            contentArea.classList.remove('fade-in');
            void contentArea.offsetWidth; // Trigger reflow
            contentArea.classList.add('fade-in');
        } else {
            throw new Error("Content not found");
        }
    } catch (error) {
        console.error(error);
        contentArea.innerHTML = `
            <div class="error-container">
                <h2>${uiTranslations[currentLang].error}</h2>
                <p>${uiTranslations[currentLang].error_msg}</p>
                <p style="font-size:0.8em">${error.message}</p>
            </div>
        `;
    }
}

function enhanceCodeBlocks() {
    document.querySelectorAll('pre code').forEach((block) => {
        const pre = block.parentElement;
        pre.classList.add('code-block');
        const header = document.createElement('div');
        header.className = 'code-header';

        const dots = document.createElement('div');
        dots.className = 'code-dots';
        dots.innerHTML = '<span></span><span></span><span></span>';

        const lang = block.className.replace('hljs language-', '') || 'text';
        const langLabel = document.createElement('span');
        langLabel.className = 'code-lang';
        langLabel.textContent = lang.toUpperCase();

        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.innerHTML = '📋 Copy';
        copyBtn.onclick = () => {
            navigator.clipboard.writeText(block.textContent);
            copyBtn.innerHTML = '✅ Copied!';
            setTimeout(() => copyBtn.innerHTML = '📋 Copy', 2000);
        };

        header.appendChild(dots);
        header.appendChild(langLabel);
        header.appendChild(copyBtn);
        pre.insertBefore(header, block);
    });
}

function generateTOC() {
    const tocNav = document.getElementById('toc-nav');
    if (!tocNav) return;
    tocNav.innerHTML = '';
    const contentArea = document.getElementById('content-area');
    const headers = contentArea.querySelectorAll('h2, h3');

    if (headers.length === 0) {
        tocNav.innerHTML = '<p style="color: var(--text-secondary); font-size: 0.8rem;">No sections</p>';
        return;
    }

    headers.forEach((header, index) => {
        if (!header.id) header.id = `section-${index}`;
        const link = document.createElement('a');
        link.href = `#${header.id}`;
        link.textContent = header.textContent;
        link.className = header.tagName === 'H3' ? 'toc-h3' : 'toc-h2';
        link.addEventListener('click', (e) => {
            e.preventDefault();
            header.scrollIntoView({ behavior: 'smooth' });
        });
        tocNav.appendChild(link);
    });
}

function setupEventListeners() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const langSelect = document.getElementById('lang-select');
    const contentArea = document.getElementById('content-area');
    const progressBar = document.getElementById('reading-progress');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && sidebar && !sidebar.contains(e.target) && mobileMenuBtn && !mobileMenuBtn.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });

    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            currentLang = e.target.value;
            loadSidebar();
            loadNote('README.md');
        });
    }

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const navItems = document.querySelectorAll('.nav-link');
            navItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(query)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    if (contentArea && progressBar) {
        contentArea.addEventListener('scroll', () => {
            const scrollTop = contentArea.scrollTop;
            const scrollHeight = contentArea.scrollHeight - contentArea.clientHeight;
            const scrolled = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = `${scrolled}%`;
        });
    }
}
