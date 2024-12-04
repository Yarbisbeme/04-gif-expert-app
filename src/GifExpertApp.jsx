import { useState } from "react";
import { AddCategory, GifGrid, Esperando } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
        <div className="custom-bg"></div>
        <div className="container relative z-10">
            <h1>Gif Expert App</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />

            <Esperando categories={categories} />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </div>
        </>
    );
};
