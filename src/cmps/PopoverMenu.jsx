import { Popover } from './Popover'

export function PopoverMenu({ refEl, onClose, title, children }) {
    return (
        <Popover refEl={refEl} onClose={onClose}>
            <header>
                <div className="title">{title}</div>
                <button className="close-btn" onClick={onClose}>
                    X
                </button>
            </header>
            <div className="main">{children}</div>
        </Popover>
    )
}
