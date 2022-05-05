import { shallow } from 'enzyme';
import Bestseller from './index';

describe('Bestseller', () => {
  test('should render correctly', () => {
    const wrapper = shallow(
      <Bestseller
        books={[
          { name: 'Book 1', author: 'Author 1' },
          { name: 'Book 2', author: 'Author 2' },
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly without data', () => {
    const wrapper = shallow(<Bestseller books={[]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
