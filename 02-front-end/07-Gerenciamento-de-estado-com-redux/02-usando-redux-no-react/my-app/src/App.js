import './App.css';
import { connect } from 'react-redux';
import { actionCreator } from './redux/action';

function App(props) {
  const { countState, dispatch } = props;
  return (
    <div className="App">
     <h1>Contador</h1>
     <h2>{countState}</h2>
     <button onClick={() => dispatch(actionCreator())}>Incrementar 1</button>
     <button onClick={() => dispatch(actionCreator(5))}>Incrementar 5</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
})

export default connect(mapStateToProps)(App);
