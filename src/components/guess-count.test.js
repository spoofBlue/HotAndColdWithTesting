
import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe(`GuessCount component testing.`, function() {
    it(`renders GuessCount.`, function() {
        shallow(<GuessCount />);
    });

    it(`properly populates guessCount and guessNoun from props when guessCount is plural.`, function() {
        const guessCount = 2;
        const wrapper = shallow(<GuessCount guessCount={guessCount} />);
        expect(wrapper.contains(<h2 id="guessCount">You've made <span id="count">{guessCount}</span> guesses!</h2>)).toEqual(true);
    });

    it(`properly populates guessCount and guessNoun from props when guessCount is 1.`, function() {
        const guessCount = 1;
        const wrapper = shallow(<GuessCount guessCount={guessCount} />);
        expect(wrapper.contains(<h2 id="guessCount">You've made <span id="count">{guessCount}</span> guess!</h2>)).toEqual(true);
    });
});