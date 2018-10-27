import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });
    it('Renders feedback', () => {
        const feedback = 'This is a test..';
        const wrapper = shallow(<Feedback feedback={feedback}/>);
        expect(wrapper.contains(feedback)).toEqual(true);
    });
    it('Renders hidden guessAgain span when guessCount > 0', () => {
        const guessCount = 1;
        const wrapper = shallow(<Feedback guessCount={guessCount} />);
        expect(wrapper.contains('Guess again!')).toEqual(true);
    });
    it('Does not render hidden guessAgain span when guessCount == 0', () => {
        const guessCount = 0;
        const wrapper = shallow(<Feedback guessCount={guessCount} />);
        expect(wrapper.contains('Guess again!')).toEqual(false);
    })
});