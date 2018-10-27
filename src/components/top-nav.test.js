import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';
describe('<TopNav />', () => {
    it('Renders without crashing.', () => {
        shallow(<TopNav />);
    });
    it('Should call onRestartGame when new game is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onRestartGame={callback} />);
        const newGameLink = wrapper.find('.new');
        
        newGameLink.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });
    it('Should call onGenerateAuralUpdate when get status link is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
        const getStatusLink = wrapper.find('.status-link');
        getStatusLink.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });
});
