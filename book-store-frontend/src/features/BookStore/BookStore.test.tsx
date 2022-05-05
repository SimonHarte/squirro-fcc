import { shallow } from 'enzyme';
import BookStore from './index';

jest.mock('../../app/hooks', () => ({
  useGetBestsellers: () => [],
}));

describe('BookStore', () => {
  test('should render correctly', () => {
    const wrapper = shallow(
      <BookStore
        id="test"
        name="Test Store"
        storeImage="imageSrc"
        establishmentDate={new Date(1990, 4, 1).toISOString()}
        website="http://store-website.com"
        rating={3}
        books={[]}
        countryId="CH"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
