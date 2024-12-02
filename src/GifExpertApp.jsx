import { useState } from "react";
import { AddCategory, GifGrid, Esperando } from "./components";
import '@fontsource-variable/onest';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <div className="container relative z-10">
            <h1>Gif Expert App</h1>

            <AddCategory
                onNewCategory={(event) => onAddCategory(event)}
            />

            <Esperando categories={categories} />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </div>
    );
};
