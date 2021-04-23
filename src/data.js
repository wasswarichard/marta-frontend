import {PRIORITY_HIGH, PRIORITY_HIGHEST, PRIORITY_LOW, PRIORITY_MEDIUM} from "./constants/priority";
const data =  {
    tasks: [
        {
            id: 'REACT-1',
            // priority: PRIORITY_HIGHEST,
            title: 'Read WebPack documentation',
            // epicLink: 'React buidings',
            status: "DONE",
            points: 3
        },
        {
            id: 'REACT-2',
            priority: PRIORITY_HIGHEST,
            title: 'Install dependencies',
            epicLink: 'React buidings',
            status: "DONE",
            points: 3
        },
        {
            id: 'REACT-3',
            priority: PRIORITY_HIGH,
            title: 'Try Hello world',
            epicLink: 'React buidings',
            status: "DONE"
        },
        {
            id: 'REACT-4',
            priority: PRIORITY_MEDIUM,
            title: 'Create some little components',
            epicLink: 'React buidings',
            status: "CONTRACT_SIGNATURES"
        },
        {
            id: 'REACT-5',
            priority: PRIORITY_MEDIUM,
            title: 'Create App with react-router',
            epicLink: 'React buidings',
            status: "SELECTION"
        },
        {
            id: 'REACT-6',
            priority: PRIORITY_MEDIUM,
            title: 'Practise styled-components (react library)',
            epicLink: 'React buidings',
            status: "PROPOSITION"
        },
        {
            id: 'REACT-7',
            priority: PRIORITY_LOW,
            title: 'Read Redux documentation',
            epicLink: 'React buidings',
            status: "PROPOSITION"
        },
        {
            id: 'REACT-8',
            priority: PRIORITY_LOW,
            title: 'Do a little project with ReduxJS',
            epicLink: 'React buidings',
            status: "SELECTION"
        }]
};

export default data

