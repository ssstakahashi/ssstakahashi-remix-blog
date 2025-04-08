import { Smartphone, HeadphonesIcon, Users } from "lucide-react"

export default function FarmerSupportSlide() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-emerald-800 mb-6">7. 農家向け機能・サポート</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
          <div className="flex items-center mb-3">
            <Smartphone className="w-6 h-6 text-emerald-500 mr-2" />
            <h3 className="text-lg font-semibold text-emerald-700">専用ツール/ポータル</h3>
          </div>

          <p className="text-sm text-gray-700 mb-3">
            スマートフォンアプリ（iOS/Android）およびPC等からアクセス可能なWebブラウザ版を提供します。
          </p>

          <h4 className="text-sm font-medium text-emerald-700 mb-2">主要機能:</h4>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>基本情報管理:</strong> 農園名、自己紹介、栽培作物の登録・編集
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>情報発信:</strong> 生育状況（写真・動画・コメント）の簡単アップロード
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>販売管理:</strong> 予約・注文状況の確認、在庫管理、売上確認
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>コミュニケーション:</strong> プレイヤーからのメッセージ閲覧、返信
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>
                <strong>データ確認:</strong> 応援ポイントランキング、作物別人気度の分析
              </span>
            </li>
          </ul>

          <h4 className="text-sm font-medium text-emerald-700 mt-4 mb-2">使いやすさ（UI/UX）:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>大きな文字サイズ、コントラストの高い配色</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>タップ/クリック回数を減らしたシンプルな操作フロー</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
              <span>定型文・絵文字パレット、音声入力によるテキスト入力補助</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
            <div className="flex items-center mb-3">
              <HeadphonesIcon className="w-6 h-6 text-blue-500 mr-2" />
              <h3 className="text-lg font-semibold text-emerald-700">サポート体制</h3>
            </div>

            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
                <span>
                  <strong>導入支援:</strong> アプリのインストール、初期設定、基本操作に関する個別サポート
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
                <span>
                  <strong>運用サポート:</strong> 専用ヘルプデスク（電話、メール、チャット等）を設置
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
                <span>
                  <strong>コミュニティ形成支援:</strong> 参加農家同士が情報交換や相談を行えるオンラインコミュニティ
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-1.5 mr-2"></span>
                <span>
                  <strong>能動的アプローチ:</strong> 定期的なメールマガジン等での活用Tips紹介
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
            <div className="flex items-center mb-3">
              <Users className="w-6 h-6 text-purple-500 mr-2" />
              <h3 className="text-lg font-semibold text-emerald-700">参加メリットの明確化</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="text-xs font-medium text-green-700 mb-1">金銭的メリット</h4>
                <ul className="text-xs text-gray-700 space-y-1 list-disc pl-4">
                  <li>新規販路開拓による売上増</li>
                  <li>中間マージン削減効果</li>
                  <li>ファンによる継続購入</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-3">
                <h4 className="text-xs font-medium text-purple-700 mb-1">非金銭的メリット</h4>
                <ul className="text-xs text-gray-700 space-y-1 list-disc pl-4">
                  <li>消費者の声が直接届く</li>
                  <li>こだわりを伝える場</li>
                  <li>新たなファン獲得</li>
                  <li>地域PRへの貢献</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
