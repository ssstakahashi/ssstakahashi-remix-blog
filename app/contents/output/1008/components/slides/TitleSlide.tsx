import { Sprout } from "lucide-react"

export default function TitleSlide() {
  return (
    <div className="w-full mx-auto p-8 text-center">
      <div className="flex justify-center mb-6">
        <div className="bg-white p-6 rounded-full shadow-lg">
          <Sprout className="w-24 h-24 text-emerald-500" />
        </div>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-emerald-800 mb-6">ポケット農園</h1>
      <p className="text-2xl md:text-3xl text-emerald-700 mb-8">ゲームとリアル農業を繋ぐ新しい体験</p>
      <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-3 rounded-lg shadow-md">
        <p className="text-lg text-emerald-600">企画書プレゼンテーション</p>
      </div>
    </div>
  )
}
