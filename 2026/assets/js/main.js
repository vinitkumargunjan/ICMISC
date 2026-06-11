/* ===================================================================
   ICMISC 2026 — interactions
   =================================================================== */
(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("show");
      toggle.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("show");
        toggle.classList.remove("open");
      });
    });
  }

  /* ---------- Navbar shadow on scroll ---------- */
  var nav = document.getElementById("nav");
  var toTop = document.getElementById("toTop");
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (nav) nav.classList.toggle("scrolled", y > 8);
    if (toTop) toTop.classList.toggle("show", y > 600);
    spy();
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Scroll-spy: highlight active nav link ---------- */
  var navAnchors = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
  var sections = navAnchors
    .map(function (a) {
      var id = a.getAttribute("href");
      return id && id.charAt(0) === "#" ? document.querySelector(id) : null;
    })
    .filter(Boolean);
  function spy() {
    var pos = (window.scrollY || window.pageYOffset) + 120;
    var current = null;
    sections.forEach(function (sec) {
      if (sec.offsetTop <= pos) current = sec.id;
    });
    navAnchors.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    if (!q || !a) return;
    q.addEventListener("click", function () {
      var open = item.classList.contains("open");
      // close siblings for a clean accordion feel
      document.querySelectorAll(".faq-item.open").forEach(function (other) {
        if (other !== item) {
          other.classList.remove("open");
          var oa = other.querySelector(".faq-a");
          if (oa) oa.style.maxHeight = null;
        }
      });
      if (open) {
        item.classList.remove("open");
        a.style.maxHeight = null;
      } else {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });

  /* ---------- Countdown to extended submission deadline ---------- */
  // Target: 15 September 2026, 23:59 (IST, UTC+5:30)
  var target = new Date("2026-09-15T23:59:00+05:30").getTime();
  var cd = document.getElementById("countdown");
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function tick() {
    if (!cd) return;
    var now = Date.now();
    var diff = target - now;
    var d, h, m, s;
    if (diff <= 0) {
      d = h = m = s = 0;
      var head = cd.previousElementSibling; // .sub
    } else {
      d = Math.floor(diff / 86400000);
      h = Math.floor((diff % 86400000) / 3600000);
      m = Math.floor((diff % 3600000) / 60000);
      s = Math.floor((diff % 60000) / 1000);
    }
    var setEl = function (sel, val) {
      var el = cd.querySelector(sel);
      if (el) el.textContent = pad(val);
    };
    setEl("[data-d]", d);
    setEl("[data-h]", h);
    setEl("[data-m]", m);
    setEl("[data-s]", s);
  }
  if (cd) { tick(); setInterval(tick, 1000); }

  /* ---------- Contact form -> mailto ---------- */
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var subject = form.subject.value;
      var msg = form.message.value.trim();
      var note = document.getElementById("formNote");
      if (!name || !email || !msg) {
        if (note) { note.textContent = "Please fill in your name, email and message."; note.style.color = "#dc2626"; }
        return;
      }
      var body =
        "Name: " + name + "%0D%0A" +
        "Email: " + email + "%0D%0A%0D%0A" +
        encodeURIComponent(msg);
      var href =
        "mailto:iotsmartcon@gmail.com" +
        "?subject=" + encodeURIComponent("[ICMISC 2026] " + subject) +
        "&body=" + body;
      window.location.href = href;
      if (note) { note.textContent = "Opening your email client…"; note.style.color = "var(--muted)"; }
    });
  }

  /* ---------- Footer year (safety, in case of reuse) ---------- */
  onScroll();
})();
