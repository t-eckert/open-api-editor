const formatPostUrl = (id: string): string => {
	return `https://raw.githubusercontent.com/t-eckert/open-api-editor/dev/about/posts/${id}.md`
}

export default formatPostUrl