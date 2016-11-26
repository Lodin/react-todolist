const query = (location, [param, value]) => ({
  ...location,
  query: {
    ...location.query,
    [param]: value
  }
});

export default query;
