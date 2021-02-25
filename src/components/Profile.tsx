import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/andrebarbosadev.png" alt="André Barbosa" />
            <div>
                <strong>André Barbosa</strong>
                <p>
                    <img src="icons/level.svg" alt="Nível" />
                    Nível 1
                </p>
            </div>
        </div>
    );
}