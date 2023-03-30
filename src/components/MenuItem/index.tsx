
import './style.css'
type MenuItemProps = {
    icon: React.ReactNode
    text: string
}
export function MenuItem({ icon, text }: MenuItemProps) {
    return (
        <>
            <button className="menuItem">
                {icon}{text}
            </button>
        </>
    )
}