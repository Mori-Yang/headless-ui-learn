import { Dropdown, type Item } from 'headless-ui-learn/Dropdown';
import './index.less';

const items: Item[] = [
    { text: '1', description: '1111' },
    { text: '2', description: '2222' },
    { text: '3', description: '3333' },

];

const App = () => {
    return (
        <div id="container">
            <Dropdown items={items} />
        </div>
    );
};

export default App;
