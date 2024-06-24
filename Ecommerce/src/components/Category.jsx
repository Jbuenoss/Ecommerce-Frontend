import { useState, useEffect } from 'react';

function Category(props) {
    const [category, setCategory] = useState('');

    useEffect(() => {
        if (props.numberCategory == 0)
            setCategory('Electronics')
        else if (props.numberCategory == 1)
            setCategory('Clothing')
        else if (props.numberCategory == 2)
            setCategory('Books')
        else if (props.numberCategory == 3)
            setCategory('ComputersAndAccessories')
        else if (props.numberCategory == 4)
            setCategory('Hobbies')
    }, [props.numberCategory]);

    return (
        <div>
            <p>Category: {category}</p>
        </div>

    );
}

export default Category