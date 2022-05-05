import React from "react";

import { useState } from "react";

const Categories = React.memo(({activeCategory, item, onClickItem }) => {
    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? "active" : ""} onClick={() => onClickItem(null)}>Все</li>
                {item && item.map((name, index) => (
                    <li
                        className={activeCategory === index ? "active" : ""}
                        onClick={() => onClickItem(index)}
                        key={index + name}>
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    )
})

export default Categories;
