
import { describe, expect, it } from "vitest";
import Trainer from "./Trainer";
import { render } from "@testing-library/react";
import ThemeProvider from "./providers/ThemeProvider";



describe("Trainer Component", () => {
    it("should render correctly", () => {
        // Test logic for rendering the Trainer component goes here
        const trainer = render(
            <ThemeProvider >
                <Trainer name={'jh'} age={32} specialty={'Java'} />
            </ThemeProvider >);

        expect(trainer.getByText("Name: jh")).toBeInTheDocument();
        expect(trainer.getByText("Age: 32")).toBeInTheDocument();
        expect(trainer.getByText("Specialty: Java")).toBeInTheDocument();
    });
})