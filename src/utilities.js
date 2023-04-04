export const drawRect = (detections, ctx) => {
    detections.forEach(prediction => {
        // Get predictions results
        const [x,y,width,height] = prediction['bbox'];
        const text = prediction['class'];

        // set styling
        const color = 'green';
        ctx.strokeSylt = color
        ctx.font = '16px Arial'
        ctx.fillStyle = color


        // Draw retangles and text
        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x,y, width, height)
        ctx.stroke()
    });
}