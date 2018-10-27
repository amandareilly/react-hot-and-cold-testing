import React from 'react';
import { shallow } from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });
    it('Renders the correct guessCount', () => {
        const guessCount = Math.floor(Math.random() * 10);
        const wrapper = shallow(<GuessCount guessCount={guessCount} />);
        const countSpan = wrapper.find('#count');
        expect(countSpan.contains(guessCount)).toEqual(true);
    });
    it('Renders `guess` when the guessCount is exactly 1', () => {
        const guessCount = 1;
        const guessNoun = 'guess';
        const wrapper = shallow(<GuessCount guessCount={guessCount} />);
        expect(wrapper.contains(guessNoun)).toEqual(true);
    });
    it('Renders `guesses` when the guessCount is not 1', () => {
        let guessCount = Math.floor(Math.random() * 10);
        if(guessCount === 1) {
            guessCount += 1;
        }
        const guessNoun = 'guesses';
        const wrapper = shallow(<GuessCount guessCount={guessCount} />);
        expect(wrapper.contains(guessNoun)).toEqual(true);
    });
});