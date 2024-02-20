import React, { useState } from 'react';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'}
  ])

  const [selectedSort, setSelectedSort] = useState('');

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create = {createPost}/>
      <div>
        <hr style={{margin: '15px 0'}}/>
        <MySelect
          value={selectedSort}
          onChange={sort => sortPosts(sort)}
          defaultValue='Сортировка'
          option = {[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>
      {posts.length
        ? <PostList remove = {removePost} posts={posts} title={'Список постов'}/>
        : <h1 style = {{textAlign: 'center'}}>Посты не найдены</h1>
      }
      
    </div>
  );
}

export default App;
