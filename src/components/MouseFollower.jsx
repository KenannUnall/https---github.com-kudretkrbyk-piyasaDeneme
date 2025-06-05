// src/components/MouseFollower.jsx
import { useEffect, useRef, useState } from "react";

const MouseFollower = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) return; // küçük ekranlarda çalışmasın
    let frameId;
    const follow = () => {
      setFollowerPos((prev) => {
        return {
          x: prev.x + (mousePos.x - prev.x) * 0.1,
          y: prev.y + (mousePos.y - prev.y) * 0.1,
        };
      });
      frameId = requestAnimationFrame(follow);
    };
    follow();
    return () => cancelAnimationFrame(frameId);
  }, [mousePos]);

  return (
    <div
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-[#14C2A3] pointer-events-none z-[9999] mix-blend-difference"
      style={{
        transform: `translate(${followerPos.x}px, ${followerPos.y}px)`,
      }}
    />
  );
};

export default MouseFollower;
