import React from 'react'

import { shallow } from 'enzyme'
import Header from '../Header/Header'

let wrapper

describe('Header component', () => {

    beforeEach(() => {
        wrapper = shallow(
            <Header />
        )
    })

    describe('Rendering', () => {
        it('Header should render correctly', () => {
            expect(wrapper).toMatchSnapshot()
        })
    })
})