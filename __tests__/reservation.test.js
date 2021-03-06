const service = require('../services/reservation-service');

test('listReservations is not null', () => {
  const result = service.listReservations();
  expect(result).not.toBeNull();
});

test('listReservations returns a list', () => {
  const result = service.listReservations();
  expect(result.length).toBeGreaterThanOrEqual(0);
});
