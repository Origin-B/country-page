<h1 align="center">Country Page - WorldRanks | devChallenges</h1>

<div align="center">
   Solution for a challenge <a href="https://devchallenges.io/challenge/country-page" target="_blank">Country Page - WorldRanks
</a> from <a href="http://devchallenges.io" target="_blank">devChallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://clever-rolypoly-e9e41a.netlify.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/Origin-B/country-page">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenge/country-page">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Built with](#built-with)
- [Features](#features)
- [Future Improvements](#future-improvements)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![Sm screen](/design/mobile.png)
![Md Screen](/design/640.png)
![Lg Screen](/design/1024.png)
![Xl Screen](/design/1280.png)

A country-browsing app: search countries, filter by region and status, sort by population or area, and open a country's detail page to see its capital, languages, currencies, and neighboring countries.

### What I learned

position: sticky doesn't just depend on the element itself — it breaks if any ancestor has overflow: hidden, overflow: auto, or overflow: scroll, because that cuts off the scrolling context the sticky element needs to track. In this project, the filter form (FilterFrom) wasn't sticking at all, and the cause turned out to be overflow-hidden on the page layout wrapper (Layout.tsx), several levels up from the sticky element itself — not on the sticky element or its direct parent. Removing it fixed the sticky behavior immediately.

### Built with

- React 19
- TypeScript
- React Router
- Tailwind CSS v4
- Vite
- ESLint + Prettier (with `prettier-plugin-tailwindcss`)

## Features

- Country list showing flag, name, population, area, and region
- Search by name, region, or subregion
- Filter by region (multi-select) and status (UN member / independent)
- Sort by population or area
- Country detail page with capital, subregion, languages, currencies, and neighboring countries
- Responsive layout across mobile, tablet, and desktop
- Loading skeleton while data is fetched

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges-dashboard) challenge.

## Future Improvements

- **Loading / error / empty states are conflated.** The country table only distinguishes "no results yet" from "results found," using a single `filteredCountries.length === 0` check. A failed fetch and a search with zero matches currently look identical to a still-loading skeleton. Needs an `isError` flag (or a `loading | error | success` status) in the context, with distinct UI for each case.
- **No "country not found" page.** Visiting `/country/:id` with an invalid or missing `id` currently renders a blank page instead of a fallback/error message.
- **Flag fallback is name-based, not failure-based.** `ImgContainer` hardcodes a fallback image for `name === "Afghanistan"` to work around a broken flag URL from the API, rather than using an `onError` handler on the `<img>` that would gracefully handle _any_ broken flag image.
- **No tests.** No unit or component tests currently exist.

## Author

- Website [your-website.com](https://clever-rolypoly-e9e41a.netlify.app/)
- GitHub [@Origin-B](https://github.com/Origin-B)
