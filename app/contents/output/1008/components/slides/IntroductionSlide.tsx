import { Target, Leaf, Users } from "lucide-react"

export default function IntroductionSlide() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-emerald-800 mb-6">1. はじめに（企画概要）</h2>

      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md mb-6">
        <h3 className="text-xl font-semibold text-emerald-700 mb-3">企画の骨子</h3>
        <p className="text-gray-700">ゲームとリアル農業を連携させる「共感型農園体験」を創出します。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
          <div className="flex items-center mb-3">
            <Target className="w-6 h-6 text-emerald-500 mr-2" />
            <h3 className="text-lg font-semibold text-emerald-700">プレイヤーへの価値</h3>
          </div>
          <p className="text-sm text-gray-700">
            「育てる喜び」「繋がる楽しさ」「食への感謝」を提供し、これまでにない共感型農園体験を創出します。
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
          <div className="flex items-center mb-3">
            <Leaf className="w-6 h-6 text-emerald-500 mr-2" />
            <h3 className="text-lg font-semibold text-emerald-700">農家への価値</h3>
          </div>
          <p className="text-sm text-gray-700">
            ゲームを介した新たな販路を開拓し、安定的な収益を確保。ファンコミュニティを形成し、持続可能な農業を支援します。
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
          <div className="flex items-center mb-3">
            <Users className="w-6 h-6 text-emerald-500 mr-2" />
            <h3 className="text-lg font-semibold text-emerald-700">社会への価値</h3>
          </div>
          <p className="text-sm text-gray-700">
            ゲームをきっかけに食と農業への関心を高め、地産地消を促進することで、地域活性化に貢献します。
          </p>
        </div>
      </div>

      <div className="mt-6 bg-emerald-100/80 backdrop-blur-sm rounded-xl p-5 shadow-md">
        <h3 className="text-xl font-semibold text-emerald-700 mb-2">独自性・新規性</h3>
        <p className="text-gray-700">
          <span className="font-semibold">「ゲームを通じた継続的な育成参加・応援」</span>と
          <span className="font-semibold">「リアルな農家・農産物とのダイレクトな繋がり」</span>
          を融合させた点が独自性です。プレイヤーは単なる消費者ではなく、ゲームを通じて農家の「ファン」や「応援団」となります。
        </p>
      </div>
    </div>
  )
}
