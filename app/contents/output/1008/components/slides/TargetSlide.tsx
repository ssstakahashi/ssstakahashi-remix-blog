import { UserCircle2, Tractor } from "lucide-react"

export default function TargetSlide() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-emerald-800 mb-6">4. ターゲット</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
          <div className="flex items-center mb-4">
            <UserCircle2 className="w-8 h-8 text-blue-500 mr-2" />
            <h3 className="text-xl font-semibold text-emerald-700">プレイヤーターゲット</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-3">
              <h4 className="font-medium text-blue-700 mb-1">ペルソナ1: 食に関心が高い都会の20〜30代女性</h4>
              <p className="text-sm text-gray-700">
                都心在住、会社員。オーガニック食品や産直品に関心があり、SNSで情報収集。料理好きだが、忙しくて産地には行けない。
              </p>
              <p className="text-sm font-medium text-blue-600 mt-1">
                刺さるポイント: ゲームで応援した農家から新鮮な野菜が届く体験
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-3">
              <h4 className="font-medium text-blue-700 mb-1">ペルソナ2: 地方や社会貢献に関心のある30〜40代男性</h4>
              <p className="text-sm text-gray-700">
                地方都市在住、既婚、子持ち。通勤中にスマホゲームをプレイ。地方の課題に関心があり、貢献したいと思っている。
              </p>
              <p className="text-sm font-medium text-blue-600 mt-1">
                刺さるポイント: 自分のゲームプレイが農家支援に繋がる実感
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-3">
              <h4 className="font-medium text-blue-700 mb-1">ペルソナ3: スローライフや自然に憧れる40〜50代男女</h4>
              <p className="text-sm text-gray-700">
                都会または郊外在住。仕事や子育てが一段落し、自分の時間を持ちたい。ガーデニングや自然が好き。
              </p>
              <p className="text-sm font-medium text-blue-600 mt-1">
                刺さるポイント: 農家からの温かいメッセージや生育レポート
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
          <div className="flex items-center mb-4">
            <Tractor className="w-8 h-8 text-green-600 mr-2" />
            <h3 className="text-xl font-semibold text-emerald-700">農家ターゲット</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-3">
              <h4 className="font-medium text-green-700 mb-1">ペルソナ1: 新たな販路とファンを求める若手・新規就農者</h4>
              <p className="text-sm text-gray-700">
                30代。親から農地を継いだ、または脱サラして就農。有機栽培や珍しい品種など、独自のこだわりを持つ。
              </p>
              <p className="text-sm font-medium text-green-600 mt-1">
                期待: ゲームを通じて自分の農園や作物のファンを獲得したい
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-3">
              <h4 className="font-medium text-green-700 mb-1">ペルソナ2: こだわりを発信したい中堅・ベテラン農家</h4>
              <p className="text-sm text-gray-700">
                50代。長年の経験と技術を持ち、品質に絶対の自信がある。特定の品種や伝統的な農法にこだわりがある。
              </p>
              <p className="text-sm font-medium text-green-600 mt-1">
                期待: 自分のこだわりや作物の価値を理解してくれる消費者と繋がりたい
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-3">
              <h4 className="font-medium text-green-700 mb-1">ペルソナ3: 地域との繋がりを重視する多角経営農家</h4>
              <p className="text-sm text-gray-700">
                40代。複数の作物を栽培し、農家民宿や体験農園なども運営。地域イベントにも積極的に参加。
              </p>
              <p className="text-sm font-medium text-green-600 mt-1">
                期待: ゲームを通じて全国に自分の農園や地域の魅力を発信したい
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
