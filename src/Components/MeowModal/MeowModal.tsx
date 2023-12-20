// MeowModal.tsx

import React from "react";
import styles from "./MeowModal.module.css";

interface MeowModalProps {
  onClose: () => void;
}

const MeowModal: React.FC<MeowModalProps> = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <textarea placeholder="What's on your mind?"></textarea>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MeowModal;
