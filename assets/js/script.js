var myChart = echarts.init(document.getElementById('page-header'))
var option = {
  graphic: {
    elements: [
      {
        type: 'text',
        left: '0',
        top: '2',
        style: {
          text: "Hui Pan's Portfolio",
          fontSize: 50,
          fontWeight: 'bold',
          lineDash: [0, 200],
          lineDashOffset: 0,
          fill: 'transparent',
          stroke: '#34a1db',
          lineWidth: 2
        },
        keyframeAnimation: {
          duration: 4000,
          loop: true,
          keyframes: [
            {
              percent: 0.7,
              style: {
                fill: 'transparent',
                lineDashOffset: 200,
                lineDash: [200, 0]
              }
            },
            {
              percent: 0.8,
              style: {
                fill: 'transparent'
              }
            },
            {
              percent: 1,
              style: {
                fill: '#34a1db'
              }
            }
          ]
        }
      }
    ]
  }
};

myChart.setOption(option);