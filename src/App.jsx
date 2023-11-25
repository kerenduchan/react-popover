import { useState } from 'react'
import { AppHeader } from './cmps/AppHeader'
import { Cmp1 } from './cmps/Cmp1'

export function App() {
    const [num, setNum] = useState(1)

    function onIncNum() {
        setNum((prev) => prev + 1)
    }

    return (
        <div className="app" id="app">
            <AppHeader num={num} onIncNum={onIncNum} />
            <main>
                <p>Num is {num}</p>
                <Cmp1 num={num} onIncNum={onIncNum} />
            </main>
        </div>
    )
}
