# oliverrawden.github.io

Portfolio for **Oliver Rawden**: software tools, product design and AI automation for small businesses.

Built with [Jekyll](https://jekyllrb.com) and
[Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy), hosted on GitHub Pages.

## Local development

macOS system Ruby is too old. Use Homebrew Ruby (3.4+ recommended):

```bash
brew install ruby@3.4
export PATH="/opt/homebrew/opt/ruby@3.4/bin:$PATH"

bundle install
bundle exec jekyll serve
```

Chirpy requires Ruby **3.1–3.4** (not system Ruby 2.6, and not Ruby 4.x).

Open [http://127.0.0.1:4000](http://127.0.0.1:4000).

Or use the helper script:

```bash
bash tools/run.sh
```

## Content

| Path | Purpose |
|------|---------|
| `_layouts/home.html` | Home page layout: offers, projects, Rawden, contact |
| `_data/portfolio.yml` | Home page content: offers and project cards |
| `_tabs/` | Sidebar tabs: Projects, Skills, Timeline, About |
| `projects/*.md` | One case-study page per project |
| `assets/css/jekyll-theme-chirpy.scss` | Theme overrides and portfolio styles |
| `_config.yml` | Site title, URL, social links |

- **Gaps:** anything still to fill in is marked `<span class="tbc">TBC</span>`. Search for `tbc` to find them.
- **Images:** put them in `assets/img/projects/<slug>/` and replace a `<div class="proof-slot">…</div>` placeholder with `![Description](/assets/img/projects/<slug>/<file>)`.
- **New project:** add `projects/<slug>.md`, then list it in `_data/portfolio.yml`, `_tabs/projects.md`, `_tabs/skills.md` and `_tabs/timeline.md`.

## Rules

- No API keys, passwords, private client data or personal details in the repo or screenshots.
- Client work is shown only with the client's permission, using dummy data in screenshots.
- No invented testimonials, numbers or results.

## Deploy

Every push builds and link-tests the site via `.github/workflows/pages-deploy.yml`; only `main` is published.
Ensure **Settings → Pages → Source** is set to **GitHub Actions**.
