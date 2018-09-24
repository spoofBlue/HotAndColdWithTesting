
import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './feedback';

describe(`Feedback component testing.`, function() {
    it(`renders Feedback.`, function() {
        shallow(<Feedback />);
    });

    it(`guessAgain will exist with a class if the guessCount is > 0`, function() {
        const guessCount = 1;
        const feedback = "Nice.";
        const wrapper = shallow(<Feedback guessCount={guessCount} feedback={feedback} />);
        expect(wrapper.contains(
            <h2 
            key={guessCount}
            id="feedback"
            role="status"
            aria-live="assertive"
            aria-atomic="true"
            >
             {feedback} <span className="visuallyhidden">Guess again!</span>
            </h2>
        )).toEqual(true);
    });

    it(`guessAgain will exist with a class if the guessCount equals 0`, function() {
        const guessCount = 0;
        const feedback = "Nice.";
        const wrapper = shallow(<Feedback guessCount={guessCount} feedback={feedback} />);
        expect(wrapper.contains(
            <h2 
            key={guessCount}
            id="feedback"
            role="status"
            aria-live="assertive"
            aria-atomic="true"
            >
             {feedback} {null}
            </h2>
        )).toEqual(true);
    });
});

/*
it(``, function() {

});
*/