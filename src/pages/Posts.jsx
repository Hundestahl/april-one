import React, {useEffect, useRef, useState} from "react";
import '../styles/App.css';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import {usePosts} from "../hooks/usePosts";
import FirstButton from "../components/UI/button/FirstButton";
import PostForm from "../components/PostForm";
import FirstModal from "../components/UI/modal/FirstModal";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import Loader from "../components/UI/Loader/Loader";
import {useObserver} from "../hooks/useObserver";
import FirstSelect from "../components/UI/select/FirstSelect";

function Posts() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort:'', query:''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef()

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
        // fetchPosts(limit, page)
    }

    return (
        <div className="App">
            <FirstButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Создать пост
            </FirstButton>
            <FirstModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </FirstModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <FirstSelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue='Количество постов на странице'
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: -1, name: 'Показать все'},
                ]}
            />
            {postError &&
                <h2>Произошла ошибка ${postError}</h2>
            }
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Публикации на свободную тему"/>
            <div ref={lastElement} style={{height: 20}}/>
            {isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            }

            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
}

export default Posts;