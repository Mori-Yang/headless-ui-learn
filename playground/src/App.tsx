// import { Dropdown, type Item } from 'headless-ui-learn/Dropdown';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useState, type ElementType, type ReactNode } from 'react';
import './index.less';
// const items: Item[] = [
//     { text: '1', description: '1111' },
//     { text: '2', description: '2222' },
//     { text: '3', description: '3333' },

// ];
// 支持自定义样式的方式
// 1. as prop
const HeadlessBtnAs = ({ as: Comp = 'button' }: { as?: ElementType }) => {
    return <Comp>123</Comp>;
};
const MyBtn = () => {
    return <>123</>;
};

// 2. render prop，使用children作为render prop
const HeadlessBtnRP = ({ children }: { children: (count: number, setCount: React.Dispatch<React.SetStateAction<number>>) => ReactNode }) => {
    const [count, setCount] = useState(0);
    return children(count, setCount);
};

// 3. asChild prop
const HeadlessBtnAsChild = ({ asChild = false, children }: { asChild?: boolean, children?: ReactNode }) => {
    if (asChild) {
        return children;
    }
    return <></>;
};

const App = () => {
    return (
        <div id="container">
            {/* <Dropdown items={items} /> */}
            <HeadlessBtnAs as="a" />
            <HeadlessBtnAs as={MyBtn} />
            <HeadlessBtnRP>
                {(count, setCount) => <div onClick={() => { setCount(count++); }}>{count}</div>}
            </HeadlessBtnRP>
            <HeadlessBtnAsChild asChild>
                <a href="/">asChild Btn</a>
            </HeadlessBtnAsChild>
            <Menu>
                <MenuButton>1</MenuButton>
                <MenuItems>
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
