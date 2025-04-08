import Canvas from "~/components/canvas/Canvas";

export default function TextGame() {
    const draw = (context: CanvasRenderingContext2D, countX: number, countY: number) => {
        // canvasの内容をクリアする
        context.clearRect(0, 0, context.canvas.width, context.canvas.height)

        // アニメーションの位置を計算する
        const d = countX % 800
        const e = countY % 600

        context.beginPath(); // 新しいパスを開始
        context.moveTo(0, 500); // 横線の開始位置
        context.lineTo(800, 500); // 横線の終了位置
        context.strokeStyle = 'black'; // 線の色を設定
        context.lineWidth = 2; // 線の太さを設定
        context.stroke(); // 線を描画

        const lines = [
            { startX: 100, startY: 600, endX: 200, endY: 500 },
            { startX: 300, startY: 600, endX: 400, endY: 500 },
            { startX: 500, startY: 600, endX: 600, endY: 500 },
            { startX: 700, startY: 600, endX: 800, endY: 500 },
        ];

        lines.forEach(line => {
            context.beginPath(); // 新しいパスを開始
            context.moveTo(line.startX, line.startY); // 横線の開始位置
            context.lineTo(line.endX, line.endY); // 横線の終了位置
            context.strokeStyle = 'black'; // 線の色を設定
            context.lineWidth = 2; // 線の太さを設定
            context.stroke(); // 線を描画
        });

        const img = new Image();
        img.src = '/assets/carry/books-sample-javascript_carry.png';

        context.drawImage(img, 10 + d, 10 + e, 100, 100); // 画像を描画

        const img2 = new Image();
        img2.src = '/assets/carry/imgWorker.png';
        context.drawImage(img2, 100 + d, 10 + e, 100, 100); // 画像を描画

    }

    return (
        <div>
            <Canvas draw={draw} width="800" height="600" style={{ border: '1px solid black' }} />
        </div>
    );
}
