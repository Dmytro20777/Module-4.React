export const ArticleList = ({items}) => {
    return (
        <ul>
        {items.map(({objectID, title, url }) => (
          <li key={objectID}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </li>
        ))}
      </ul>
    )
}