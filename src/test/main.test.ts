import {search, findMinArrowShots} from '../main'
import assert from 'assert'

describe('Binary search simple test', () => {
    it('return the index of the item if the item exists', () => {
        assert(search([1, 3, 5, 7, 9], 5) === 2)
    })
    it('return -1 if the item does NOT exist', () => {
        assert(search([1, 3, 5, 7, 9], 4) === -1)
    })
})

describe('findMinArrowShots sample tests', () => {
    it('sample test 1', () => {
        assert(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]) === 2)
    })
    it('sample test 2', () => {
        assert(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]) === 4)
    })
    it('sample test 3', () => {
        assert(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]) === 2)
    })
    it('sample test 4', () => {
        assert(findMinArrowShots([[1,2]]) === 1)
    })
    it('sample test 5', () => {
        assert(findMinArrowShots([[2,3],[2,3]]) === 1)
    })
})
