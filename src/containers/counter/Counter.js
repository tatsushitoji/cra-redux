import { connect } from 'react-redux'
import { Counter } from '../../components/counter'

export const Container = connect(state => state)(Counter)
