import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import server from '../../backend/mock-server'
import { resetTodos } from '../../backend/helpers'

describe('Todos Component', () => {

  afterEach(() => { server.resetHandlers() })
  beforeAll(() => { server.listen() })
  afterAll(() => { server.close() })
  beforeEach(async () => {
    resetTodos()
  })

  test('all todos are present', () => {
    // screen.debug()

  })
  test('can do and undo todos', async () => {

  })
  test('can delete todos', async () => {

  })
  test('can create a new todo, complete it and delete it', async () => {

  })
})
