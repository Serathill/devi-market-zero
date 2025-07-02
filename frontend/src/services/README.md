# Services

This directory serves as the API interaction layer of the application. All external API calls (e.g., using `axios` or `fetch`) must be centralized here.

Components should **never** make API calls directly. Instead, they should call functions exported from the service modules in this directory.

This approach offers several advantages:
-   **Separation of Concerns:** It decouples business logic from the view layer.
-   **Reusability:** API-calling functions can be reused across the application.
-   **Maintainability:** Changes to API endpoints or logic only need to be made in one place.

A base `axios` instance should be configured here with the `baseURL` and any other default settings. 