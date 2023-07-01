import { render } from '@testing-library/react'
import Dynamic from './Dynamic'

test("Dynamically rendered components", () => {
    const dyArray = [1, 2, 3, 4, 5, 6];
    const { getByText } = render(<Dynamic />);

    for (let i = 0; i < dyArray.length; i++) {
        expect(getByText(dyArray[i])).toBeInTheDocument();
    }
})

