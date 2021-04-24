import React from "react";
import BoardColumn from "./BoardColumn";
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })
import io from "socket.io-client";
import config from "../../Helpers/config.json";
const socket = io(config.apiUrl);

describe('<BoardColumn>', () => {
    it('renders BoardColumn Component', () => {
        shallow(<BoardColumn title = "SELECTION" tasks={[{id: 3}]} socket={socket} />)
    });
});