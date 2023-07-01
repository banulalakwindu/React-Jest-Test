import { render } from '@testing-library/react';
import PropsComponent from './PropsComponent';

test("PropsComponent renders correctly", () => {
    const props = { item: "Laptop", price: 1000 };
    const { getByText } = render(<PropsComponent {...props} />);
    expect(getByText(`Item: ${props.item}`)).toBeInTheDocument();
    expect(getByText(`Price: ${props.price}`)).toBeInTheDocument();
});