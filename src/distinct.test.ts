import assert from 'assert'
import { sequence } from './sequence'
import { distinct } from './distinct'

describe('distinct', () => {
  it('should remove dupes', async () => {
    const input = [1, 2, 2, 3, 3, 4, 4, 5, 5]
    const output = await sequence(distinct, input)
    assert.deepEqual(output, [1, 2, 3, 4, 5])
  })
})