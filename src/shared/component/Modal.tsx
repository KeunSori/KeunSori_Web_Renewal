interface ModalProps {
  question: string;
  discription1?: string;
  discription2?: string;
  discription3?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const Modal = ({
  question,
  discription1,
  discription2,
  discription3,
  onCancel,
  onConfirm,
}: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="flex w-fit flex-col items-center gap-3 rounded-lg bg-white px-4 py-4 shadow-lg">
        <div>{question}</div>
        <div className="text-sm text-gray-500">
          <div>{discription1}</div>
          <div>{discription2}</div>
          <div>{discription3}</div>
        </div>
        <div className="flex flex-row gap-2">
          <button onClick={onCancel} className="rounded-lg border px-9 py-1">
            취소
          </button>
          <button onClick={onConfirm} className="rounded-lg border px-9 py-1">
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
