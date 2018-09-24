
import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe(`GuessForm component testing`, function() {
    it(`render the GuessForm`, function() {
        shallow(<GuessForm />);
    });

    it(`runs the onSubmit function through callback`, function() {
        const value = "20"; 
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={callback}/>);
        wrapper.find(`input[type="number"]`).instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
        expect(wrapper.find(`input[type="number"]`).instance().value).toEqual("");
    });
});