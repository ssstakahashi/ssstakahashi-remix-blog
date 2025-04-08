import { TrendingUp, Users, Gamepad2 } from "lucide-react"

export default function BackgroundSlide() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-emerald-800 mb-6">2. 企画背景</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
          <div className="flex items-center mb-3">
            <TrendingUp className="w-6 h-6 text-red-500 mr-2" />
            <h3 className="text-lg font-semibold text-emerald-700">農業の課題</h3>
          </div>
          <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
            <li>深刻な後継者不足</li>
            <li>限定的な販路とJA依存</li>
            <li>価格決定権の不在</li>
            <li>耕作放棄地の増加</li>
          </ul>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
          <div className="flex items-center mb-3">
            <Users className="w-6 h-6 text-blue-500 mr-2" />
            <h3 className="text-lg font-semibold text-emerald-700">消費者の動向</h3>
          </div>
          <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
            <li>食の安全・安心への関心</li>
            <li>生産者の顔が見える食材へのニーズ</li>
            <li>体験やストーリー消費への関心</li>
            <li>地方創生支援への意欲</li>
          </ul>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md">
          <div className="flex items-center mb-3">
            <Gamepad2 className="w-6 h-6 text-purple-500 mr-2" />
            <h3 className="text-lg font-semibold text-emerald-700">ゲーム市場の動向</h3>
          </div>
          <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
            <li>スマートフォンゲームの普及</li>
            <li>育成・シミュレーションゲームの人気</li>
            <li>ソーシャル要素を持つゲームの隆盛</li>
            <li>社会貢献をテーマにしたゲームの登場</li>
          </ul>
        </div>
      </div>

      <div className="bg-emerald-100/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-semibold text-emerald-700 mb-3">機会</h3>

        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-gray-700">
              農業課題と消費者のニーズ、ゲームの持つエンゲージメント力を掛け合わせることで、新たな農業支援とユーザー体験を創出できる可能性があります。
            </p>
          </div>

          <div className="hidden md:block">
            {/* 機会を表す図表 */}
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-emerald-500/30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/40 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/50"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-100 px-3 py-1 rounded-full text-xs font-medium text-red-700">
                農業課題
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-blue-100 px-3 py-1 rounded-full text-xs font-medium text-blue-700">
                消費者ニーズ
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-100 px-3 py-1 rounded-full text-xs font-medium text-purple-700">
                ゲーム
              </div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-emerald-100 px-3 py-1 rounded-full text-xs font-medium text-emerald-700">
                機会
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
