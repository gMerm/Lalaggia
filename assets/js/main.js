// Λαλάγγια Μάνης — μικρές λειτουργίες σελίδας

// Καθαρή διεύθυνση: /index.html γίνεται / (όχι σε τοπικό αρχείο, όπου δεν επιτρέπεται)
const cleanPath = location.pathname.replace(/index\.html$/, "");
if (location.protocol !== "file:" && cleanPath !== location.pathname) {
  history.replaceState(null, "", cleanPath + location.search + location.hash);
}

// Σχέδιο του κορδονιού στον τίτλο, μία φορά στη φόρτωση
const rope = document.querySelector(".rope");
if (rope) requestAnimationFrame(() => rope.classList.add("is-drawn"));

// Μενού για κινητά
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    })
  );
}

// Γραμμή κάτω από το header όταν γίνεται κύλιση
const header = document.querySelector(".site-header");
const onScroll = () => header && header.classList.toggle("is-scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Κουμπί επιστροφής στην αρχή: εμφανίζεται μετά την πρώτη οθόνη
const toTop = document.querySelector(".to-top");
const onScrollTop = () => toTop && toTop.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.8);
window.addEventListener("scroll", onScrollTop, { passive: true });
onScrollTop();

// Όλα τα εσωτερικά links (#...): ομαλή κύλιση και σωστό focus για πληκτρολόγιο
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (ev) => {
    const id = link.getAttribute("href").slice(1);
    const target = id === "top" ? document.body : document.getElementById(id);
    if (!target) return;
    ev.preventDefault();
    if (id === "top") window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    else target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", id === "top" ? location.pathname : "#" + id);
    if (id !== "top") {
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    }
  });
});

// Υπογράμμιση στο μενού για την ενότητα που βλέπει ο επισκέπτης
const navLinks = [...document.querySelectorAll('.site-nav ul a[href^="#"]')];
if ("IntersectionObserver" in window && navLinks.length) {
  const byId = new Map(navLinks.map((a) => [a.getAttribute("href").slice(1), a]));
  const setCurrent = (id) => {
    navLinks.forEach((a) => a.removeAttribute("aria-current"));
    const a = byId.get(id);
    if (a) a.setAttribute("aria-current", "true");
  };
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id));
  }, { rootMargin: "-45% 0px -50% 0px" });
  window.addEventListener("scroll", () => {
    if (window.scrollY < window.innerHeight * 0.4) setCurrent(null);
  }, { passive: true });
  ["istoria", "paragogi", "syndyasmoi", "xondriki", "erotiseis"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) spy.observe(el);
  });
}

// Τρέχον έτος στο footer
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
