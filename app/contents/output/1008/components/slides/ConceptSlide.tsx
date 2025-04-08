import { Lightbulb, Heart, Sprout } from "lucide-react"

export default function ConceptSlide() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-emerald-800 mb-6">3. コンセプト</h2>

      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md mb-6">
        <div className="flex items-center mb-4">
          <Lightbulb className="w-8 h-8 text-yellow-500 mr-3" />
          <h3 className="text-2xl font-semibold text-emerald-700">ポケット農園</h3>
        </div>
        <p className="text-gray-700 mb-4">
          スマートフォン向け育成ゲームでの体験と、リアルな農産物・農家を、活発なコミュニケーション機能を通じて密接に結びつけます。
        </p>
        <p className="text-gray-700 font-medium">
          ゲーム内での応援や交流が、実際の農業支援や農産物の購入・獲得に繋がる仕組みを構築します。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
          <div className="flex items-center mb-3">
            <Heart className="w-6 h-6 text-pink-500 mr-2" />
            <h3 className="text-lg font-semibold text-emerald-700">プレイヤーへの提供価値</h3>
          </div>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>達成感:</strong> 作物を育て上げ、収穫に至った時の喜び
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>所有感:</strong> 自分だけの畑をカスタマイズする楽しさ
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>学び:</strong> 農業に関する実践的な知識の獲得
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>特別な報酬:</strong> リアルな農産物が自宅に届く感動
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>繋がり:</strong> 農家との温かいコミュニケーション
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>交流:</strong> プレイヤーコミュニティでの情報共有
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
          <div className="flex items-center mb-3">
            <Sprout className="w-6 h-6 text-emerald-500 mr-2" />
            <h3 className="text-lg font-semibold text-emerald-700">農家への提供価値</h3>
          </div>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>新たな販路:</strong> 中間マージンのない直接販売
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>ファン獲得:</strong> 継続的に応援してくれる支持者
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>安定収入:</strong> 予約販売による計画的な経営
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>情報発信:</strong> 自身のこだわりを伝える場
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>モチベーション:</strong> 消費者からの直接的な反応
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>アイデア獲得:</strong> プレイヤーからのフィードバック
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
