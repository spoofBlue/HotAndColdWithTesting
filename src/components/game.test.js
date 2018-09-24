
import React from 'react';
import {shallow, mount} from 'enzyme';
import Game from './game';

import Header from './header';
import TopNav from './top-nav';

describe(`<Game /> component testing`, function() {
    it(`renders Game.`, function() {
        shallow(<Game />);
    });

    it(`proprely sets Game initial state`, function() {
        const wrapper = shallow(<Game />);
        expect(wrapper.state(`feedback`)).toEqual('Make your guess!');
        console.log(`wrapper.instance().state.correctAnswer=`, wrapper.instance().state.correctAnswer);
        //expect(wrapper.instance().state.correctAnswer).toEqual(Number);
    });

    it('Should run the generateAuralUpdate() method.', function() {
        const guesses = [6, 4, 2, 19];
        const feedback = "You're getting warmer.";
        const wrapper = shallow(<Game />);
        wrapper.instance().state.guesses = guesses;
        wrapper.instance().state.feedback = feedback;
        wrapper.instance().generateAuralUpdate();
        //wrapper.update();
        const expectedAuralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} guesses. In order of most- to least-recent, they are: ${guesses.join(', ')}`;
        expect(wrapper.instance().state.auralStatus).toEqual(expectedAuralStatus);
    });

    it('Should run the restartGame() method.', function() {
        const oldGuesses = [6, 4, 2, 19];
        const oldFeedback = "You're getting warmer.";
        const oldAuralStatus = "Something";
        const wrapper = shallow(<Game />);
        wrapper.instance().state.guesses = oldGuesses;
        wrapper.instance().state.feedback = oldFeedback;
        wrapper.instance().state.auralStatus = oldAuralStatus;
        wrapper.update();
        wrapper.instance().restartGame();
        expect(wrapper.instance().state.guesses).toEqual([]);
        expect(wrapper.instance().state.feedback).toEqual('Make your guess!');
        expect(wrapper.instance().state.auralStatus).toEqual("");
    });

    it('Should run the makeGuess() method.', function() {
        const oldGuesses = [6, 4, 2, 19];
        const guess = 70;
        const wrapper = shallow(<Game />);
        wrapper.instance().state.guesses = oldGuesses;
        wrapper.update();
        wrapper.instance().makeGuess(guess);
        expect(wrapper.instance().state.guesses).toEqual([6, 4, 2, 19, 70]);
        //expect(wrapper.instance().state.feedback).toEqual('Make your guess!'); find To NOT equal
    });
});

// !!! Check game to see if we can verify that type Number or int of correctAnswer after it's randomly generated.
// !!! Check game, apparently when testing generateAuralUpdate() I don't need to update()?
// !!! Check guess-list to see if I can get the for loop to work properly.
// !!! Check aural-status-test to see if we can verify the id's value.

/*
it(``, function() {
        
});
*/