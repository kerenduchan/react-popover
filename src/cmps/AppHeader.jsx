import { PopoverMenu } from './PopoverMenu'
import { usePopoverState } from '../customHooks/usePopoverState'

export function AppHeader({ num, onIncNum }) {
    const options = usePopoverState()
    const settings = usePopoverState()

    return (
        <>
            <div className="app-header">
                {/* Options button (triggers the options menu popover) */}
                <button {...options.trigger}>Options</button>

                {/* Settings button (triggers the settings menu popover) */}
                <button {...settings.trigger}>Settings</button>
            </div>

            {/* Options menu */}
            {options.show && (
                <PopoverMenu title="Options" {...options.popover}>
                    <OptionsMenu num={num} onIncNum={onIncNum} />
                </PopoverMenu>
            )}

            {/* Settings menu */}
            {settings.show && (
                <PopoverMenu title="Settings" {...settings.popover}>
                    <SettingsMenu
                        num={num}
                        onIncNum={onIncNum}
                        onClose={settings.onClose}
                    />
                </PopoverMenu>
            )}
        </>
    )
}

function OptionsMenu({ num, onIncNum }) {
    return (
        <div className="options-menu">
            <div>Options menu contents here</div>
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
