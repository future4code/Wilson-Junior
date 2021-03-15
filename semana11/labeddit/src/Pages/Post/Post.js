import React, {useEffect, useContext} from 'react';
import useProtectedPage from '../../Hooks/useProtectedPage';

function Post() {
  
  useProtectedPage()

  return (
    <div>
    <h1>Post</h1> 
    </div>
  );
}

export default Post;

