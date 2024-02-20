import React, { useState } from 'react';
import MyButton from './UI/buttons/MyButton';
import MyInput from './UI/inputs/MyInput';

export default function PostForm({create}) {
    const [post, setPost] = useState({title: '', body: ''});
    
    const addNewPost = (event) => {
        event.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''});        
      }

    return (    
      <form>
        {/*Управляемый компонент */}
        <MyInput 
          value = {post.title}
          onChange = {event => setPost({...post, title: event.target.value})}
          type='text' 
          placeholder='название поста'
        />
       
       <MyInput 
          value = {post.body}
          onChange = {event => setPost({...post, body: event.target.value})}
          type='text' 
          placeholder='описание поста'
        />
        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
  )
}
