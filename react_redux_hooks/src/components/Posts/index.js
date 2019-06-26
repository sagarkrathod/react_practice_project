import React from 'react'
import { useSelector } from 'react-redux';

const Posts = () => {
    const posts = useSelector( state => {
        return state.post;
    });

    
    
    return(
        <div className="posts">
            {posts.length}
            {posts.length <= 0 && (
                <div style={{'color':'orange'}}>Loading</div>
            )}
            {posts.length > 0 && 
                <div>
                    <table border='1'>
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td><b>Post Title</b></td>
                            </tr>
                        </tbody>
                        {posts.map( item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                </tr>
                            )
                        })}
                    </table>
                    
                </div>
            }
            
        </div>
    )
}

export default Posts;