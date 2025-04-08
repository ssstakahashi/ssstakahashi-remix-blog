import { Link, ShoppingBag, MessageCircle } from "lucide-react"

export default function RealConnectionSlide() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-emerald-800 mb-6">6. リアル連携システム</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
          <div className="flex items-center mb-3">
            <Link className="w-6 h-6 text-blue-500 mr-2" />
            <h3 className="text-lg font-semibold text-emerald-700">「自分の農地」感の演出</h3>
          </div>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>仮想区画の担当:</strong> 特定の農家の特定の作物の「仮想区画オーナー」となる
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>応援ポイント:</strong> ゲーム内アクションに応じて「応援ポイント」を獲得
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>成長の可視化:</strong> プレイヤーの応援度に基づき、ゲーム内の作物が成長
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>フィードバック:</strong> 農家からプレイヤーへの感謝メッセージ
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
          <div className="flex items-center mb-3">
            <MessageCircle className="w-6 h-6 text-purple-500 mr-2" />
            <h3 className="text-lg font-semibold text-emerald-700">農家からの情報提供</h3>
          </div>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>内容:</strong> 実際の畑の写真、短い動画、テキストコメント
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>頻度:</strong> 週1〜3回程度の定期更新、重要イベントは随時更新
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>方法:</strong> 農家専用アプリで簡単に投稿できるインターフェース
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md">
        <div className="flex items-center mb-4">
          <ShoppingBag className="w-6 h-6 text-orange-500 mr-2" />
          <h3 className="text-lg font-semibold text-emerald-700">農産物の販売・配送フロー</h3>
        </div>

        <div className="relative">
          {/* フロー図 */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div className="bg-orange-100 rounded-lg p-3 text-center w-full md:w-40 mb-4 md:mb-0">
              <h4 className="text-sm font-medium text-orange-700 mb-1">予約・購入</h4>
              <p className="text-xs text-gray-700">収穫予測時期が近づくと予約・購入案内を通知</p>
            </div>

            <div className="hidden md:block w-8 h-0.5 bg-orange-300"></div>

            <div className="bg-orange-100 rounded-lg p-3 text-center w-full md:w-40 mb-4 md:mb-0">
              <h4 className="text-sm font-medium text-orange-700 mb-1">決済</h4>
              <p className="text-xs text-gray-700">クレジットカード決済を主軸に各種オンライン決済に対応</p>
            </div>

            <div className="hidden md:block w-8 h-0.5 bg-orange-300"></div>

            <div className="bg-orange-100 rounded-lg p-3 text-center w-full md:w-40 mb-4 md:mb-0">
              <h4 className="text-sm font-medium text-orange-700 mb-1">配送</h4>
              <p className="text-xs text-gray-700">提携物流業者によるクール便での農家からの直送</p>
            </div>

            <div className="hidden md:block w-8 h-0.5 bg-orange-300"></div>

            <div className="bg-orange-100 rounded-lg p-3 text-center w-full md:w-40">
              <h4 className="text-sm font-medium text-orange-700 mb-1">受け取り</h4>
              <p className="text-xs text-gray-700">オリジナルメッセージカード付きで特別感のある開封体験</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-4">
          <h4 className="text-sm font-medium text-red-700 mb-2">リスク管理</h4>
          <ul className="text-xs text-gray-700 space-y-1">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 mt-1 mr-1.5"></span>
              <span>
                <strong>不作・品質不良時:</strong> 代替品、ポイント補填、返金などの対応策を提示
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 mt-1 mr-1.5"></span>
              <span>
                <strong>配送トラブル時:</strong> 運営が物流業者と連携して補償交渉、再送または返金対応
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
