import CanvasOrgChart from './canvas-orgchart'

import data from '../public/mock/data'

const $ = document.querySelector.bind(document)

const canvas = $('canvas')

const config = {
  originX: 0,
  originY: 0,
  width: 0,
  height: 0,
  nodeWidth: 60,
  nodeHeight: 160,
  nodeSpacing: [20, 20],
  background: '',
  defaultColor: 'gray',
  customColors: [
    {
      attributeName: 'sex',
      checkOwn: false,
      color: {
        0: 'CORNFLOWERBLUE',
        1: 'LIGHTCORAL'
      }
    },
    {
      attributeName: 'self',
      checkOwn: true,
      color: 'black'
    }
  ],
  // customNode: [
  //   {
  //     attributeName: 'spouse',
  //     checkOwn: true,
  //     width: 120,
  //     draw: function(that, ctx, x, y, node) {
  //       x -= (this.width - that.nodeWidth) / 2
  //       that.drawAvatar(ctx, x, y, node)
  //       that.drawAvatar(ctx, x + this.width / 2, y, node.spouse)
  //       // node color
  //       ctx.fillStyle = that.defaultColor
  //       if (that.customColors.length > 0) {
  //         for (let color of that.customColors) {
  //           if (color.own && Object.prototype.hasOwnProperty.call(node, color.attributeName)) {
  //             ctx.fillStyle = color.color
  //           } else if (node[color.attributeName]) {
  //             ctx.fillStyle = color.color
  //           }
  //         }
  //       }
      
  //       ctx.fillRect(x, y + that.nodeWidth, that.nodeWidth, that.nodeHeight - that.nodeWidth)
  //       ctx.fillStyle = 'LIGHTCORAL'
  //       ctx.fillRect(x + this.width / 2, y + that.nodeWidth, that.nodeWidth, that.nodeHeight - that.nodeWidth)
  //       ctx.stroke()
  //       that.drawVerticalText(ctx, x, y + that.nodeWidth, node.name)
  //       that.drawVerticalText(ctx, x + this.width / 2, y + that.nodeWidth, node.spouse.name)
  //     }
  //   }
  // ],
  // customNode: function(that, ctx, x, y, node) {
  //   that.drawAvatar(ctx, x, y + that.nodeHeight - that.nodeWidth, node)
  //   // node color
  //   ctx.fillStyle = that.defaultColor
  //   for (let paint of that.customColors) {
  //     if (paint.checkOwn && Object.prototype.hasOwnProperty.call(node, paint.attributeName)) {
  //       typeof(paint.color) === 'string' ? ctx.fillStyle = paint.color : ctx.fillStyle = paint.color[node[paint.attributeName]]
  //     } else if (node[paint.attributeName] !== undefined) {
  //       typeof(paint.color) === 'string' ? ctx.fillStyle = paint.color : ctx.fillStyle = paint.color[node[paint.attributeName]]
  //     }
  //   }

  //   ctx.fillRect(x, y, that.nodeWidth, that.nodeHeight - that.nodeWidth)
  //   ctx.stroke()
  //   that.drawVerticalText(ctx, x, y, node.name)
  // },
  customBackground: function() {

  }
}

const canvasOrgChart = new CanvasOrgChart(config)

canvasOrgChart.render(canvas, data)
