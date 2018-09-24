
import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';

describe(`GuessSection component test`, function() {
    it('renders GuessSection properly.', function() {
        shallow(<GuessSection />);
    });
});