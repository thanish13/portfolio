import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

import ReactMarkDown from 'react-markdown';

function BlogContent({content}) {
	const [post, setPost] = useState('');
	useEffect(() => {
		import('./markdown' + content)
			.then(res => {
				fetch(res.default)
					.then(res => res.text())
					.then(res => setPost(res));
			})
			.catch(err => console.log(err));
	});

	return (
		<motion.div class="overall-scroll-auto prose prose-slate dark:prose-invert">
			<ReactMarkDown>
                {post}
			</ReactMarkDown>
		</motion.div>
	);
}

export default BlogContent;