import React from 'react'

import { shallow } from 'enzyme'
import Item from '../Body/Item'

let wrapper

describe('Item component', () => {

    beforeEach(() => {
        wrapper = shallow(
            <Item
                createdAt='2022-12-09T10:20:00.909Z'
                product='Fantastic Granite Bacon'
                points={42416}
                image='https://loremflickr.com/640/480/technics'
                is_redemption={false}
                id='3'
                onPress={() => console.log('Hello world')}
            />
        )
    })

    describe('Rendering', () => {
        it('Item should render correctly', () => {
            expect(wrapper).toMatchSnapshot()
        })
    })
})