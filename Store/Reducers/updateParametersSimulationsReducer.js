// Store/Reducers/updateParametersSimulationsReducer.js
/*
const initialState = {
  loadedParameter: 0,
  Type: 'Initial',
  Amount: 0,
  Term: 0,
  InterestRate: 0,
  MonthlyPayment: 0,
  TotalPayment: 0,
  TotalInterest: 0,
};

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
*/
