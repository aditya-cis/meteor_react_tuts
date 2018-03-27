import React from 'react';
import { AutoForm, AutoField, LongTextField } from 'uniforms-unstyled';
import PostSchema from '/db/posts/schema';

export default class PostEdit extends React.Component {
    constructor() {
        super();
        this.state = { post: null };
    }

    componentDidMount() {
        Meteor.call('post.updateViewCount', this.props.match.params._id, (err, post) => {});
        Meteor.call('post.get', this.props.match.params._id, (err, post) => {
            this.setState({ post });
        });

    }

    render() {
        const { history } = this.props;
        const { post } = this.state;

        if (!post) {
            return <div>Loading....</div>
        }

        return (
            <div className="post">
                <p>Post id: {post._id} </p>
                <p>Post title: {post.title}</p>
                <p>Post Description: {post.description} </p>
                <button onClick={() => history.push('/posts')}>Back to posts</button>
            </div>
        )
    }
}
