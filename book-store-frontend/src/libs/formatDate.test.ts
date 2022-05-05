import formatDate from './formatDate';

test('should format ISO date to common readable', () => {
  const isoDate = new Date(1990, 4, 1).toISOString();

  expect(formatDate(isoDate)).toMatchSnapshot();
});
