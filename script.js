/* ============================================================
   Parrilla Secreta — interações da landing page
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Menu mobile ---------- */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });

    // Fecha o menu ao clicar em um link
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Ano no rodapé ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Revelar seções ao rolar ---------- */
  var revealTargets = document.querySelectorAll(
    ".section-head, .card, .about-grid, .team-card, .gallery-item, .testimonial, .contact-grid"
  );
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- Formulário de contato (Formspree AJAX) ---------- */
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (e) {
      // Validação nativa
      if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
        return;
      }

      // Se o endpoint ainda não foi configurado, evita envio quebrado
      if (form.action.indexOf("SEU_ID_AQUI") !== -1) {
        e.preventDefault();
        setStatus("Configure o endpoint do Formspree no atributo action do formulário.", "error");
        return;
      }

      e.preventDefault();
      var btn = form.querySelector("button[type=submit]");
      var original = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Enviando...";
      setStatus("Enviando sua solicitação...", "");

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            setStatus("Recebido! Nossa equipe entra em contato em até 24h. 🔥", "success");
          } else {
            setStatus("Não foi possível enviar agora. Tente novamente ou chame no WhatsApp.", "error");
          }
        })
        .catch(function () {
          setStatus("Erro de conexão. Verifique sua internet e tente novamente.", "error");
        })
        .finally(function () {
          btn.disabled = false;
          btn.textContent = original;
        });
    });
  }

  function setStatus(msg, type) {
    if (!status) return;
    status.textContent = msg;
    status.className = "form-note" + (type ? " " + type : "");
  }
})();
