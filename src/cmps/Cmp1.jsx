import { usePopoverState } from '../customHooks/usePopoverState'
import { PopoverMenu } from './PopoverMenu'

export function Cmp1({ num, onIncNum }) {
    const labels = usePopoverState()

    return (
        <>
            <div className="cmp1">
                {/* Labels button (triggers the labels menu popover) */}
                <button {...labels.trigger}>Labels</button>
            </div>

            {/* Labels menu */}
            {labels.show && (
                <PopoverMenu title="Labels" {...labels.popover}>
                    <LabelsMenu num={num} onIncNum={onIncNum} />
                </PopoverMenu>
            )}
        </>
    )
}

function LabelsMenu({ num, onIncNum }) {
    return (
        <div className="labels-menu">
            <div>Labels menu contents here</div>
            <button onClick={onIncNum}>Increment num ({num})</button>
        </div>
    )
}

function SettingsMenu({ num, onIncNum, onClose }) {
    return (
        <div className="settings-menu">
            <div>Settings menu contents here</div>
            <button onClick={onIncNum}>Increment num ({num})</button>
            <button onClick={onClose}>Save and close</button>
        </div>
    )
}
