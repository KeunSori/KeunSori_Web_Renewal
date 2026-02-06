/**
 * 모달 컴포넌트 (Compound Component Pattern)
 *
 * @param question 모달에 표시될 질문 텍스트
 * @param description1 모달에 표시될 첫 번째 설명 텍스트 (선택 사항)
 * @param description2 모달에 표시될 두 번째 설명 텍스트 (선택 사항)
 * @param description3 모달에 표시될 세 번째 설명 텍스트 (선택 사항)
 * @param onCancel 취소 버튼 클릭 시 호출되는 함수
 * @param onConfirm 확인 버튼 클릭 시 호출되는 함수
 *
 */

interface ModalProps {
  question: string;
  description1?: string;
  description2?: string;
  description3?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const Modal = ({
  question,
  description1,
  description2,
  description3,
  onCancel,
  onConfirm,
}: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="flex w-fit flex-col items-center gap-3 rounded-lg bg-white px-4 py-4 shadow-lg">
        <div>{question}</div>
        <div className="text-sm text-gray-500">
          <div>{description1}</div>
          <div>{description2}</div>
          <div>{description3}</div>
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
