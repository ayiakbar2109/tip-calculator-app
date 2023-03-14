import { useReducer, ChangeEvent } from "react";
import IconDollar from "./../images/icon-dollar.svg";
import IconPerson from "./../images/icon-person.svg";

function App() {
  interface iState {
    bill: number;
    tipResult: number;
    people: number;
    customPercent: number;
  }

  const initState: iState = {
    bill: 0,
    tipResult: 0,
    people: 0,
    customPercent: 0,
  };

  const enum REDUCER_ACTION_TYPES {
    INPUT_BILL,
    INPUT_CUSTOM,
    INPUT_PEOPLE,
    PERCENT_5,
    PERCENT_10,
    PERCENT_15,
    PERCENT_25,
    PERCENT_50,
    PERCENT_CUSTOM,
    RESET,
  }

  type ReducerAction = {
    type: REDUCER_ACTION_TYPES;
    payload: any;
  };

  const reducer = (state: iState, action: ReducerAction) => {
    switch (action.type) {
      case REDUCER_ACTION_TYPES.INPUT_BILL:
        return { ...state, bill: action.payload };
      case REDUCER_ACTION_TYPES.INPUT_CUSTOM:
        return { ...state, customPercent: action.payload };
      case REDUCER_ACTION_TYPES.INPUT_PEOPLE:
        return { ...state, people: action.payload };
      case REDUCER_ACTION_TYPES.PERCENT_5:
        return { ...state, tipResult: (state.bill * 5) / 100 };
      case REDUCER_ACTION_TYPES.PERCENT_10:
        return { ...state, tipResult: (state.bill * 10) / 100 };
      case REDUCER_ACTION_TYPES.PERCENT_15:
        return { ...state, tipResult: (state.bill * 15) / 100 };
      case REDUCER_ACTION_TYPES.PERCENT_25:
        return { ...state, tipResult: (state.bill * 25) / 100 };
      case REDUCER_ACTION_TYPES.PERCENT_50:
        return { ...state, tipResult: (state.bill * 50) / 100 };
      case REDUCER_ACTION_TYPES.PERCENT_CUSTOM:
        return {
          ...state,
          tipResult: (state.bill * state.customPercent) / 100,
        };

      case REDUCER_ACTION_TYPES.RESET:
        return initState;
      default:
        throw new Error();
    }
  };
  console.log(initState);

  const [state, dispatch] = useReducer(reducer, initState);

  const inputBill = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPES.INPUT_BILL,
      payload: e.target.value,
    });
  };
  const inputPeople = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPES.INPUT_PEOPLE,
      payload: e.target.value,
    });
  };
  const inputCustom = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPES.INPUT_CUSTOM,
      payload: e.target.value,
    });
  };
  const PERCENT_5 = () =>
    dispatch({
      type: REDUCER_ACTION_TYPES.PERCENT_5,
      payload: 0,
    });
  const PERCENT_10 = () =>
    dispatch({
      type: REDUCER_ACTION_TYPES.PERCENT_10,
      payload: 0,
    });
  const PERCENT_15 = () =>
    dispatch({
      type: REDUCER_ACTION_TYPES.PERCENT_15,
      payload: 0,
    });
  const PERCENT_25 = () =>
    dispatch({
      type: REDUCER_ACTION_TYPES.PERCENT_25,
      payload: 0,
    });
  const PERCENT_50 = () =>
    dispatch({
      type: REDUCER_ACTION_TYPES.PERCENT_50,
      payload: 0,
    });
  const PERCENT_CUSTOM = () =>
    dispatch({
      type: REDUCER_ACTION_TYPES.PERCENT_CUSTOM,
      payload: 0,
    });
  const RESET = () =>
    dispatch({
      type: REDUCER_ACTION_TYPES.RESET,
      payload: 0,
    });

  const TIP_PER_PERSON = () => {
    if (state.people > 0) {
      let operator = state.tipResult / state.people;
      return operator.toFixed(2);
    }
    return 0;
  };
  const TOTAL_BILL = () => {
    if (state.people > 0) {
      let operator = (state.bill * 1 + state.tipResult) / state.people;
      return operator.toFixed(2);
    }
    return 0;
  };
  return (
    <>
      <header>
        <div className="bg-light-grayish-cyan text-center p-5">
          <h1 className="text-4xl text-dark-cyan tracking-wide font-semibold">
            S P L I<br></br>T T E R
          </h1>
        </div>
      </header>

      <main className="bg-light-grayish-cyan md:flex md:justify-center md:items-center">
        <div className="rounded-t-2xl bg-white shadow-lg px-12 py-9  md:flex md:flex-row md:w-screen md:max-w-3xl md:gap-8 md:p-7 md:rounded-2xl">
          <section className="md:max-w-sm">
            <form action="">
              <p className="my-2 text-grayish-cyan font-bold">Bill</p>
              <div className="bg-very-light-grayish-cyan flex justify-between items-center px-5 py-2.5 rounded-lg shadow-md">
                <img src={IconDollar} alt="icon dollar" />
                <input
                  type="number"
                  className="text-dark-cyan text-end font-bold outline-none text-2xl bg-very-light-grayish-cyan"
                  value={state.bill}
                  onChange={inputBill}
                />
              </div>
            </form>
            <div>
              <p className="my-2 mt-7 text-grayish-cyan font-bold">
                Select Tip %
              </p>
              <div className="grid grid-cols-2 gap-x-5 gap-y-4 md:grid-cols-3 md:gap-x-4 md:gap-y-3">
                <button
                  type="submit"
                  onClick={PERCENT_5}
                  className="bg-dark-cyan py-2 rounded-lg text-4xl font-bold text-white hover:bg-primary-color ease-in-out duration-200 hover:text-dark-cyan focus:bg-primary-color focus:text-dark-cyan md:text-2xl md:py-1"
                >
                  5%
                </button>
                <button
                  type="submit"
                  onClick={PERCENT_10}
                  className="bg-dark-cyan py-3 rounded-lg text-4xl font-bold text-white hover:bg-primary-color ease-in-out duration-200 hover:text-dark-cyan focus:bg-primary-color focus:text-dark-cyan md:text-2xl md:py-1"
                >
                  10%
                </button>
                <button
                  type="submit"
                  onClick={PERCENT_15}
                  className="bg-dark-cyan py-3 rounded-lg text-4xl font-bold text-white hover:bg-primary-color ease-in-out duration-200 hover:text-dark-cyan focus:bg-primary-color focus:text-dark-cyan md:text-2xl md:py-1 "
                >
                  15%
                </button>
                <button
                  type="submit"
                  onClick={PERCENT_25}
                  className="bg-dark-cyan py-3 rounded-lg text-4xl font-bold text-white hover:bg-primary-color ease-in-out duration-200 hover:text-dark-cyan focus:bg-primary-color focus:text-dark-cyan md:text-2xl md:py-1"
                >
                  25%
                </button>
                <button
                  type="submit"
                  onClick={PERCENT_50}
                  className="bg-dark-cyan py-3 rounded-lg text-4xl font-bold text-white hover:bg-primary-color ease-in-out duration-200 hover:text-dark-cyan target:bg-primary-color target:text-dark-cyan md:text-2xl md:py-1"
                >
                  50%
                </button>

                <input
                  type="number"
                  placeholder="Custom"
                  onChange={inputCustom}
                  onClick={PERCENT_CUSTOM}
                  // value={state.customPercent}
                  className="bg-very-light-grayish-cyan text-grayish-cyan py-3 rounded-lg text-4xl font-bold hover:bg-primary-color ease-in-out duration-200 hover:text-dark-cyan text-center cursor-pointer outline-none md:text-2xl md:py-1"
                />
              </div>
            </div>

            <form action="">
              <p className="my-2 mt-7 text-grayish-cyan font-bold">
                Number of People
              </p>
              <div className="bg-very-light-grayish-cyan flex justify-between items-center px-5 py-2.5 rounded-lg shadow-md">
                <img src={IconPerson} alt="icon dollar" />
                <input
                  type="number"
                  value={state.people}
                  onChange={inputPeople}
                  className="text-dark-cyan text-end font-bold outline-none text-2xl bg-very-light-grayish-cyan"
                />
              </div>
            </form>
          </section>

          <div className="bg-dark-cyan p-5 rounded-xl mt-9 md:m-0 md:w-screen ">
            <div className="flex justify-between items-start m-3 mt-7">
              <p className="text-white text-lg font-bold">
                Tip Amount
                <p className="text-grayish-cyan text-base font-normal">
                  / person
                </p>
              </p>
              <p className="text-4xl text-primary-color font-extrabold">
                ${TIP_PER_PERSON()}
              </p>
            </div>
            <div className="flex justify-between items-start m-3 mt-7">
              <p className="text-white text-lg font-bold">
                Total
                <p className="text-grayish-cyan text-base font-normal">
                  / person
                </p>
              </p>
              <p className="text-4xl text-primary-color font-extrabold">
                ${TOTAL_BILL()}
              </p>
            </div>
            <button
              type="reset"
              onClick={RESET}
              className="inline-block mt-7 bg-primary-color text-dark-cyan w-full rounded-lg py-1.5 text-2xl font-bold md:mt-20 hover:bg-very-light-grayish-cyan ease-in-out duration-200"
            >
              RESET
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
