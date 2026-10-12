
import React, { useState } from "react";
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    BookOpen,
    Check,
    Clock3,
    Coffee,
    Heart,
    MapPin,
    Menu as MenuIcon,
    Sparkles,
    X,
} from "lucide-react";

const photos = {
    hero: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85",
    storyHome: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
    ritualBeans: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1000&q=85",
    ritualGrind: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=85",
    ritualDrip: "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?auto=format&fit=crop&w=1000&q=85",
    ritualPour: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=85",
    signatureCup: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1000&q=85",
    productBeans: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=900&q=85",
    productJournal: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85",
    productGift: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=85",
    journalSunrise: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1000&q=85",
    journalRain: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1000&q=85",
    journalRecipes: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=85",
    visitCafe: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
    menuFilter: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=85",
    menuJaggery: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=85",
    menuTea: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=85",
    menuBiscuit: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=85",
    menuCocoa: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=85",
    menuCake: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=85",
    gallery1: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=85",
    gallery2: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=85",
    gallery3: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=85",
    gallery4: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=800&q=85",
};

const menuItems = [
    {
        name: "The Heirloom Filter",
        category: "Coffee",
        price: "₹120",
        description: "Traditional filter coffee, slow brewed and served warm in brass davarah.",
        image: photos.menuFilter,
        icon: "☕",
    },
    {
        name: "Golden Jaggery Coffee",
        category: "Coffee",
        price: "₹145",
        description: "A signature concept pairing deep coffee notes with organic palm jaggery.",
        image: photos.menuJaggery,
        icon: "✳",
    },
    {
        name: "Cardamom Evening Tea",
        category: "Tea",
        price: "₹90",
        description: "A comforting cup inspired by spice-box memories and crushed green cardamom.",
        image: photos.menuTea,
        icon: "♨",
    },
    {
        name: "Grandma's Butter Biscuit",
        category: "Bites",
        price: "₹80",
        description: "A melt-in-mouth buttery treat baked fresh for long afternoon conversations.",
        image: photos.menuBiscuit,
        icon: "❋",
    },
    {
        name: "Monsoon Cocoa",
        category: "Tea",
        price: "₹130",
        description: "A rich, velvety spiced chocolate drink with cinnamon for rainy days.",
        image: photos.menuCocoa,
        icon: "♡",
    },
    {
        name: "Sweet Memory Cake",
        category: "Bites",
        price: "₹160",
        description: "A delicate tea-time sponge cake infused with roasted nutmeg and vanilla.",
        image: photos.menuCake,
        icon: "✿",
    },
];

const stories = [
    {
        title: "The First Cup Before Sunrise",
        category: "MEMORIES",
        image: photos.journalSunrise,
        excerpt: "Before the street woke, the kitchen had already begun its quiet ritual.",
        body: "The first sound was the soft click of the kitchen door. Then came the gentle rattle of the old coffee filter. Ammamma believed that a home should wake slowly. She would measure the grounds carefully, pour hot water, and let time do the rest. Outside, the morning was still blue. Inside, the fragrance of coffee made everything feel familiar. Some mornings need no grand beginning. Just a warm cup, an open window, and someone willing to sit beside you.",
    },
    {
        title: "Rain Against the Veranda",
        category: "LITTLE STORIES",
        image: photos.journalRain,
        excerpt: "A rainy afternoon, a brass tumbler, and nowhere else to be.",
        body: "Rain arrived without asking permission. Ammamma pulled a chair closer to the veranda and placed two cups on the old wooden table. The roof kept a rhythm of its own, and the garden smelled of wet earth. Nobody hurried to speak. Every now and then, she would tell a small story from another rainy season. By the time the coffee was gone, the clouds had begun to part. The afternoon taught us that not every moment needs a plan.",
    },
    {
        title: "Recipes in the Margins",
        category: "RECIPES",
        image: photos.journalRecipes,
        excerpt: "The best notes were always written beside the original recipe.",
        body: "The recipe book was full of careful measurements, crossed-out instructions, and notes written in the margins. A little more patience. Lower the flame. Serve while warm. Ammamma said recipes were not rules carved in stone; they were invitations to pay attention. The important part was to taste, learn, and make the next cup your own. Years later, those small notes still felt like advice from someone sitting right beside us.",
    },
];

