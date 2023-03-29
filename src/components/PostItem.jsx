import React from 'react';
import FirstButton from "./UI/button/FirstButton";
import {useNavigate} from 'react-router-dom';
const PostItem = (props) => {
    const navigate = useNavigate()
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <FirstButton onClick={() => navigate(`/posts/${props.post.id}`)}>
                    Открыть
                </FirstButton>
                <FirstButton onClick={() => props.remove(props.post)}>
                    Удалить
                </FirstButton>
            </div>
        </div>
    );
};

export default PostItem;