# Agency Data Schema

This directory contains transit agency data files. Each agency is represented by a Markdown file with YAML frontmatter containing structured data about the agency's fare payment systems.

## Data Schema Validation

This directory uses 11ty's `eleventyDataSchema` feature to validate all frontmatter data. The schema is defined in `agencies.11tydata.js` and automatically validates all agency files during the build process.

## Required Fields

All agency files **must** include these fields:

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `layout` | string | Layout template to use | `agency.njk` |
| `title` | string | Display name of the agency | `MBTA (Massachusetts Bay Transportation Authority)` |
| `permalink` | string | URL path for the page | `/mbta/` |
| `support_emv_contactless` | boolean | Whether contactless payment (credit/debit cards, mobile pay) is supported | `true` |
| `support_qrcode` | boolean | Whether QR code tickets are supported | `false` |
| `support_cash` | boolean or string | Whether cash is accepted | `true` or `"Coins only on buses"` |
| `support_emv_contactless_passback_max` | number | Max number of people who can use the same contactless card | `4` |
| `transfer_time_limit_min` | number | Time limit for transfers in minutes (use `0` if no transfers) | `120` |
| `requires_tap_off` | boolean | Whether tapping off is required at destination | `false` |

## Optional Fields

These fields are optional but should be included when applicable:

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `agency_url` | string | Official agency fare information URL | `https://www.mbta.com/fares` |
| `support_transit_card` | boolean | Whether a proprietary transit card is available | `true` |
| `transit_card_main_name` | string | Name of the main transit card | `CharlieCard` |
| `transit_card_main_fee` | number | Fee to obtain the transit card in dollars (0 if free) | `0` |
| `transfer_is_unlimited_within_time` | boolean | Whether unlimited transfers are allowed within time limit | `true` |
| `requires_transfer_tap` | boolean | Whether you need to tap when transferring | `false` |
| `fare_capping_amount` | string | Description of fare capping | `"12 trips / 7 days"` |

## Conditional Requirements

- If `support_transit_card` is `true`, then `transit_card_main_name` and `transit_card_main_fee` are required.
- The `support_emv_contactless_passback_max` value should be between 1 and 10.
- The `transfer_time_limit_min` value must be non-negative.

## Example Agency File

```markdown
---
layout: agency.njk
title: "Example Transit Agency"
permalink: /example/
agency_url: https://www.example.com/fares
support_emv_contactless: true
support_qrcode: false
support_cash: true
support_emv_contactless_passback_max: 4
support_transit_card: true
transit_card_main_name: ExampleCard
transit_card_main_fee: 0
transfer_is_unlimited_within_time: true
transfer_time_limit_min: 120
requires_tap_off: false
requires_transfer_tap: false
---

## About Example Transit Agency

[Agency information content goes here...]
```

## Validation

The schema validation runs automatically during the build process. If any data fails validation, the build will fail with a detailed error message indicating:
- Which file has the error
- Which field has the problem
- What the expected type or value should be

To test validation, run:
```bash
npm run build
```

If all agency files have valid data, the build will succeed. If any file has invalid data, you'll see an error message with details about what needs to be fixed.