const rituals = [
    {
        number: "01",
        title: "Choose with care",
        text: "Every memorable cup begins with the character of its beans and the attention given to choosing them.",
        image: photos.ritualBeans,
        note: "THE BEGINNING",
    },
    {
        number: "02",
        title: "Let the aroma bloom",
        text: "Freshly ground coffee releases the aromas that make the kitchen feel like home.",
        image: photos.ritualGrind,
        note: "THE AROMA",
    },
    {
        number: "03",
        title: "Give it time",
        text: "Hot water meets the coffee grounds. The decoction gathers its depth one slow drop at a time.",
        image: photos.ritualDrip,
        note: "THE PATIENCE",
    },
    {
        number: "04",
        title: "Pour a little love",
        text: "The finished cup is served warm, ready for a conversation that lasts longer than expected.",
        image: photos.ritualPour,
        note: "THE MOMENT",
    },
];

function SectionLabel({ children, light = false }) {
    return (
        <div className={`section-label ${light ? "label-light" : ""}`}>
            <span className="label-flower">✳</span>
            {children}
        </div>
    );
}

function App() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [filter, setFilter] = useState("All");
    const [activeStory, setActiveStory] = useState(null);

    const visibleItems =
        filter === "All"
            ? menuItems
            : menuItems.filter((item) => item.category === filter);

    function closeMobileMenu() {
        setMobileOpen(false);
    }

    return (
        <main>
            <header className="site-header">
                <a className="brand" href="#home" onClick={closeMobileMenu}>
                    <span className="brand-mark"><Coffee size={23} strokeWidth={1.5} /></span>
                    <span className="brand-copy">
                        <span className="brand-name">The Coffee Heirloom</span>
                        <span className="brand-tagline">A STORY IN EVERY CUP</span>
                    </span>
                </a>

                <button
                    className="mobile-toggle"
                    aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X /> : <MenuIcon />}
                </button>

                <nav className={`nav-links ${mobileOpen ? "nav-open" : ""}`}>
                    {[
                        ["Our Story", "#story"],
                        ["The Ritual", "#ritual"],
                        ["The Menu", "#menu"],
                        ["Journal", "#journal"],
                        ["Visit Us", "#visit"],
                    ].map(([label, href]) => (
                        <a key={label} href={href} onClick={closeMobileMenu}>
                            {label}
                        </a>
                    ))}
                    <a className="nav-cta" href="#menu" onClick={closeMobileMenu}>
                        Find Your Cup <ArrowUpRight size={15} />
                    </a>
                </nav>
            </header>

            <section className="hero" id="home">
                <div className="hero-paper-decoration decoration-one">✳</div>
                <div className="hero-paper-decoration decoration-two">❋</div>

                <div className="hero-copy">
                    <SectionLabel>A HERITAGE COFFEE HOUSE</SectionLabel>
                    <h1>
                        Every cup
                        <br />
                        holds a <em>story.</em>
                    </h1>
                    <p className="hero-description">
                        Slow-brewed coffee, treasured rituals, and little moments
                        that feel just like home.
                    </p>
                    <div className="hero-actions">
                        <a href="#story" className="button button-dark">
                            Discover Our Story <ArrowRight size={16} />
                        </a>
                        <a href="#menu" className="text-link">
                            Explore the Menu <ArrowDown size={15} />
                        </a>
                    </div>
                    <div className="hero-footnote">
                        <span className="tiny-star">✳</span>
                        MADE SLOWLY. SHARED WARMLY.
                    </div>
                </div>

                <div className="hero-art">
                    <div className="hero-image-frame">
                        <img src={photos.hero} alt="Warm coffee cups and a coffee-making ritual" />
                        <div className="image-wash" />
                    </div>
                    <div className="hero-round-stamp">
                        <span>BREWED WITH</span>
                        <strong>♥</strong>
                        <span>MEMORIES</span>
                    </div>
                    <div className="hero-caption">
                        <span className="caption-rule" />
                        <span>A LITTLE WARMTH, IN EVERY POUR</span>
                    </div>
                    <span className="floating-bean bean-one">●</span>
                    <span className="floating-bean bean-two">●</span>
                    <span className="floating-bean bean-three">●</span>
                </div>

                <a href="#story" className="hero-scroll" aria-label="Scroll to our story">
                    <span>SCROLL TO SLOW DOWN</span>
                    <ArrowDown size={16} />
                </a>
            </section>

            <section className="story-section section-pad" id="story">
                <div className="story-art">
                    <div className="story-image">
                        <img
                            src={photos.storyHome}
                            alt="A warm heritage-inspired cafe courtyard"
                            loading="lazy"
                        />
                    </div>
                    <div className="story-note">
                        <span className="note-flower">✳</span>
                        <p>Some recipes are measured in memories.</p>
                        <span className="note-signature">— Ammamma's journal</span>
                    </div>
                    <div className="story-image-caption">A HOME FULL OF LITTLE STORIES</div>
                </div>

                <div className="story-copy">
                    <SectionLabel>THE HEART OF OUR HOME</SectionLabel>
                    <h2>
                        Meet the keeper
                        <br />
                        of <em>little stories.</em>
                    </h2>
                    <div className="ammamma-sticky-note" id="ammamma-note">
                        <div className="sticky-tape" aria-hidden="true" />
                        <div className="sticky-header">
                            <span className="sticky-pin">📌</span>
                            <span className="sticky-tag">AMMAMMA’S STORY</span>
                        </div>
                        <p className="sticky-text">
                            “In our home, coffee was never just a drink to wake up—it was an unhurried morning ritual.
                            We measured the dark decoction by heart, frothed the milk high between the brass dabarah and tumbler,
                            and waited for the courtyard to fill with that rich, roasted chicory perfume. Never rush a good cup,
                            and never let anyone drink alone.”
                        </p>
                        <div className="sticky-author">
                            <span>— Ammamma’s Diary, Madras 1968</span>
                            <span className="sticky-heart">♡</span>
                        </div>
                    </div>
                    <p>
                        This little corner of the world is our way of keeping
                        those rituals alive, one thoughtful cup at a time.
                    </p>
                    <a href="#journal" className="underlined-link">
                        Read her little journal <ArrowUpRight size={16} />
                    </a>
                    <div className="signature">With warmth, always.</div>
                </div>
            </section>

            <section className="ritual-section section-pad" id="ritual">
                <div className="section-heading centered">
                    <SectionLabel>THE ART OF SLOW COFFEE</SectionLabel>
                    <h2>
                        A little ritual.
                        <br />
                        <em>A lot of heart.</em>
                    </h2>
                    <p>
                        The quiet steps between the first scoop and that very first sip.
                    </p>
                </div>

                <div className="ritual-grid">
                    {rituals.map((ritual) => (
                        <article className="ritual-card" key={ritual.number}>
                            <div className="ritual-image">
                                <img src={ritual.image} alt={ritual.title} loading="lazy" />
                                <span className="ritual-number">{ritual.number}</span>
                            </div>
                            <div className="ritual-content">
                                <span className="ritual-kicker">{ritual.note}</span>
                                <h3>{ritual.title}</h3>
                                <p>{ritual.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="quote-section">
                <div className="quote-decoration">“</div>
                <SectionLabel light>A LITTLE THOUGHT FROM AMMAMMA</SectionLabel>
                <blockquote>
                    "When life feels hurried,
                    <br />
                    let your coffee be <em>slow.</em>"
                </blockquote>
                <div className="quote-footer">
                    <span />
                    A NOTE TO KEEP
                    <span />
                </div>
            </section>

            <section className="menu-section section-pad" id="menu">
                <div className="menu-top">
                    <div>
                        <SectionLabel>MADE FOR YOUR MOMENT</SectionLabel>
                        <h2>
                            Find your kind
                            <br />
                            of <em>comfort.</em>
                        </h2>
                    </div>
                    <p className="menu-intro">
                        A thoughtful little collection of warm cups and
                        sweet companions. Pick a favourite and stay awhile.
                    </p>
                </div>

                <div className="menu-filters" role="group" aria-label="Filter menu">
                    {["All", "Coffee", "Tea", "Bites"].map((category) => (
                        <button
                            key={category}
                            className={`filter-button ${filter === category ? "filter-active" : ""}`}
                            onClick={() => setFilter(category)}
                            aria-pressed={filter === category}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="menu-grid">
                    {visibleItems.map((item) => (
                        <article className="menu-item" key={item.name}>
                            <div className="menu-item-media">
                                <img src={item.image} alt={item.name} loading="lazy" />
                                <span className="menu-item-icon-overlay">{item.icon}</span>
                            </div>
                            <div className="menu-item-copy">
                                <div className="menu-item-title">
                                    <h3>{item.name}</h3>
                                    <span>{item.price}</span>
                                </div>
                                <p>{item.description}</p>
                                <span className="menu-category">{item.category}</span>
                            </div>
                        </article>
                    ))}
                </div>
                <p className="demo-note">
                    Sample menu and prices for this website concept. Replace them
                    with your actual offerings before publishing.
                </p>
            </section>

            <section className="signature-section section-pad">
                <div className="signature-image">
                    <img src={photos.signatureCup} alt="A freshly prepared cup of coffee" loading="lazy" />
                    <div className="signature-image-label">
                        <span>THE HOUSE FAVOURITE</span>
                        <strong>A cup to come home to.</strong>
                    </div>
                </div>
                <div className="signature-copy">
                    <SectionLabel>OUR LITTLE SIGNATURE</SectionLabel>
                    <h2>
                        Not just a drink.
                        <br />
                        A <em>feeling.</em>
                    </h2>
                    <p>
                        Imagine a strong, aromatic filter coffee, served warm
                        and enjoyed without watching the clock. A simple
                        pleasure, made special by the moment you give it.
                    </p>
                    <div className="signature-points">
                        <span><Check size={16} /> A thoughtful brewing ritual</span>
                        <span><Check size={16} /> A moment worth slowing down for</span>
                        <span><Check size={16} /> Best shared with a little conversation</span>
                    </div>
                    <a href="#menu" className="button button-dark">
                        Explore Our Menu <ArrowRight size={16} />
                    </a>
                </div>
            </section>

            <section className="products-section section-pad" id="products">
                <div className="section-heading centered">
                    <SectionLabel>A LITTLE PIECE OF HOME</SectionLabel>
                    <h2>
                        Take the ritual
                        <br />
                        <em>with you.</em>
                    </h2>
                    <p>Thoughtful coffee gifts, inspired by everyday traditions.</p>
                </div>
                <div className="products-grid">
                    <article className="product-card">
                        <div className="product-image product-image-one">
                            <img src={photos.productBeans} alt="Coffee beans for a coffee gift concept" loading="lazy" />
                            <span className="product-seal">01</span>
                        </div>
                        <span className="product-type">THE DAILY RITUAL</span>
                        <h3>The Heirloom Coffee</h3>
                        <p>A concept coffee collection for slow mornings.</p>
                        <a href="#visit" className="underlined-link">
                            Ask about the collection <ArrowUpRight size={15} />
                        </a>
                    </article>
                    <article className="product-card">
                        <div className="product-image product-image-two">
                            <img src={photos.productJournal} alt="A notebook for recipes and memories" loading="lazy" />
                            <span className="product-seal">02</span>
                        </div>
                        <span className="product-type">WORDS TO KEEP</span>
                        <h3>The Memory Journal</h3>
                        <p>A place for recipes, little notes, and treasured moments.</p>
                        <a href="#journal" className="underlined-link">
                            Open the journal <ArrowUpRight size={15} />
                        </a>
                    </article>
                    <article className="product-card">
                        <div className="product-image product-image-three">
                            <img src={photos.productGift} alt="A welcoming coffee gift set" loading="lazy" />
                            <span className="product-seal">03</span>
                        </div>
                        <span className="product-type">GIFT A MOMENT</span>
                        <h3>The Little Coffee Gift</h3>
                        <p>A proposed gift set for someone who deserves a slower day.</p>
                        <a href="#visit" className="underlined-link">
                            Discover more <ArrowUpRight size={15} />
                        </a>
                    </article>
                </div>
                <p className="demo-note">
                    These are concept products, not confirmed items for sale.
                </p>
            </section>

            <section className="journal-section section-pad" id="journal">
                <div className="menu-top journal-top">
                    <div>
                        <SectionLabel>FROM AMMAMMA'S JOURNAL</SectionLabel>
                        <h2>
                            Stories best read
                            <br />
                            <em>with a warm cup.</em>
                        </h2>
                    </div>
                    <p className="menu-intro">
                        Little memories about rainy afternoons, kitchen rituals,
                        and the people who make an ordinary day feel special.
                    </p>
                </div>

                <div className="journal-grid">
                    {stories.map((story, index) => (
                        <article className={`journal-card journal-card-${index + 1}`} key={story.title}>
                            <button
                                className="journal-image"
                                onClick={() => setActiveStory(story)}
                                aria-label={`Read ${story.title}`}
                            >
                                <img src={story.image} alt="" loading="lazy" />
                                <span className="journal-open"><BookOpen size={19} /></span>
                            </button>
                            <div className="journal-card-content">
                                <span className="product-type">{story.category}</span>
                                <h3>{story.title}</h3>
                                <p>{story.excerpt}</p>
                                <button className="underlined-link journal-read" onClick={() => setActiveStory(story)}>
                                    Read the story <ArrowRight size={15} />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="gallery-section section-pad" id="gallery">
                <div className="section-heading centered">
                    <SectionLabel>MOMENTS IN THE COURTYARD</SectionLabel>
                    <h2>
                        Captured in the
                        <br />
                        <em>golden light.</em>
                    </h2>
                    <p>Little glimpses of slow mornings, quiet corners, and warm conversations.</p>
                </div>
                <div className="gallery-grid">
                    <div className="gallery-card">
                        <img src={photos.gallery1} alt="Coffee latte art in morning sun" loading="lazy" />
                        <span className="gallery-tag">Morning Light</span>
                    </div>
                    <div className="gallery-card">
                        <img src={photos.gallery2} alt="Quiet reading with warm coffee" loading="lazy" />
                        <span className="gallery-tag">Unhurried Hours</span>
                    </div>
                    <div className="gallery-card">
                        <img src={photos.gallery3} alt="Vintage coffee brewing craft" loading="lazy" />
                        <span className="gallery-tag">Heritage Craft</span>
                    </div>
                    <div className="gallery-card">
                        <img src={photos.gallery4} alt="Steaming artisanal coffee on rustic wooden planks" loading="lazy" />
                        <span className="gallery-tag">Slow Living</span>
                    </div>
                </div>
            </section>

            <section className="visit-section section-pad" id="visit">
                <div className="visit-copy">
                    <SectionLabel>THERE'S A PLACE AT OUR TABLE</SectionLabel>
                    <h2>
                        Come for the coffee.
                        <br />
                        Stay for <em>the stories.</em>
                    </h2>
                    <p>
                        Picture a warm corner, a familiar cup, and a little
                        time to yourself. We would love to welcome you.
                    </p>
                    <div className="visit-detail">
                        <MapPin size={19} />
                        <div>
                            <strong>Find our home</strong>
                            <span>42, Heritage Silk Street, Mylapore, Chennai, Tamil Nadu 600004</span>
                        </div>
                    </div>
                    <div className="visit-detail">
                        <Clock3 size={19} />
                        <div>
                            <strong>When to visit</strong>
                            <span>Tuesday – Sunday: 6:30 AM – 10:00 PM (Mondays Closed)</span>
                        </div>
                    </div>
                    <a href="#menu" className="button button-dark">
                        Explore the Menu <ArrowRight size={16} />
                    </a>
                </div>
                <div className="visit-image">
                    <img src={photos.visitCafe} alt="An inviting cafe interior" loading="lazy" />
                    <div className="visit-image-caption">
                        <Sparkles size={18} />
                        <span>A LITTLE CORNER OF COMFORT</span>
                    </div>
                </div>
            </section>

            <section className="letter-section" id="letter">
                <div className="letter-ornament">✳</div>
                <SectionLabel>A LETTER BEFORE YOU GO</SectionLabel>
                <h2>
                    Until the next
                    <br />
                    <em>cup, dear friend.</em>
                </h2>
                <p className="letter-copy">
                    May your mornings be gentle, your coffee be warm,
                    and your days leave room for one more good story.
                </p>
                <p className="letter-signature">With warmth, Ammamma ♡</p>
            </section>

            <footer className="site-footer">
                <a className="brand footer-brand" href="#home">
                    <span className="brand-mark"><Coffee size={23} strokeWidth={1.5} /></span>
                    <span className="brand-copy">
                        <span className="brand-name">The Coffee Heirloom</span>
                        <span className="brand-tagline">A STORY IN EVERY CUP</span>
                    </span>
                </a>
                <p>Made slowly. Shared warmly. Remembered always.</p>
                <div className="footer-links">
                    <a href="#story">Our Story</a>
                    <a href="#menu">The Menu</a>
                    <a href="#journal">Journal</a>
                    <a href="#visit">Visit Us</a>
                </div>
                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} The Coffee Heirloom · Demo concept</span>
                    <span className="footer-love"><Heart size={14} /> A little warmth in every pour</span>
                    <a href="#home" className="back-top">Back to top ↑</a>
                </div>
            </footer>


            {activeStory && (
                <div
                    className="story-modal-backdrop"
                    role="presentation"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) setActiveStory(null);
                    }}
                >
                    <article
                        className="story-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-story-title"
                    >
                        <button
                            className="modal-close"
                            onClick={() => setActiveStory(null)}
                            aria-label="Close story"
                        >
                            <X size={22} />
                        </button>
                        <img src={activeStory.image} alt="" className="modal-story-image" />
                        <div className="modal-story-copy">
                            <SectionLabel>{activeStory.category}</SectionLabel>
                            <h2 id="modal-story-title">{activeStory.title}</h2>
                            <p className="modal-excerpt">{activeStory.excerpt}</p>
                            <p>{activeStory.body}</p>
                            <button className="button button-dark" onClick={() => setActiveStory(null)}>
                                Back to the journal <ArrowRight size={16} />
                            </button>
                        </div>
                    </article>
                </div>
            )}
        </main>
    );
}

export default App;
