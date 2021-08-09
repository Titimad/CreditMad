// Store/Reducers/backupReducer.js

const initialState = {backupSimulation: [], numberOfSimulation: 0};

function record(state = initialState, action) {
  let nextState;
  let numberOfSimulation = state.numberOfSimulation;
  switch (action.type) {
    case 'BACKUP_SIMULATION':
      nextState = {
        backupSimulation: [...state.backupSimulation, action.value],
        numberOfSimulation: numberOfSimulation + 1,
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
export default record;
