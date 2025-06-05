import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0c1226] px-4">
      <div className="bg-[#141A31] rounded-2xl shadow-lg p-10 flex flex-col items-center gap-4 w-full max-w-lg border border-[#14C2A3]/20">
        <h1 className="text-7xl font-extrabold text-[#14C2A3] drop-shadow-[0_0_32px_#14C2A3]">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white">Sayfa Bulunamadı</h2>
        <p className="text-gray-400 text-center mb-4">
          Aradığınız sayfa bulunamadı veya kaldırılmış olabilir.
        </p>
        <Link
          to="/"
          className="mt-2 px-6 py-3 rounded-lg bg-[#14C2A3] text-white font-bold shadow hover:bg-[#10a38a] transition"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}

export default Page404;
