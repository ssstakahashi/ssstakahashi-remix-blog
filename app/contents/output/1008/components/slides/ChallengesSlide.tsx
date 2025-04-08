import { AlertTriangle, ShieldAlert, CloudRain, Users } from "lucide-react"

export default function ChallengesSlide() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-emerald-800 mb-6">9. 課題と対策</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
          <div className="flex items-center mb-3">
            <Users className="w-6 h-6 text-red-500 mr-2" />
            <h3 className="text-lg font-semibold text-emerald-700">リスク1：農家集めの難航</h3>
          </div>

          <div className="mb-3">
            <h4 className="text-sm font-medium text-emerald-700 mb-1">事前策:</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
              <li>参加メリットを具体的に訴求する説明資料・説明会の実施</li>
              <li>初期参加農家へのインセンティブ提供</li>
              <li>農業関連団体や自治体との連携による紹介依頼</li>
              <li>既存の産直ECで活躍する農家への個別アプローチ</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-emerald-700 mb-1">事後策:</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
              <li>参加農家からの紹介インセンティブ制度の導入</li>
              <li>メディア露出や成功事例の広報による認知度向上</li>
              <li>参加条件の見直し（情報発信のみから始めるステップ導入など）</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
          <div className="flex items-center mb-3">
            <AlertTriangle className="w-6 h-6 text-yellow-500 mr-2" />
            <h3 className="text-lg font-semibold text-emerald-700">リスク2：プレイヤーの継続率低下</h3>
          </div>

          <div className="mb-3">
            <h4 className="text-sm font-medium text-emerald-700 mb-1">事前策:</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
              <li>飽きさせないゲームサイクルと目標設定</li>
              <li>継続的な新規コンテンツの追加計画</li>
              <li>プレイヤー間の交流を促すコミュニティ機能の強化</li>
              <li>適切なゲームバランス調整</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-emerald-700 mb-1">事後策:</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
              <li>ログインボーナス、カムバックキャンペーンの実施</li>
              <li>プッシュ通知によるイベント告知やリマインド</li>
              <li>ユーザーアンケートやレビュー分析に基づくゲーム改善</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
          <div className="flex items-center mb-3">
            <ShieldAlert className="w-6 h-6 text-blue-500 mr-2" />
            <h3 className="text-lg font-semibold text-emerald-700">リスク3：システムトラブル</h3>
          </div>

          <div className="mb-3">
            <h4 className="text-sm font-medium text-emerald-700 mb-1">事前策:</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
              <li>リリース前の十分な品質テスト</li>
              <li>スケーラビリティを考慮した安定的なサーバーインフラの構築</li>
              <li>定期的なデータバックアップ体制の確立</li>
              <li>24時間365日のシステム監視体制</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-emerald-700 mb-1">事後策:</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
              <li>迅速な障害検知・原因特定・復旧プロセスの確立</li>
              <li>ユーザーへの誠実かつ迅速な状況報告とお詫び</li>
              <li>障害レビューと恒久的な再発防止策の実施</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
          <div className="flex items-center mb-3">
            <CloudRain className="w-6 h-6 text-purple-500 mr-2" />
            <h3 className="text-lg font-semibold text-emerald-700">リスク4：天候不順による影響</h3>
          </div>

          <div className="mb-3">
            <h4 className="text-sm font-medium text-emerald-700 mb-1">事前策:</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
              <li>自然災害による不作リスクについて、事前告知</li>
              <li>複数の異なる地域・気候帯の農家と提携し、リスクを分散</li>
              <li>ゲーム内に天気予報APIを連携させ、注意喚起を実施</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-emerald-700 mb-1">事後策:</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
              <li>不作発生時の補償ルールを明確化し、誠実に対応</li>
              <li>プレイヤーへの丁寧な状況説明と理解促進</li>
              <li>影響を受けた農家へのサポート</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
