import '../style/AnimateLetters.scss'

const AnimeLetters = ({ letters, arr, id }) => {
    return (
        <span>
            {arr.map((char, i) => (
            <span key={char + i} className={`${letters} _${i + id}`}>
            {char}
        </span>
            ))}
            </span>
    )
}

export default AnimeLetters