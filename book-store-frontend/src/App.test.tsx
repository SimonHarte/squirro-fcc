import { shallow } from 'enzyme';
import App from './App';

jest.mock('./app/api', () => ({
  useGetStoresDataQuery: () => ({
    data: {
      data: [],
    },
    isLoading: false,
  }),
}));

test('should render correctly', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});
