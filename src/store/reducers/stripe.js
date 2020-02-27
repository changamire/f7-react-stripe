const initialState = {
};

const HANDLERS = {

};

export default (state = initialState, action) => {
  const handler = HANDLERS[action.type];
  return handler ? handler(state, action.payload) : state;
};
