import React from "react";
import Board from "./Board";
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })
import store from "../../store/store";

describe('<Board>', () => {
    it('renders Board Component', () => {
        shallow(<Board store={store}/>)
    });
});