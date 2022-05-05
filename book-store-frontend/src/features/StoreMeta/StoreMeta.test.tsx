import { shallow } from 'enzyme';
import StoreMeta from './index';

describe('StoreMeta', () => {
  test('should render correctly', () => {
    const wrapper = shallow(
      <StoreMeta
        date={new Date(1990, 4, 1).toISOString()}
        website="http://test-site.com"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
