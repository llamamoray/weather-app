const initialState = {
  weather: {
    country: undefined,
    city: undefined,
    temperature: undefined,
    description: undefined,
    error: undefined,
  }
}

export default function weather(state, action) {
  switch (action) {
    default:
      return initialState;
  }
}