import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/andrebarbosadev.png" alt="André Barbosa" />
            <div>
                <strong>André Barbosa</strong>
                <p>
                    <img src="icons/level.svg" alt="Nível" />
                    Nível {level}
                </p>
            </div>
        </div>
    );
}