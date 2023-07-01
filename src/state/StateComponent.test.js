import { render, fireEvent } from '@testing-library/react'
import StateComponent from './StateComponent'

test('StateComponent Working Correctly', () => {
    const { getByText } = render(<StateComponent />)
    const button = getByText("Click")
    fireEvent.click(button)
    expect(getByText("Clicked")).toBeInTheDocument()
});