import { useState, useEffect } from 'react';

import MarkDown from 'react-markdown';

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
		<div>
			<MarkDown>
                {post}
			</MarkDown>
		</div>
	);
}

export default BlogContent;