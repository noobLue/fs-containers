import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import Todo from './Todo'
import { afterEach, describe, expect, test } from 'vitest'

afterEach(() => {
  cleanup()
})


function stub(){}
const stubstub = () => stub;

describe('<Todo />', () => {
  test('todo is not done', () => {
    const todo = { _id: '1', text: 'Write tests', done: false }
    render(<Todo todo={todo} onClickDelete={stubstub} onClickComplete={stubstub} />)

    expect(screen.getByText('Write tests')).toBeInTheDocument()
    expect(screen.getByText('This todo is not done')).toBeInTheDocument()
    expect(screen.getByText('Set as done')).toBeInTheDocument()
  })

  test('todo is done', () => {
    const todo = { _id: '1', text: 'Finished thing', done: true }
    render(<Todo todo={todo} onClickDelete={stubstub} onClickComplete={stubstub} />)

    expect(screen.getByText('Finished thing')).toBeInTheDocument()
    expect(screen.getByText('This todo is done')).toBeInTheDocument()
    expect(screen.queryByText('Set as done')).not.toBeInTheDocument()
  })

})