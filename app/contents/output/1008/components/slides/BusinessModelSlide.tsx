import { DollarSign, ShoppingCart, Ticket, CreditCard } from "lucide-react"

export default function BusinessModelSlide() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-emerald-800 mb-6">8. ビジネスモデル（収益化）</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
            <div className="flex items-center mb-3">
              <ShoppingCart className="w-6 h-6 text-green-500 mr-2" />
              <h3 className="text-lg font-semibold text-emerald-700">農産物販売手数料</h3>
            </div>

            <div className="flex items-center justify-center mb-4">
              <div className="w-32 h-32 relative">
                <div className="absolute inset-0 rounded-full bg-green-100"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-700">15-25%</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-700">
              プレイヤーが購入した農産物の販売価格（農家設定）に対し、一定料率を手数料として運営が徴収します。料率はプラットフォーム維持費、決済手数料、サポート人件費等を考慮し設定します。
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
            <div className="flex items-center mb-3">
              <CreditCard className="w-6 h-6 text-blue-500 mr-2" />
              <h3 className="text-lg font-semibold text-emerald-700">サブスクリプション（任意）</h3>
            </div>

            <p className="text-sm text-gray-700 mb-3">
              より深くゲームを楽しみたい、または農家を強く応援したいプレイヤー向けのオプションプランです。
            </p>

            <h4 className="text-sm font-medium text-emerald-700 mb-2">特典例:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
                <span>毎月一定量のゲーム内通貨や便利アイテム配布</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
                <span>広告非表示機能</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
                <span>サブスク限定のアバター衣装や農園デコレーション</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
                <span>同時に応援できる農家数の上限緩和</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
            <div className="flex items-center mb-3">
              <DollarSign className="w-6 h-6 text-purple-500 mr-2" />
              <h3 className="text-lg font-semibold text-emerald-700">ゲーム内課金（IAP）</h3>
            </div>

            <p className="text-sm text-gray-700 mb-3">
              ゲームプレイの利便性向上や、見た目のカスタマイズ要素が中心です。Pay-to-Win（課金が勝利に直結する）モデルは避けます。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-purple-50 rounded-lg p-2">
                <h4 className="text-xs font-medium text-purple-700 mb-1">時短・回復系</h4>
                <p className="text-xs text-gray-700">育成時間短縮アイテム、スタミナの回復薬</p>
              </div>

              <div className="bg-purple-50 rounded-lg p-2">
                <h4 className="text-xs font-medium text-purple-700 mb-1">便利機能系</h4>
                <p className="text-xs text-gray-700">一括水やり、自動収穫などの補助機能</p>
              </div>

              <div className="bg-purple-50 rounded-lg p-2">
                <h4 className="text-xs font-medium text-purple-700 mb-1">装飾系</h4>
                <p className="text-xs text-gray-700">プレイヤーアバターの衣装、仮想農園のデコレーション</p>
              </div>

              <div className="bg-purple-50 rounded-lg p-2">
                <h4 className="text-xs font-medium text-purple-700 mb-1">ガチャ（慎重に）</h4>
                <p className="text-xs text-gray-700">装飾アイテムなどがランダムで手に入る</p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
            <div className="flex items-center mb-3">
              <Ticket className="w-6 h-6 text-orange-500 mr-2" />
              <h3 className="text-lg font-semibold text-emerald-700">広告収入</h3>
            </div>

            <p className="text-sm text-gray-700 mb-3">ユーザー体験を極力損なわない形式を採用します。</p>

            <div className="grid grid-cols-1 gap-3">
              <div className="bg-orange-50 rounded-lg p-2">
                <h4 className="text-xs font-medium text-orange-700 mb-1">リワード広告</h4>
                <p className="text-xs text-gray-700">動画広告視聴の対価として、ゲーム内通貨、スタミナ回復などを付与</p>
              </div>

              <div className="bg-orange-50 rounded-lg p-2">
                <h4 className="text-xs font-medium text-orange-700 mb-1">バナー広告</h4>
                <p className="text-xs text-gray-700">ゲーム画面の一部に常時または一定時間表示</p>
              </div>

              <div className="bg-orange-50 rounded-lg p-2">
                <h4 className="text-xs font-medium text-orange-700 mb-1">タイアップ広告</h4>
                <p className="text-xs text-gray-700">農業関連企業や食品メーカーと連携したプロモーション</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
