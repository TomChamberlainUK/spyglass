'use client'
import type { ReactNode } from 'react';
import { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import Tooltip from './Tooltip';

type Props = {
  data: number[];
  width?: number;
  height?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}

type TooltipState = {
  isVisible: boolean;
  content: ReactNode;
  position: {
    left: number;
    top: number;
  }
}

export default function LinePlot({
  data,
  width = 640,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 30,
  marginLeft = 40
}: Props) {
  const gx = useRef();
  const gy = useRef();

  const [tooltip, setTooltip] = useState<TooltipState>({
    isVisible: true,
    content: '',
    position: {
      left: 0,
      top: 0
    }
  });

  const x = d3.scaleLinear([0, data.length - 1], [marginLeft, width - marginRight]);
  const y = d3.scaleLinear(d3.extent(data), [height - marginBottom, marginTop]);
  const line = d3.line((d, i) => x(i), y);

  useEffect(() => {
    d3.select<SVGGElement, {}>(gx.current)
      .call(d3.axisBottom(x));
  }, [gx, x]);

  useEffect(() => {
    d3.select<SVGGElement, {}>(gy.current)
      .call(d3.axisLeft(y));
  }, [gy, y]);

  return (
    <>
      <svg width={width} height={height}>
        <g ref={gx} transform={`translate(0,${height - marginBottom})`} />
        <g ref={gy} transform={`translate(${marginLeft},0)`} />
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d={line(data)} />
        <g fill="white" stroke="currentColor" strokeWidth="1.5">
          {
            data.map((d, i) => {
              const interpolatedValue = d / Math.max(...data);
              const color = d3.interpolateLab('steelblue', 'red')(interpolatedValue);
              return (
                <circle
                  key={i}
                  cx={x(i)}
                  cy={y(d)}
                  r="5"
                  color={color}
                  fill={color}
                  onMouseEnter={(event) => {
                    if (!event.target) return;
                    const target = event.target as SVGCircleElement;
                    const boundingClientRect = target.getBoundingClientRect();
                    setTooltip({
                      ...tooltip,
                      isVisible: true,
                      content: `Metric is: ${parseFloat(`${data[i]}`).toFixed(2)}`,
                      position: {
                        left: boundingClientRect.left + (boundingClientRect.width / 2),
                        top: boundingClientRect.top + (boundingClientRect.height / 2)
                      }
                    });
                  }}
                  onMouseLeave={() => {
                    setTooltip({
                      ...tooltip,
                      isVisible: false
                    });
                  }}
                />
              );
            })
          }
        </g>
      </svg>
      <Tooltip
        isVisible={tooltip.isVisible}
        position={tooltip.position}
      >
        {tooltip.content}
      </Tooltip>
    </>
  );
}
