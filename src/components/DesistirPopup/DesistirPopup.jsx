import React, { useEffect } from 'react';
import styles from './DesistirPopup.module.css';

function DesistirPopup({ onConfirmar, onCancelar }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://tenor.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <div
                    className="tenor-gif-embed"
                    data-postid="15542477"
                    data-share-method="host"
                    data-aspect-ratio="1.77778"
                    data-width="100%"
                ></div>
                <script
                    type="text/javascript"
                    async
                    src="https://tenor.com/embed.js"
                ></script>

                <p>Credo... você desiste fácil assim?</p>
                <div className={styles.botoes}>
                    <button className={styles.vergonha} onClick={onConfirmar}>
                        Sim, sou a vergonha da profissão
                    </button>
                    <button className={styles.continuar} onClick={onCancelar}>
                        Continuar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DesistirPopup;
