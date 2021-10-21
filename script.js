

function draw() {
    const barGraphData = {
        color: 'red',
        width: 500,
        height: 300,
        intervalGap: 5,
        dataSet: [
            200, 100, 300, 400, 500, 230, 220, 180
        ]
    }
    
    function plotBarGraph(elemId, data) {
        let element  = document.getElementById(elemId);
        let canvasElem = `<canvas id="${elemId}-canvas" width="${data.width}" height="${data.height}"></canvas>`
        element.innerHTML = canvasElem
        const canvas = document.getElementById(`${elemId}-canvas`)
        let ctx = canvas.getContext('2d');

        let topValue = 0;
        data.dataSet.map(elem => elem > topValue && (topValue = elem))
        
        let barHeightRatio = 1
        !topValue ? (barHeightRatio = 1) : (barHeightRatio = data.height/topValue)
        
        let barWidth = data.width
        !data.dataSet.length ? (barWidth = data.width) : (barWidth = (data.width / data.dataSet.length)-data.intervalGap)

        ctx.fillStyle = data.color

        let x = data.intervalGap
        for(let i = 0; i < data.dataSet.length; i++){
            ctx.fillRect(x , data.height -( data.dataSet[i] * barHeightRatio), barWidth, data.dataSet[i] * barHeightRatio);
            x += data.intervalGap + barWidth
        }
    }
    plotBarGraph("new", barGraphData)
}