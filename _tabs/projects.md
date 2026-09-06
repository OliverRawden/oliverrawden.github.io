---
icon: fas fa-code
order: 5
toc: false
description: >-
  Selected work — Ara, a 2D platformer, and this site.
---

A short list of things I have built and am building.

## Ara
{: #ara}

<span class="portfolio-tag">Java</span>
<span class="portfolio-tag">JavaFX</span>

Ara is an on-device AI assistant for macOS, Windows, and Linux. It is a
desktop chat application that runs large language models entirely on your
machine — no cloud inference, no API keys.

Chats, models, and memory stay under `~/Documents/Ara/`. Replies stream in a
sidebar-first UI. The agent can call tools (terminal, web search, persistent
memory), and local data can be encrypted with AES-256-GCM.

Built with JavaFX and [java-llama.cpp](https://github.com/kherud/java-llama.cpp).

Source: [github.com/OliverRawden/Ara](https://github.com/OliverRawden/Ara)

{% include ara-fold.html %}

## Platformer
{: #platformer}

<span class="portfolio-tag">Java</span>
<span class="portfolio-tag">Swing</span>
<span class="portfolio-tag">In progress</span>

A 2D platformer written in Java with Swing, built from scratch by hand — no
generated code.

The game loop, keyboard and mouse input, and a first-pass renderer are in
place. Next: the tile map, camera, and player character.

## This site
{: #this-site}

<span class="portfolio-tag">Jekyll</span>
<span class="portfolio-tag">GitHub Pages</span>

The page you are on. A small, formal portfolio for selected work, built with
Jekyll and [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy), hosted
on GitHub Pages.

Source: [github.com/OliverRawden/oliverrawden.github.io](https://github.com/OliverRawden/oliverrawden.github.io)
