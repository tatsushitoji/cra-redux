import { connect } from 'react-redux'
import { Counter } from '../../components/counter'
import {
  onIncrement,
  onDecrement,
  onReset,
} from '../../modules/counter'

const mapStateToProps = state => ({
  countValue: state.counter.count,
})

const mapDispatchToProps = {
  onIncrement,
  onDecrement,
  onReset,
}

export const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter)
