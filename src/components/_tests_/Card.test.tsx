import React from 'react'

import { shallow } from 'enzyme'
import Card from '../Card/Card'

let wrapper
describe('Card component', () => {

    beforeEach(() => {
        wrapper = shallow(<Card totalPoints={100000} />)
    })

    describe('Rendering', () => {
        it('Card should render correctly', () => {
            expect(wrapper).toMatchSnapshot()
        })
    })
})