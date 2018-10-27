import React from 'react';
import { shallow } from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
    it('Renders without crashing', () => {
        shallow( <AuralStatus /> );
    });

    it('Renders an aural status update.', () => {
        let statusUpdate = 'This is a test.';
        let wrapper = shallow(<AuralStatus auralStatus={statusUpdate} />);
        expect(wrapper.contains(statusUpdate)).toEqual(true);
    });
});
