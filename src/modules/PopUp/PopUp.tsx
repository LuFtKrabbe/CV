import styles from './PopUp.module.scss';

const CertificatesPopUp = ({
  imgPath,
  setIsOpenFalseCb,
}: {
  imgPath: string;
  setIsOpenFalseCb: (arg: boolean) => void;
}): JSX.Element => {
  return (
    <div className={styles.certificatesPopUp}>
      <div className={styles.curtain}>
        <div className={styles.window}>
          <img className={styles.image} src={imgPath}></img>
          <button
            className={styles.closeButton}
            onClick={() => {
              setIsOpenFalseCb(false);
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificatesPopUp;
