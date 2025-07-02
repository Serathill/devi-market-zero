# Hooks

This directory contains custom React hooks. The purpose of these hooks is to encapsulate and reuse stateful logic across multiple components.

By extracting component logic into hooks, we keep our components leaner and more focused on presentation, adhering to the Single Responsibility Principle.

A key hook that should be defined here is `useFetch`, which standardizes the handling of asynchronous API calls, managing `loading`, `error`, and `data` states consistently throughout the application. 