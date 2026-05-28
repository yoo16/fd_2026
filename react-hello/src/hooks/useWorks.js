import { useState, useEffect } from 'react'

function useWorks() {
    const [works, setWorks] = useState([])

    return { works }
}

export default useWorks