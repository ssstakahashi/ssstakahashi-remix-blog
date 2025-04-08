import { Gamepad2, Cloud, MessageSquare, Sprout } from "lucide-react"

export default function GameOverviewSlide() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-emerald-800 mb-6">5. ゲーム概要</h2>

      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md mb-6">
        <div className="flex items-center mb-3">
          <Gamepad2 className="w-6 h-6 text-purple-500 mr-2" />
          <h3 className="text-xl font-semibold text-emerald-700">リアル連携型・農園育成ソーシャルゲーム</h3>
        </div>
        <p className="text-gray-700 mb-4">
          プレイヤーはスマートフォン上で、提携農家が実際に育てている作物の「仮想区画」を担当します。日々の水やり、施肥、雑草・害虫対策といった農作業を模したアクションを行い、作物の成長をサポートします。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-purple-50 rounded-lg p-3">
            <div className="flex items-center mb-2">
              <Cloud className="w-5 h-5 text-purple-500 mr-1" />
              <h4 className="font-medium text-purple-700">リアル連動要素</h4>
            </div>
            <p className="text-xs text-gray-700">
              実際の天候データ（API連携）や、農家から定期的に届くリアルな生育状況レポートがゲームプレイに影響を与えます。
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-3">
            <div className="flex items-center mb-2">
              <MessageSquare className="w-5 h-5 text-purple-500 mr-1" />
              <h4 className="font-medium text-purple-700">ソーシャル要素</h4>
            </div>
            <p className="text-xs text-gray-700">
              他のプレイヤーとの協力（水やり手伝いなど）や農家への応援メッセージ送信といったコミュニケーション機能があります。
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-3">
            <div className="flex items-center mb-2">
              <Gamepad2 className="w-5 h-5 text-purple-500 mr-1" />
              <h4 className="font-medium text-purple-700">ゲームサイクル</h4>
            </div>
            <p className="text-xs text-gray-700">
              ログイン→農地チェック→水やり/世話→農家レポート確認→ログアウトという日常的なサイクルを繰り返します。
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
          <h3 className="text-lg font-semibold text-emerald-700 mb-3">主な機能（プレイヤー向け）</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>農家選択システム（検索、プロフィール閲覧）</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>仮想農地管理（育成アクション、ミニゲーム）</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>リアル連動要素（天気、生育状況の反映）</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>コミュニケーション機能（農家への応援、プレイヤー間交流）</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>収穫・報酬システム（ゲーム内報酬、リアル農産物購入権/割引）</span>
            </li>
          </ul>
        </div>

        <div className="relative">
          {/* ゲーム画面のモックアップ */}
          <div className="flex items-center justify-center h-full">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-64 h-[500px] border-8 border-gray-800">
              <div className="bg-emerald-500 h-12 flex items-center px-4">
                <h4 className="text-white font-medium">ポケット農園</h4>
              </div>
              <div className="bg-emerald-100 h-32 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <Sprout className="w-8 h-8 text-emerald-600" />
                  </div>
                  <p className="text-xs text-emerald-700">トマト畑</p>
                </div>
              </div>
              <div className="p-4">
                <div className="bg-white rounded-lg shadow-md p-3 mb-3">
                  <h5 className="text-xs font-medium text-emerald-700 mb-1">今日の作業</h5>
                  <div className="flex space-x-2">
                    <button className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">水やり</button>
                    <button className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">肥料</button>
                    <button className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">害虫駆除</button>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-3 mb-3">
                  <h5 className="text-xs font-medium text-emerald-700 mb-1">農家からのメッセージ</h5>
                  <p className="text-xs text-gray-700">今日のトマトは順調に育っています！皆さんの応援のおかげです。</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-3">
                  <h5 className="text-xs font-medium text-emerald-700 mb-1">収穫予定</h5>
                  <p className="text-xs text-gray-700">あと15日で収穫予定です！</p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                    <div className="bg-emerald-500 h-1.5 rounded-full w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
