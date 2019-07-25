import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ComponentA extends React.Component{
  componentDidMount() {
    this.props.increment()
  }
  render () {
    const {count} = this.props;
    return (
      <div>
        ComponentA
        <Link to={{
          pathname: '/vue'
        }}>vue</Link>
        <Link to={{
          pathname: '/home/ComponentB'
        }}>ComponentB</Link>
        <span>{count}</span>
      </div>
    )
  }
}

const mapState = state => {
  console.log(state)
  return {
    count: state.modelA
  }
}

const mapDispatch = ({ modelA: { increment, incrementAsync }}) => ({
  increment: () => increment(1),
  incrementAsync: () => incrementAsync(1)
})

export default connect(mapState, mapDispatch)(ComponentA)