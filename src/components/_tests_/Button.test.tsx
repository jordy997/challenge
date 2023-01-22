import React from 'react'

import { shallow } from 'enzyme'
import PrimaryButton from '../Buttons/PrimaryButton'

const onPress = jest.fn()

let wrapper
describe('Button component', () => {

    beforeEach(() => {
        wrapper = shallow(<PrimaryButton text='Todos' width={130} onPress={() => onPress} />)
    })

    describe('Rendering', () => {
        it('Button should render correctly', () => {
            expect(wrapper).toMatchSnapshot()
        })
    })
})