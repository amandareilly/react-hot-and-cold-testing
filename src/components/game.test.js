import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';
describe('<Game />', () => {
    it('Renders without crashing.', () => {
        shallow(<Game />);
    });
    it('Restarts the game', () => {
        const wrapper = shallow(<Game />);

        // change the state so it doesn't look new
        const notNewState = {
            guesses: [5, 10, 15, 20],
            feedback: 'Some feedback',
            auralStatus: 'Other feedback',
            correctAnswer: -100 // have to test that it is between 1 and 100 when new
        };
        wrapper.setState(notNewState);

        // try to reset the game
        wrapper.instance().restartGame();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('auralStatus')).toEqual('');
        expect(wrapper.state('correctAnswer')).toBeGreaterThan(0);
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
    });
    it('Handles guesses', () => {
        const wrapper = shallow(<Game />);

        // Need to set correctAnswer explicitly so we know the goal
        wrapper.setState({
            correctAnswer: 99
        });

        wrapper.instance().makeGuess(49);
        expect(wrapper.state('guesses')).toEqual([49]);
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...')

        wrapper.instance().makeGuess(69);
        expect(wrapper.state('guesses')).toEqual([49, 69]);
        expect(wrapper.state('feedback')).toEqual('You\'re Cold...')

        wrapper.instance().makeGuess(89);
        expect(wrapper.state('guesses')).toEqual([49, 69, 89]);
        expect(wrapper.state('feedback')).toEqual('You\'re Warm.');

        wrapper.instance().makeGuess(98);
        expect(wrapper.state('guesses')).toEqual([49, 69, 89, 98]);
        expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

        wrapper.instance().makeGuess(99);
        expect(wrapper.state('guesses')).toEqual([49, 69, 89, 98, 99]);
        expect(wrapper.state('feedback')).toEqual('You got it!');
    });
    it('Can generate aural updates', () => {
        const feedback = 'Test feedback!';
        const guesses = [47, 82, 91, 3];
        const wrapper = shallow(<Game />);
        wrapper.setState({feedback, guesses});

        wrapper.instance().generateAuralUpdate();

        expect(wrapper.state('auralStatus')).toEqual(
            'Here\'s the status of the game right now: Test feedback! You\'ve made 4 guesses. In order of most- to least-recent, they are: 3, 91, 82, 47'
        );
    });
});
