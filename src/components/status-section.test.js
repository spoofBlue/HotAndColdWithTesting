
import React from 'react';
import {shallow} from 'enzyme';

import StatusSection from './status-section';

describe(`StatusSection component testing.`, function() {
    it(`renders StatusSection.`, function() {
        const guesses = 2;
        const auralStatus = "Nice.";
        shallow(<StatusSection guesses={guesses} auralStatus={auralStatus}/>);
    });

});