import { useState } from "react";
import Button from "./button";

const WarningModal = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 font-chakra">
      <div className="bg-[#0c1226] p-8 rounded-lg shadow-xl max-w-md mx-4 transform transition-all">
        <div className="text-center flex flex-col items-center justify-center gap-4">
          <h2 className="text-5xl font-bold text-red-600 mb-4">
            Önemli Uyarı!
          </h2>
          <p className="text-white text-2xl">
            Yapılan çalışmalar deneme amaçlı olup kesinlikle yatırım tavsiyesi
            değildir!
          </p>
          <Button onClick={() => setIsVisible(false)} title="Anladım"></Button>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;
