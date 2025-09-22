export default function DesktopLayout() {
  return (
    <div>
      <h1 className="px-10 py-20 bg-yellow-400 text-2xl text-center">Atenção!</h1>
      <div className="flex flex-row px-10 mt-5 gap-3 justify-center">
        <img src="/tl.webp" alt="" width={80} height={80} />
        <p className="text-sm w-[600px]">
        Esta plataforma está otimizada exclusivamente para dispositivos móveis. Estamos desenvolvendo a versão para computadores e em breve ela estará disponível. Agradecemos sua compreensão.
        </p>
      </div>
      
    </div>
  );
}
