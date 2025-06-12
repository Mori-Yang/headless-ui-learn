// import { Dropdown, type Item } from 'headless-ui-learn/Dropdown';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useState, type ElementType, type ReactNode } from 'react';
import './index.less';
// const items: Item[] = [
//     { text: '1', description: '1111' },
//     { text: '2', description: '2222' },
//     { text: '3', description: '3333' },

// ];
const HeadlessBtnAs = ({ as: Comp = 'button' }: { as?: ElementType }) => {
    return <Comp>123</Comp>;
};
const MyBtn = () => {
    return <>123</>;
};

const HeadlessBtnRP = ({ children }: { children: (count: number, setCount: React.Dispatch<React.SetStateAction<number>>) => ReactNode }) => {
    const [count, setCount] = useState(0);
    return children(count, setCount);
};

const App = () => {
    return (
        <div id="container">
            {/* <Dropdown items={items} /> */}
            <HeadlessBtnAs as="div" />
            <HeadlessBtnAs as={MyBtn} />
            <HeadlessBtnRP>
                {(count, setCount) => <div onClick={() => { setCount(count++); }}>{count}</div>}
            </HeadlessBtnRP>

            <Menu>
                <MenuButton>1</MenuButton>
                <MenuItems onSelect={(a) => {
                    console.log(a);
                }}
                >
                    <MenuItem>
                        <p>Settings1</p>
                    </MenuItem>
                    <MenuItem>
                        <p>Settings2</p>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </div>
    );
};

export default App;
