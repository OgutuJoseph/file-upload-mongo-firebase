import styles from './styeles.module.css';

const Song = ({ song }) => {
    return (
        <div className={styles.song_container}>
            <img src={song.img} alt='song_img' className={styles.song_img} />
            <div className={styles.song_info}>
                <p className={styles.song_name}>{song.name}</p>
                <p className={styles.song_artist}>{song.artist}</p>
            </div>
            <audio className={styles.audio} src={song.song} controls />
        </div>
    )
}

export default Song;