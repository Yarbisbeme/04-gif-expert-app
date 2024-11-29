import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch', 'Dragon Ball'])
    const onAddCategory = () => {
        setCategories(['Roberto', ...categories])
    }

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory setCategories={setCategories}/>
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categories.map(category => {
                    return <li key={category}> {category} </li>
                })}
            </ol>
        </>
    )
}
