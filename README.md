# oliverrawden.github.io

Personal site for **Oliver Rawden** — a formal Java / desktop-software portfolio.

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
| `_posts/` | Blog / update posts (shown on home) |
| `_tabs/about.md` | About page (sidebar) |
| `_tabs/projects.md` | Projects page (sidebar) |
| `_config.yml` | Site title, URL, social links |

## Deploy

Pushes to `main` build and deploy via `.github/workflows/pages-deploy.yml`.
Ensure **Settings → Pages → Source** is set to **GitHub Actions**.
