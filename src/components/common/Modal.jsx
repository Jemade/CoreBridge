import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, title, children, maxWidth = "560px" }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title || "Dialog"}
    >
      <div
        className="audit-modal"
        style={{ maxWidth }}
        onClick={e => e.stopPropagation()}
        ref={modalRef}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}
