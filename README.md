# Parrilla Secreta — Landing Page

Landing page profissional, responsiva e focada em conversão para a churrascaria **Parrilla Secreta**.
Página única (one-page), mobile-first, com SEO, código semântico e formulário funcional.

## 📁 Estrutura

```
Brazil Landing page/
├── index.html          # Marcação semântica + SEO (meta tags, Open Graph, JSON-LD)
├── styles.css          # Estilos (paleta charcoal + ember + cream, responsivo)
├── script.js           # Menu mobile, reveal on scroll, envio do formulário
├── assets/
│   ├── crest.svg       # Selo/brasão circular (showpiece) — usado no rodapé
│   ├── logo.svg        # Lockup horizontal (emblema + wordmark + tagline)
│   ├── mark.svg        # Apenas o emblema (usado no header)
│   ├── favicon.svg     # Ícone da aba do navegador
│   └── images/         # TODAS as fotos do site (substitua pelas reais do cliente)
│       ├── hero-brasa.jpg
│       ├── servico-cortes.jpg / servico-rodizio.jpg / servico-eventos.jpg
│       ├── sobre-salao.jpg
│       ├── galeria-1.jpg … galeria-6.jpg
│       ├── equipe-ramon.jpg / equipe-helena.jpg / equipe-bruno.jpg / equipe-carla.jpg
│       ├── depoimento-juliana.jpg / depoimento-ricardo.jpg / depoimento-fernanda.jpg
│       └── og-image.jpg   (imagem de compartilhamento em redes sociais)
├── logos.html          # Página para visualizar todas as variações do logo
└── README.md
```

## ✅ O que está incluído

- **Hero** com chamada principal + CTAs (Reservar / Ver Cardápio)
- **Faixa de números** (12 anos, +30 cortes, 4,9★, +50 mil clientes)
- **Serviços** (Cortes Nobres, Rodízio, Eventos)
- **Cardápio & Preços** — destaque do Rodízio (R$ 89/pessoa) + à la carte
- **Botão flutuante de WhatsApp** fixo (ótimo no celular)
- **Sobre a empresa** com destaque "Desde 2012"
- **Equipe** com fotos e cargos
- **Galeria** em mosaico (clique para ampliar)
- **Depoimentos** + selos de confiança
- **Mapa** do Google integrado
- **Formulário** de reserva/orçamento (validação + envio AJAX)
- Logo próprio em SVG, favicon, Open Graph e dados estruturados (Rich Results)

## 🔧 Passos para publicar

### 1. Ativar o formulário (Formspree — grátis)
1. Crie uma conta em <https://formspree.io> e um novo formulário.
2. Copie o ID do endpoint (ex.: `https://formspree.io/f/abcdwxyz`).
3. Em `index.html`, substitua no `<form>`:
   ```html
   action="https://formspree.io/f/SEU_ID_AQUI"
   ```
   pelo seu endpoint real. Pronto — os envios chegam no e-mail cadastrado.

   > Alternativa: EmailJS. Basta trocar a lógica de `fetch` em `script.js`.

### 2. Trocar as fotos pelas reais do cliente  ⭐
As fotos ficam **todas dentro de `assets/images/`** (baixadas localmente, o site
não depende mais de internet). São placeholders reais de churrasco/parrilla e retratos.

**Como substituir:** basta salvar a foto real do cliente **com o mesmo nome de arquivo**
(ex.: sobrescrever `equipe-ramon.jpg` pela foto real do parrillero). Nenhuma linha de
código precisa mudar. Dicas:
- Mantenha proporções parecidas (retratos quadrados; hero/galeria em paisagem).
- Comprima as imagens (ex.: squoosh.app / tinypng.com) para carregar rápido.
- Depois ajuste textos, endereço, telefone, WhatsApp, e-mail, horário e CNPJ no `index.html`.
- Atualize o `src` do mapa (`index.html`) com o endereço real.

> O logo está em `assets/` (`crest.svg`, `logo.svg`, `mark.svg`, `favicon.svg`) — todos
> vetoriais (SVG), escaláveis sem perder qualidade. Abra `logos.html` para ver as variações.

### 3. Publicar (qualquer host estático)
Basta subir os arquivos. Opções gratuitas: **Netlify**, **Vercel**, **GitHub Pages**,
Cloudflare Pages. É só arrastar a pasta — não há build.

## 🖥️ Testar localmente

Abra o `index.html` no navegador, ou rode um servidor local:

```bash
# Python
python -m http.server 5500
# depois acesse http://localhost:5500
```

## ⚡ Performance & SEO
- Sem dependências / frameworks — carrega rápido.
- Imagens com `loading="lazy"`, `width/height` definidos.
- HTML semântico, `alt` em imagens, navegação acessível (ARIA).
- Meta description, Open Graph, canonical e JSON-LD (Restaurant) prontos.
- Respeita `prefers-reduced-motion`.

---
*Placeholders de imagem: Unsplash e randomuser.me. Substitua pelo material real do cliente antes de ir ao ar.*
