
import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe(`GuessList component testing.`, function() {
    it(`renders GuessList.`, function() {
        const guesses = [6, 4, 2, 19];
        shallow(<GuessList guesses={guesses} />);
    });

    it(`makes <li> elements for each guess in the guess list.`, function() {
        const guesses = [6, 4, 2, 19];
        /* Tried doing this but failed.
        let listedGuesses;
        for (let i=1; i < guesses.length; i++){
            listedGuesses += <li key={i}>{guesses[i]}</li>;
        }
        */
        const wrapper = shallow(<GuessList guesses={guesses} />);
        expect(wrapper.contains(
            <ul id="guessList" className="guessBox clearfix">
                <li key="0">
                {guesses[0]}
                </li>
                <li key={1}>
                {guesses[1]}
                </li>
                <li key={2}>
                {guesses[2]}
                </li>
                <li key={3}>
                {guesses[3]}
                </li>
            </ul>
        )).toEqual(true);
    });
});