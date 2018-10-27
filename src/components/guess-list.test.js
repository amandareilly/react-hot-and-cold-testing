import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={[]}/>);
    });
    it('Renders all guesses', () => {
        const guessList = [9, 27, 32, 41, 80, 18];
        const wrapper = shallow(<GuessList guesses={guessList} />);
        guessList.forEach((guess) => {
            expect(wrapper.contains(guess)).toEqual(true);
        });
    });
});