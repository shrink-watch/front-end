import React, { useState } from 'react';

export default function PasswordModal({ isOpen, onClose, onConfirm, mode }) {
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]">
      <div className="bg-white w-[320px] rounded-[12px] p-6 flex flex-col shadow-xl">
        <h3 className="text-[16px] font-bold text-black leading-snug mb-6 text-left">
          수정 또는 삭제를 위해<br />
          비밀번호를 입력해 주세요.
        </h3>

        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-[40px] bg-[#F6F7F8] rounded-[6px] px-3 text-[14px] outline-none text-center focus:ring-1 focus:ring-[#01a7fb] mb-6 placeholder:text-gray-300"
        />

        <div className="flex gap-2">
          <button
            onClick={() => {
              setPassword('');
              onClose();
            }}
            className="flex-1 h-[40px] bg-[#51555D] text-white font-bold text-[14px] rounded-[6px] hover:bg-[#41444a] transition-colors"
          >
            취소
          </button>
          <button
            onClick={() => {
              onConfirm(password);
              setPassword('');
            }}
            className="flex-1 h-[40px] bg-[#01A7FB] text-white font-bold text-[14px] rounded-[6px] hover:bg-[#0092dd] transition-colors"
          >
            입력 완료
          </button>
        </div>
      </div>
    </div>
  );
}