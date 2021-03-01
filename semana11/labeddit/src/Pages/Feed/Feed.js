import React, { useEffect, useState } from 'react';
import useProtectedPage from '../../Hooks/useProtectedPage';
import useRequestData from '../../Hooks/useRequestData';
import { HomeContainer, Card, Header, Body, Footer } from './styled';
import {BASE_URL} from '../../Constants/url'


function Feed() {

  const posts = useRequestData([], `${BASE_URL}/posts`)

  const post = posts.posts

  console.log(post)


  return (
    <HomeContainer>
      {post && post.map (post => {
      return (<Card>
        <Header>{post.username}</Header>
        <Body>{post.text}</Body>
        <Footer></Footer>
      </Card>)
      })}
    </HomeContainer>
  );
}

export default Feed;

