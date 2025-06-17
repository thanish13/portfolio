import { useState, useEffect } from 'react';

import ReactMarkDown from 'react-markdown';

function BlogContent() {
	const [post, setPost] = useState('');
	useEffect(() => {
		import('../../../../public/assets/index.md')
			.then(res => {
				fetch(res.default)
					.then(res => res.text())
					.then(res => setPost(res));
			})
			.catch(err => console.log(err));
	});

	return (
		<div class="prose prose-slate dark:prose-invert">
			<ReactMarkDown>
                {post}
			</ReactMarkDown>
		</div>
	);
}

export default BlogContent;