import { render, screen } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'
import Trainer from './Trainer'
import { themeContext } from '../context'

function renderTrainer(overrides = {}) {
    const props = {
        name: 'Ada Lovelace',
        age: 36,
        specialty: 'Algorithms',
        ...overrides,
    }

    return render(
        <themeContext.Provider value={{ theme: 'light', toggleTheme: vi.fn() }}>
            <Trainer {...props} />
        </themeContext.Provider>,
    )
}

describe('Trainer component', () => {
    it('renders trainer details when optional fields are present', () => {
        // Arrange: render a trainer with all fields.
        const { container } = renderTrainer()

        // Assert: verify the user-visible output, not internal implementation details.
        expect(screen.getByText('Name: Ada Lovelace')).toBeInTheDocument()
        expect(screen.getByText('Age: 36')).toBeInTheDocument()
        expect(screen.getByText('Specialty: Algorithms')).toBeInTheDocument()
        expect(container.firstChild).toHaveClass('light')
    })

    it('hides optional fields when age or specialty are missing', () => {
        renderTrainer({ age: 0, specialty: '' })

        expect(screen.getByText('Name: Ada Lovelace')).toBeInTheDocument()
        expect(screen.queryByText(/Age:/)).not.toBeInTheDocument()
        expect(screen.queryByText(/Specialty:/)).not.toBeInTheDocument()
    })
})
