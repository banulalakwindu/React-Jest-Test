import { render, fireEvent } from '@testing-library/react'
import EventComponent from './EventComponent'

test('EventComponent Working Correctly', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<EventComponent handleClick={handleClick} />);
    const button = getByText("Click");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
});