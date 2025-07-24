import React from 'react';

class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
    }
    loadPosts(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data });
            })
            .catch(error => console.error('Error fetching posts:', error));
    }
    componentDidMount(){
        this.loadPosts();
    }
    render(){
        return (
            <div>
                <h1>Posts</h1>
                <ul>
                    {this.state.posts.map(post => (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    componentDidCatch(error, info) {
        console.error("Error occurred in Posts component:", error, info);
    }
}
export default Posts;