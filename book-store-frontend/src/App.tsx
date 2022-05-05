import { useGetStoresDataQuery } from './app/api';
import { default as Overview } from './features/Overview';

const App = () => {
  const { data: stores, isLoading } = useGetStoresDataQuery('');

  return <Overview stores={isLoading ? [] : stores.data} />;
};

export default App;
