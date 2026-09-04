import "@testing-library/jest-dom/vitest"
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest"


afterEach(() => {
    // Cleanup logic after each test can be added here if needed
    cleanup();
});