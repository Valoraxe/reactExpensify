import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let startEditExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
  startEditExpense = jest.fn()
  startRemoveExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} history={history} expense={expenses[1]}/>)
})

test("render edit expense page", () => {
  expect(wrapper).toMatchSnapshot()
})

test("handle editExpense", () => {
  wrapper.find("ExpenseForm").prop('onSubmit')(expenses[1])
  expect(history.push).toHaveBeenLastCalledWith('/dashboard')
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
})

test("handle startRemoveExpense", () => {
  wrapper.find("button").simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/dashboard')
  expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[1].id})
})
