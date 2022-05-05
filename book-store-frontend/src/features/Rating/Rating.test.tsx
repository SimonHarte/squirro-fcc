import { shallow } from 'enzyme';
import Rating from './index';

jest.mock('../../app/api', () => ({
  useSetNewRatingMutation: () => [() => {}],
}));

describe('Rating', () => {
  test('should render correctly', () => {
    const wrapper = shallow(
      <Rating storeName="Test Store" currentRating={2} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
