// Store/Reducers/deleteReducer.js

const initialState = {backupSimulation: [], numberOfSimulation: 0};

function deleteSimulation(state = initialState, action) {
  let nextState;
  let numberOfSimulation = state.numberOfSimulation;
  console.log('deleteReducer en cours');
  switch (action.type) {
    case 'DELETE_SIMULATION':
      nextState = {
        backupSimulation: [action.value],
        numberOfSimulation: numberOfSimulation - 1,
      };
      console.log(
        'Contenu du State global partiel backupSimulation:' +
          nextState.backupSimulation,
      );
      return nextState || state;
    default:
      return state;
  }
}
export default deleteSimulation;
