// Setup Enzyme for tests
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Fix - jsdom error `Not implemented: window.scrollTo`
window.scrollTo = () => {};
