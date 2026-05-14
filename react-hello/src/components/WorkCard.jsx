
function WorkCard({ work, onSelect }) {
    return (
        <div key={work.id} onClick={() => onSelect(work)}>
            {work.title}
        </div>
    )
}

export default WorkCard