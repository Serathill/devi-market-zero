# Types

This directory contains shared TypeScript type definitions (`type`) and interfaces (`interface`).

Any type or interface that is used in more than one place (e.g., across different components, services, or hooks) should be defined here to ensure consistency and avoid duplication.

According to the project's coding standards, **TypeScript is non-negotiable**. All props, state, and API responses must be strictly typed. The use of `any` is forbidden unless absolutely necessary, and in such cases, it must be justified with a comment. 