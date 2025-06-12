export interface Item {
    text: string
    description: string
}

type DropdownMenuProps = {
    items: Item[]
    onItemClick: (item: Item) => void
}

export const DropdownMenu = ({ items, onItemClick }: DropdownMenuProps) => {

    return (
        <div className="dropdown-menu">
            {
                items.map((item, index) => {
                    return <div key={index} className="item-container" onClick={() => {
                        onItemClick(item)
                    }}>
                        <div className="details">
                            <div>{item.text}</div>
                            <small>{item.description}</small>
                        </div>
                    </div>
                })
            }
        </div>
    )
}