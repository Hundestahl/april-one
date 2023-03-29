import React from 'react';
import FirstInput from "./UI/input/FirstInput";
import FirstSelect from "./UI/select/FirstSelect";

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
            <FirstInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />
            <FirstSelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
        </div>
    );
};

export default PostFilter;