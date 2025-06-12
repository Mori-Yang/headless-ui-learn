type TriggerProps = {
    label: string
    onClick: () => void
}
export const Trigger = ({ label, onClick }: TriggerProps) => {
    return <div className="trigger" tabIndex={0} onClick={onClick}>
        <span>{label}</span>
    </div>
}