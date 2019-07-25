import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ComponentB extends React.Component{
  componentDidMount() {
    this.props.increment()
  }
  render () {
    const {count} = this.props;
    return (
      <div>
        ComponentB
        <Link to={{
          pathname: '/home/ComponentA'
        }}>ComponentA</Link>
        {count}
      </div>
    )
  }
}

const mapState = state => {
  return {
    count: state.modelB
  }
}

const mapDispatch = ({ modelB: { increment, incrementAsync }}) => ({
  increment: () => increment(1),
  incrementAsync: () => incrementAsync(1)
})

export default connect(mapState, mapDispatch)(ComponentB)