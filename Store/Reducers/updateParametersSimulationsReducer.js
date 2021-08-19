// Store/Reducers/updateParametersSimulationsReducer.js

const initialState = {};

function updatedParametersSimulation(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'UPDATE_PARAMETERS_SIMULATION':
      nextState = {
        Amount: action.value.Amount,
        Term: action.value.Term,
        InterestRate: action.value.InterestRate,
        MonthlyPayment: action.value.MonthlyPayment,
        TotalPayment: action.value.TotalPayment,
        TotalInterest: action.value.TotalInterest,
        loadedParameter: 1,
      };
      console.log(
        'Contenu du State global partiel updatedParametersSimulation:' +
          nextState,
      );
      return nextState || state;
      break;
    case 'RESET_LOADED_PARAMETER':
      nextState = {...state, loadedParameter: 0};
      console.log(
        'Contenu du State global partiel updatedLoadedParameter:' +
          nextState.loadedParameter,
      );
      return nextState || state;
      break;
    default:
      return state;
  }
}
export default updatedParametersSimulation;
