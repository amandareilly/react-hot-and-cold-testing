import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });
    it('Calls the onMakeGuess callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={callback} />);
        const value = 999;
        wrapper.find('input[type="number"]').instance().value = value;

        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());
    });
    it('Resets the input on submit', () => {
        const wrapper = mount(<GuessForm />);
        const input = wrapper.find('input[type="number"]');
        input.instance().value = 99;
        wrapper.simulate('submit');
        expect(input.instance().value).toEqual('');
    });
});