import React from 'react'
import { render } from '../../../test/test-utils'
import '@testing-library/jest-dom'
import PlayerList from '.'

describe('Tests for Players List', () => {
  let props
  let container

  beforeEach(() => {
    props = {
      players: [
        {
          id: 1,
          name: 'Jogador 1',
          phone: '(85) 99731-8691',
          email: 'jogador1@gmail.com'
        },
        {
          id: 2,
          name: 'Jogador 2',
          phone: '(85) 99731-8691',
          email: 'jogador2@gmail.com'
        },
        {
          id: 3,
          name: 'Jogador 3',
          phone: '(85) 99731-8691',
          email: 'jogador3@gmail.com'
        }
      ],
      setOpen: jest.fn(),
      setPlayer: jest.fn(),
      setPlayers: jest.fn(),
      handleEdit: jest.fn(),
      handleDelete: jest.fn()
    }
    container = render(<PlayerList {...props} />)
  })

  // Show Form Fields
  test('Veirfy if exists user in list', async () => {
    const { queryByText } = container

    // Show Label Fields
    expect(queryByText('Jogador 1')).toBeVisible()
    expect(queryByText('Jogador 2')).toBeVisible()
    expect(queryByText('Jogador 3')).toBeVisible()
  })
})
