---
layout: agency.njk
title: MBTA (Massachusetts Bay Transportation Authority)
agency_url: https://www.mbta.com/fares
support_openloop: true
support_qrcode: false
support_cash: true
support_openloop_passback: true
transfer_is_unlimited_within_time: true
transfer_time_limit_min: 120
requires_tap_off: false
---

## About MBTA Fare Payment

The Massachusetts Bay Transportation Authority (MBTA) serves the Greater Boston area with comprehensive public transit services including subway, bus, commuter rail, and ferry services.

### Payment Methods

The MBTA supports multiple payment methods:
- **CharlieCard**: Reloadable smart card
- **CharlieTicket**: Paper ticket for single or multiple rides
- **Contactless payment cards**: Visa, Mastercard, American Express, and Discover (physical cards or via Apple Pay, Google Pay, Samsung Pay)
- **mTicket**: Mobile ticketing app for Commuter Rail and ferry
- **Cash**: Accepted on buses and at fare vending machines

### Transfer Policy

The MBTA offers free transfers between subway lines inside the fare gate. All subway transfers must be completed inside the fare gate (there is no virtual transfer system).

**SL1-SL3 (Silver Line Washington Street)** operate as subway fare with transfer to Red Line inside the fare gate at South Station.

**SL1 (Logan Airport)** is free when boarding at Logan Airport terminals (sponsored by Massport). SL3 is not free.

#### Transfer Combinations

Transfers must be completed within 120 minutes after the first tap:

| Transfer Type | Allowed |
|--------------|---------|
| Bus → Bus | ✓ Yes |
| Bus → Subway → Bus | ✓ Yes |
| Bus → Bus → Bus | ✓ Yes |
| Subway → Bus → Bus | ✓ Yes |
| Subway → Bus → Subway | ✗ No (second subway trip charged full price) |

### Passback Policy

MBTA supports passback for both CharlieCards and contactless payments:

- A CharlieCard can be used by multiple passengers
- With stored value or contactless payment: up to **4 additional taps** within 20 minutes
- The first tap plus 4 additional taps grant transfers according to the rules above
- Additional taps beyond the 5th will deduct the full applicable fare

**For passes**: The cardholder can tap to validate their pass, then pass the card to another person whose fare will be deducted from stored value on the same card.

### Important Notes

- Contactless payments from Visa, Mastercard, American Express, and Discover are supported system-wide
- Transfer window is 120 minutes from first tap to completion of the last transfer
- Senior, student, and reduced fare options available with proper identification
- Express bus routes: Local segments can be charged at local bus fare with bus driver intervention (only available with old CharlieCard or cash, not contactless or new CharlieCard)

For complete fare details, see the [MBTA Tariff](https://www.mbta.com/tariff).
