const initialState = {
  country: undefined,
  city: undefined,
  temperature: undefined,
  description: undefined,
  error: undefined,
};

export default function weather(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}