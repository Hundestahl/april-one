import React, {useState} from 'react';
import FirstInput from "./UI/input/FirstInput";
import FirstButton from "./UI/button/FirstButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>

            <FirstInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />
            <FirstInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                // ref={bodyInputRef} Для неуправляемого компонента
                type="text"
                placeholder="Описание поста"
            />
            <FirstButton onClick={addNewPost}>Опубликовать</FirstButton>

        </form>
    );
};

export default PostForm;
