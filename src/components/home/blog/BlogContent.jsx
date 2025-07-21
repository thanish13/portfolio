import { motion } from "framer-motion";
import ReactMarkDown from 'react-markdown';
import mc from '../../../../public/assets/blog/001/index.md'
import { Component } from 'react';

class BlogContent extends Component {

  constructor() {
    super();
    this.state = { markdown: '' };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(mc).then(res => res.text()).then(text => this.setState({ markdown: text }));
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