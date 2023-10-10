// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speed: 0, // Initial speed is 0mph
    }
  }

  handleAccelerate = () => {
    if (this.state.speed < 200) {
      this.setState(prevState => ({
        speed: prevState.speed + 10,
      }))
    }
  }

  handleApplyBrake = () => {
    if (this.state.speed > 0) {
      this.setState(prevState => ({
        speed: prevState.speed - 10,
      }))
    }
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading"> Speedometer </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h3 className="heading"> Speed is: {this.state.speed}mph </h3>
        <p className="count">
          Min Limit is {count}, Max Limit is {count}
        </p>
        <button className="button1" onClick={this.handleAccelerate}>
          Accelerate
        </button>
        <button className="button2" onClick={this.handleApplyBrake}>
          Apply Break
        </button>
      </div>
    )
  }
}

export default Speedometer
