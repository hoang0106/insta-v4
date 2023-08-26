import React from 'react';
import Post from './Post';

export default function Posts() {
	const posts = [
		{
			id: '1',
			username: 'John Doe',
			userImg: 'American-West.JPG',
			img: 'https://images.unsplash.com/photo-1683009427470-a36fee396389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
			caption: 'Thanks for reading my post!',
		},
		{
			id: '2',
			username: 'John Smith',
			userImg: 'American-West.JPG',
			img: 'https://images.unsplash.com/photo-1682687981922-7b55dbb30892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
			caption: 'Nice is a great person!',
		},
	];
	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					username={post.username}
					userImg={post.userImg}
					img={post.img}
					caption={post.caption}
				/>
			))}
		</div>
	);
}
