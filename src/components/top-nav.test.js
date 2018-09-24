
import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe(`TopNav component test`, function() {
    it('renders TopNav properly.', function() {
        shallow(<TopNav />);
    });

    it(`should fire the onClick callback of onGenerateAuralUpdate.`, function() {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback}/>);
        wrapper.find(`.status-link`).simulate("click");
        expect(callback).toHaveBeenCalled();
    });

    it(`should fire the onClick callback of onRestartGame.`, function() {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onRestartGame={callback}/>);
        wrapper.find(`.new`).simulate("click");
        expect(callback).toHaveBeenCalled();
    });
});