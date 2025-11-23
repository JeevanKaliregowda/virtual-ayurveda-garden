"""Utility script to capture deployment screenshots via Playwright."""
from pathlib import Path
from typing import Iterable, Tuple

from playwright.sync_api import sync_playwright

Shot = Tuple[str, str]

SHOT_LIST: Iterable[Shot] = (
    ("home-github.png", "https://jeevankaliregowda.github.io/virtual-garden/"),
    ("home-netlify.png", "https://ayush-herbal-garden.netlify.app/"),
    (
        "remedies-github.png",
        "https://jeevankaliregowda.github.io/virtual-garden/ayurvedic-remedies.html",
    ),
)


def capture_screenshots(shots: Iterable[Shot] = SHOT_LIST, *, width: int = 1440, height: int = 900) -> None:
    """Capture each target URL into the screenshots directory."""
    output_dir = Path("screenshots")
    output_dir.mkdir(parents=True, exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": width, "height": height})

        for filename, url in shots:
            target_path = output_dir / filename
            print(f"Opening {url} → {target_path}")
            page.goto(url, wait_until="networkidle", timeout=90_000)
            page.wait_for_timeout(2_000)
            page.screenshot(path=str(target_path), full_page=True)
            print(f"Saved {target_path.resolve()}")

        browser.close()


if __name__ == "__main__":
    capture_screenshots()
