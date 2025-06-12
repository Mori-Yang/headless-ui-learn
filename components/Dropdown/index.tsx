import { useState } from 'react';
import { DropdownMenu, type Item } from '../DropdownMenu';
import { Trigger } from '../Trigger';
export type { Item } from '../DropdownMenu';

type DropdownProps = {
    items: Item[]
}

export const Dropdown = ({ items }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    function handleTrigger() {
        setIsOpen(!isOpen)
    }

    function handleItemClick(item: Item) {
        setSelectedItem(item)
    }

    return <div className="dropdown">
        <Trigger
            label={selectedItem?.text || "Please select ..."}
            onClick={handleTrigger}
        />
        {
            isOpen && <DropdownMenu items={items} onItemClick={handleItemClick} />
        }
    </div>
}