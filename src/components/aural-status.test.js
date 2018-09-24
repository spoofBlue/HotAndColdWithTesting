
import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from './aural-status';

describe(`AuralStatus component test`, function() {
    it(`renders AuralStatus`, function() {
        shallow(<AuralStatus />);
    });

    it(`Has props on proper initialization`, function() {
        const auralStatus = "thisStatus";
        const wrapper = shallow(<AuralStatus auralStatus={auralStatus} />);
        expect(wrapper.hasClass(`visuallyhidden`)).toEqual(true);
        expect(wrapper.contains(<p
            id="status-readout"
            className="visuallyhidden"
            aria-live="assertive"
            aria-atomic="true"
          >
            {auralStatus}
          </p>));
    });
})