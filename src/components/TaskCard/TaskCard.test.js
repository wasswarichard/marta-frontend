import React from "react";
import TaskCard from "./TaskCard";
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })
import io from "socket.io-client";
import config from "../../Helpers/config.json";
const socket = io(config.apiUrl);

describe('<TaskCard>', () => {
    it('renders BoardColumn Component', () => {
        shallow(<TaskCard  title = "SELECTION" task = { {dob: "4/23/2004", id: 30, language: "B2", name: "Trust", nextavail: "4/23/2014", smoke: "Non-smoker", status: "DONE"}} socket={socket}/>)
    });
});