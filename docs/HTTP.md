# Quantum HTTP interface

`GET /quantum/capabilities` returns the registered sites and abilities.

`POST /quantum/transfer` accepts the same A → B transfer object as the JavaScript router:

```json
{"from":"quanta-phi","to":"news-phi","kind":"quant","payload":{"id":"q1"}}
```

The HTTP layer is deliberately thin. Delivery still requires a registered destination adapter; a packaged/planned movement is not reported as delivered unless an adapter accepts it.
