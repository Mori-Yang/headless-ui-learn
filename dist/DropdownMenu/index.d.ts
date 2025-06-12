export interface Item {
    text: string;
    description: string;
}
type DropdownMenuProps = {
    items: Item[];
    onItemClick: (item: Item) => void;
};
export declare const DropdownMenu: ({ items, onItemClick }: DropdownMenuProps) => import("react/jsx-runtime").JSX.Element;
export {};
