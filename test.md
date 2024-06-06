```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note

    server->>browser: GET https://studies.cs.helsinki.fi/exampleapp/notes
```