import { shallow } from 'enzyme';
import testData from '../../config/testdata.json';
import Overview from './index';

describe('Overview', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<Overview stores={testData.stores.data} />);

    expect(wrapper).toMatchSnapshot();
  });
});
