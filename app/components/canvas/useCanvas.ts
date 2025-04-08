import { useRef, useEffect } from 'react'

const useCanvas = (draw: (context: CanvasRenderingContext2D, countX: number, countY: number) => void) => {
    // useRefを使ってcanvas要素への参照を作成
    const ref = useRef(null)
    useEffect(() => {
        // canvas要素を取得
        const canvas = ref.current as HTMLCanvasElement | null
        // 2Dコンテキストを取得
        const context = canvas?.getContext('2d')
        // canvas要素が存在しない場合はエラーをスロー
        if (!canvas) {
            throw new Error("Canvas element is not available");
        }
        let countX = 100 // 描画カウントの初期化
        let countY = 100 // 描画カウントの初期化
        let animationId = 0 // アニメーションIDの初期化
        console.log("countX", countX)
        let speedX = 0
        let gravity = 0

        // キーイベントの処理
        const handleKeyDown = (event: KeyboardEvent) => {
            console.log(`Key pressed: ${event.key}`); // 押されたキーをログに出力
            // 必要に応じてキーに基づく処理を追加
            if (event.key === 'ArrowRight') {
                countX += 10
            } else if (event.key === 'ArrowLeft') {
                countX -= 10
            } else if (event.key === 'ArrowUp') {
                // if (countY >= 500) {
                countY = -300
                // }
            } else if (event.key === 'ArrowDown') {
                countY += 10
            }
        };
        // 描画を行う関数
        const renderer = () => {
            countY += 10
            // カウントが600以上になったら600にする
            if (countY >= 450) {
                countY = 450
            }
            // speedX += speedX + gravity
            // countX++ // カウントを増加
            // countY += speedX // カウントを増加
            if (context) {
                draw(context, countX, countY) // draw関数を呼び出して描画
            }
            // console.log("renderer", animationId)
            animationId = window.requestAnimationFrame(renderer) // 次のフレームをリクエスト
            // console.log("renderer", animationId)
        }
        renderer() // 初回描画の呼び出し
        console.log("renderer")
        window.addEventListener('keydown', handleKeyDown); // keydownイベントリスナーを追加

        // クリーンアップ関数
        return () => {
            window.cancelAnimationFrame(animationId) // アニメーションをキャンセル
            window.removeEventListener('keydown', handleKeyDown); // イベントリスナーを削除
        }
    }, [draw]) // drawが変更されたときに再実行

    return ref // canvas要素への参照を返す
}

export default useCanvas