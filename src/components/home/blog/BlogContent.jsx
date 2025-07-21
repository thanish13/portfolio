import { motion } from "framer-motion";
import ReactMarkDown from 'react-markdown';
import C001 from '../blog/content/001/index.md';
import C002 from '../blog/content/002/index.md';
import C003 from '../blog/content/003/index.md';
import C004 from '../blog/content/004/index.md';
import C005 from '../blog/content/005/index.md';
import C006 from '../blog/content/006/index.md';
import C007 from '../blog/content/007/index.md';

import { Component } from 'react';

const contentMap = new Map([
	["001", C001],
	["002", C002],
	["003", C003],
	["004", C004],
	["005", C005],
	["006", C006],
	["007", C007]
]);

class BlogContent extends Component {

  constructor() {
    super();
    this.state = { markdown: '' };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(contentMap.get(this.props.content))
		.then(res => res.text())
		.then(text => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;

    return (
      <motion.div class="overall-scroll-auto prose prose-slate dark:prose-invert">
			<ReactMarkDown>
                {markdown}
			</ReactMarkDown>
		</motion.div>
    );
  }
}

export default BlogContent;