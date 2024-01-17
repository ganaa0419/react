export function MenuItems({items}) {
    return (
        <div className="hidden sm:flex">
            <a className="px-3 py-2" href="{items[0].link}">{items[0].label}</a>
            <a className="px-3 py-2" href="{items[1].link}">{items[1].label}</a>
            <a className="px-3 py-2" href="{items[2].link}">{items[2].label}</a>
            <a className="px-3 py-2" href="{items[3].link}">{items[3].label}</a>
        </div>
    )
}