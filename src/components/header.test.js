
import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';
import TopNav from './top-nav';

describe(`Header component test`, function() {
    it('renders Header properly.', function() {
        shallow(<Header />);
    });
});