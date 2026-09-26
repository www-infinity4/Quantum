# Quantum routing contract

Quantum moves information; it does not silently reinterpret it.

## Quant movement
A `kind: "quant"` transfer preserves the complete Quant payload. The destination may store, render, index, or process it according to its declared capabilities. Ownership changes require Owner-phi authority. Lifecycle changes require the appropriate Monitor/Quants lifecycle operation.

## Internal data movement
A `kind: "data"` transfer moves application data between registered sites. This is for explicit application data and service messages; it is not permission to collect undisclosed private user information.

## Adapters
Adapters expose `receive(envelope)`. Quantum ships a generic HTTP adapter and an in-memory adapter for tests/local composition. Site-specific adapters can be registered without changing the router.

## Delivery
Planning validates source/destination capabilities. A transfer without a destination adapter is planned and packaged but reports `delivered:false`; callers must not mistake that for confirmed delivery.
