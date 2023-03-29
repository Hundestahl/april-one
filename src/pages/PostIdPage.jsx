import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data);
    })

    const [fetchComment, isCommLoading, commError] = useFetching(async () => {
        const response = await PostService.getCommentByPostId(params.id)
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComment(params.id)
    }, [])


    return (
        <div>
            <h2>Открыта страница публикации номер {params.id}</h2>
            {isLoading
                ? <Loader/>
                : <div> {params.id}. {post.title}  <br></br><br></br> {post.body} </div>
            }
            <h2>
                Комментарии:
            </h2>
            {isCommLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                            )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;