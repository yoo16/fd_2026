
function WorkList({ works, onSelect }) {
    return (
        <div>
            <div>{works.length}作品</div>
            <div>
                {
                    works.map(work => (
                        <div key={work.id} onClick={() => onSelect(work)}>
                            {work.title}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WorkList