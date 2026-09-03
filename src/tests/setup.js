import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Clean the DOM after every test so test state never leaks between cases.
afterEach(() => {
  cleanup()
})
