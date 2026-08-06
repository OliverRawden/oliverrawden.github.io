# oliverrawden.github.io

Personal site for Oliver Rawden — a formal, minimal Java developer portfolio.
Built with [Jekyll](https://jekyllrb.com), hosted on GitHub Pages.

## Local development

macOS ships with an old system Ruby (2.6) that cannot install modern gems.
Use Homebrew Ruby:

```bash
brew install ruby

# put Homebrew Ruby first on PATH for this shell
export PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/lib/ruby/gems/4.0.0/bin:$PATH"

bundle install
bundle exec jekyll serve
```

Open [http://localhost:4000](http://localhost:4000).

## Deploy

Pushes to `main` build and deploy automatically via GitHub Actions
(`.github/workflows/pages.yml`). You can also re-run the workflow from the
Actions tab with **Run workflow**.
