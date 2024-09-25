// Write your code here

import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    isTimerRunning: false,
    timerLimitInMinutes: 25,
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  onClickReset = () => {
    clearInterval(this.intervalId)
    this.setState({
      isTimerRunning: false,
      timerLimitInMinutes: 25,
      timeElapsedInSeconds: 0,
    })
  }

  incrementTimerLimit = () => {
    this.setState(prevState => ({
      timerLimitInMinutes: prevState.timerLimitInMinutes + 1,
    }))
  }

  decrementTimerLimit = () => {
    this.setState(prevState => ({
      timerLimitInMinutes: prevState.timerLimitInMinutes - 1,
    }))
  }

  onClickStartPause = () => {
    const {
      isTimerRunning,
      timeElapsedInSeconds,
      timerLimitInMinutes,
    } = this.state
    const isTimerCompleted = timeElapsedInSeconds === timerLimitInMinutes * 60

    if (isTimerCompleted) {
      this.setState({timeElapsedInSeconds: 0})
    }

    if (isTimerRunning) {
      clearInterval(this.intervalId)
    } else {
      this.intervalId = setInterval(this.updateTimeElapsedInSeconds, 1000)
    }

    this.setState(prevState => ({
      isTimerRunning: !prevState.isTimerRunning,
    }))
  }

  updateTimeElapsedInSeconds = () => {
    const {timeElapsedInSeconds, timerLimitInMinutes} = this.state

    const isTimerCompleted = timeElapsedInSeconds === timerLimitInMinutes * 60

    if (isTimerCompleted) {
      clearInterval(this.intervalId)
      this.setState({isTimerRunning: false})
    } else {
      this.setState(prevState => ({
        timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
      }))
    }
  }

  getElapsedSecondsInTimeFormat = () => {
    const {timerLimitInMinutes, timeElapsedInSeconds} = this.state
    const totalRemainingSeconds =
      timerLimitInMinutes * 60 - timeElapsedInSeconds
    const minutes = Math.floor(totalRemainingSeconds / 60)
    const seconds = Math.floor(totalRemainingSeconds % 60)

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {
      isTimerRunning,
      timerLimitInMinutes,
      timeElapsedInSeconds,
    } = this.state
    const startOrPauseText = isTimerRunning ? 'Pause' : 'Start'
    const iconUrl = isTimerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const altText = isTimerRunning ? 'pause icon' : 'play icon'
    const isButtonsDisabled = timeElapsedInSeconds > 0

    return (
      <div className="app-container">
        <h1 className="timer-heading">Digital Timer</h1>
        <div className="timer-container">
          <div className="timer-display-container">
            <div className="elapsed-time-container">
              <h1 className="time">{this.getElapsedSecondsInTimeFormat()}</h1>
              <p className="status">{isTimerRunning ? 'Running' : 'Paused'}</p>
            </div>
          </div>
          <div className="controls-container">
            <div className="start-reset-container">
              <button
                type="button"
                className="control-button"
                onClick={this.onClickStartPause}
              >
                <img src={iconUrl} alt={altText} className="icon" />
                <p className="control-text">{startOrPauseText}</p>
              </button>
              <button
                type="button"
                className="control-button"
                onClick={this.onClickReset}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="icon"
                />
                <p className="control-text">Reset</p>
              </button>
            </div>
            <p className="set-timer-text">Set Timer Limit</p>
            <div className="timer-limit-control">
              <button
                type="button"
                className="limit-button"
                onClick={this.decrementTimerLimit}
                disabled={isButtonsDisabled || timerLimitInMinutes === 1}
              >
                -
              </button>
              <div className="limit-display">
                <p className="limit">{timerLimitInMinutes}</p>
              </div>
              <button
                type="button"
                className="limit-button"
                onClick={this.incrementTimerLimit}
                disabled={isButtonsDisabled}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
