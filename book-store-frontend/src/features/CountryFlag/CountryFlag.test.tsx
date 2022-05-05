import { shallow } from 'enzyme';
import { useGetCountryCodeById } from '../../app/hooks';
import CountryFlag from './index';

jest.mock('../../app/hooks', () => ({
  useGetCountryCodeById: jest.fn(),
}));

const mockUseGetCountryCodeById = useGetCountryCodeById as jest.MockedFunction<
  typeof useGetCountryCodeById
>;

describe('CountryFlag', () => {
  test('should render correctly', () => {
    mockUseGetCountryCodeById.mockReturnValue('CH');

    const wrapper = shallow(<CountryFlag id="1" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly without code', () => {
    mockUseGetCountryCodeById.mockReturnValue(null);

    const wrapper = shallow(<CountryFlag id="9999" />);

    expect(wrapper).toMatchSnapshot();
  });
});
