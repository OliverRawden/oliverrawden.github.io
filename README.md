# oliverrawden.github.io

Oliver Rawden's portfolio: software tools, product design and AI automation for small businesses.

Plain HTML and CSS, with no build step and no theme. Pushing to `main` publishes the site through `.github/workflows/pages-deploy.yml`.

## Layout

| Path | What it is |
| ---- | ---------- |
| `index.html` | Home: hero, Work with me, flagship and smaller projects, skills with proof, timeline, Rawden, about, contact |
| `projects/*.html` | One case-study page per project |
| `assets/css/site.css` | All styles |
| `assets/img/` | Logo, favicon and project images |
| `404.html` | Not-found page (root-relative links) |

## Editing

- **Gaps:** anything still to fill in is marked `<span class="tbc">TBC</span>`, shown in amber. Search for `tbc` to find them all.
- **Images:** put them in `assets/img/projects/<project-slug>/`, then replace a `<div class="thumb">…</div>` placeholder with `<img src="../assets/img/projects/<slug>/<file>" alt="…">`. Keep them under about 300 KB each.
- **New project:** copy an existing page in `projects/`, change the content, then add it to the project cards or rows, the skills table and the timeline in `index.html`. Update the previous/next links at the bottom of the neighbouring pages.

## Rules

- No API keys, passwords, private client data or personal details in the repo or in screenshots.
- Client work is shown only with the client's permission. Use dummy data in screenshots.
- No invented testimonials, numbers or results.
