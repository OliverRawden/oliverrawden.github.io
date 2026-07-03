(function () {
  const LATEST_JSON =
    "https://raw.githubusercontent.com/OliverRawden/Ara/main/installers/latest.json";
  const RELEASES_API =
    "https://api.github.com/repos/OliverRawden/Ara/releases/latest";
  const RELEASES_URL = "https://github.com/OliverRawden/Ara/releases/latest";

  const versionEl = document.querySelector("[data-ara-version]");
  const releaseDateEl = document.querySelector("[data-ara-release-date]");
  const releaseNotesEl = document.querySelector("[data-ara-release-notes]");
  const downloadGrid = document.querySelector("[data-ara-downloads]");
  const statusEl = document.querySelector("[data-ara-download-status]");

  if (!downloadGrid) return;

  const PREFERRED_ORDER = [
    "macos-pkg-arm64",
    "macos-pkg",
    "macos-dmg-arm64",
    "macos-dmg",
    "windows-msi",
    "windows-exe",
    "linux-deb",
    "linux-rpm",
    "linux-appimage",
  ];

  function formatBytes(bytes) {
    if (!bytes) return "";
    const units = ["B", "KB", "MB", "GB"];
    let size = bytes;
    let unit = 0;
    while (size >= 1024 && unit < units.length - 1) {
      size /= 1024;
      unit += 1;
    }
    const digits = unit > 0 ? 1 : 0;
    return `${size.toFixed(digits)} ${units[unit]}`;
  }

  function platformInfo(key, filename) {
    const known = {
      "macos-pkg-arm64": {
        title: "macOS Installer",
        detail: "Apple Silicon · PKG",
        badge: "Recommended",
      },
      "macos-pkg": {
        title: "macOS Installer",
        detail: "PKG",
        badge: "Recommended",
      },
      "macos-dmg-arm64": {
        title: "macOS Portable",
        detail: "Apple Silicon · DMG",
      },
      "macos-dmg": {
        title: "macOS Portable",
        detail: "DMG",
      },
    };

    if (known[key]) return known[key];

    const lower = (filename || key).toLowerCase();
    if (lower.includes("pkg")) {
      return {
        title: "macOS Installer",
        detail: lower.includes("arm64") ? "Apple Silicon · PKG" : "PKG",
        badge: "Recommended",
      };
    }
    if (lower.includes("dmg")) {
      return {
        title: "macOS Portable",
        detail: lower.includes("arm64") ? "Apple Silicon · DMG" : "DMG",
      };
    }
    if (lower.includes("msi") || lower.includes("exe")) {
      return { title: "Windows", detail: filename };
    }
    if (lower.includes("deb") || lower.includes("rpm") || lower.includes("appimage")) {
      return { title: "Linux", detail: filename };
    }

    return { title: key, detail: filename || "" };
  }

  function createCard(key, url, asset) {
    const filename = url.split("/").pop();
    const info = platformInfo(key, filename);
    const card = document.createElement("a");
    card.className = "download-card";
    card.href = url;
    card.target = "_blank";
    card.rel = "noreferrer";

    const head = document.createElement("div");
    head.className = "download-card-head";

    const platform = document.createElement("span");
    platform.className = "download-platform";
    platform.textContent = info.title;
    head.appendChild(platform);

    if (info.badge) {
      const badge = document.createElement("span");
      badge.className = "download-badge";
      badge.textContent = info.badge;
      head.appendChild(badge);
    }

    card.appendChild(head);

    if (info.detail) {
      const detail = document.createElement("p");
      detail.className = "download-detail";
      detail.textContent = info.detail;
      card.appendChild(detail);
    }

    const file = document.createElement("p");
    file.className = "download-filename";
    file.textContent = filename;
    card.appendChild(file);

    if (asset.size) {
      const size = document.createElement("p");
      size.className = "download-size";
      size.textContent = formatBytes(asset.size);
      card.appendChild(size);
    }

    const cta = document.createElement("span");
    cta.className = "download-cta";
    cta.textContent = "Download";
    card.appendChild(cta);

    return card;
  }

  function showError() {
    if (!statusEl) return;
    statusEl.textContent = "Could not refresh downloads. Using cached links — or ";
    const link = document.createElement("a");
    link.href = RELEASES_URL;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "get them on GitHub";
    statusEl.appendChild(link);
    statusEl.appendChild(document.createTextNode("."));
  }

  async function loadDownloads() {
    try {
      const [metaRes, releaseRes] = await Promise.all([
        fetch(LATEST_JSON),
        fetch(RELEASES_API),
      ]);

      if (!metaRes.ok) throw new Error("latest.json unavailable");

      const meta = await metaRes.json();
      const assetsByName = {};

      if (releaseRes.ok) {
        const release = await releaseRes.json();
        release.assets.forEach((asset) => {
          assetsByName[asset.name] = asset;
        });
      }

      if (versionEl && meta.latestVersion) {
        versionEl.textContent = `Ara · v${meta.latestVersion}`;
      }

      if (releaseDateEl && meta.releaseDate) {
        releaseDateEl.textContent = `Released ${meta.releaseDate}`;
      }

      if (releaseNotesEl && meta.releaseNotes) {
        releaseNotesEl.textContent = meta.releaseNotes;
      }

      const seen = new Set();
      const entries = Object.entries(meta.downloads || {}).sort((a, b) => {
        const left = PREFERRED_ORDER.indexOf(a[0]);
        const right = PREFERRED_ORDER.indexOf(b[0]);
        return (left === -1 ? 99 : left) - (right === -1 ? 99 : right);
      });

      const fragment = document.createDocumentFragment();
      entries.forEach(([key, url]) => {
        const filename = url.split("/").pop();
        if (!filename || seen.has(filename)) return;
        seen.add(filename);
        fragment.appendChild(createCard(key, url, assetsByName[filename] || {}));
      });

      if (fragment.childNodes.length) {
        downloadGrid.replaceChildren(fragment);
      }

      if (statusEl) statusEl.hidden = true;
    } catch (_err) {
      showError();
    }
  }

  loadDownloads();
})();