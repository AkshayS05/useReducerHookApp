import { useReducer } from 'react';
import './Counter.css';
const Counter = () => {
  //   const [userInput, setUserInput] = useState('');
  //   const [value, setValue] = useState(0);
  //   const [color, setColor] = useState(false);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { ...state, value: state.value + 1 };
      case 'decrement':
        return { ...state, value: state.value - 1 };
      case 'tgColor':
        return { ...state, color: !state.color };
      case 'newUserInput':
        return { ...state, userInput: action.payload };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    value: 0,
    color: false,
    userInput: '',
  });
  const Action = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    NEW_USER_INPUT: 'newUserInput',
    TG_COLOR: 'tgColor',
  };
  return (
    <>
      <div style={{ color: state.color ? '#000' : '#888' }}>
        <h1>Reducer Hook</h1>
        <p className="input_area">
          <input
            type="text"
            value={state.userInput}
            onChange={(e) =>
              dispatch({ type: Action.NEW_USER_INPUT, payload: e.target.value })
            }
          />
        </p>
        <button onClick={() => dispatch({ type: Action.TG_COLOR })}>
          Color
        </button>
        <button onClick={() => dispatch({ type: Action.INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: Action.DECREMENT })}>-</button>

        <p className="display_area">
          {state.value}
          {state.userInput}
        </p>
      </div>
    </>
  );
};

export default Counter;
