import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { HierarchyData } from '../types';

interface HierarchyChartProps {
  data: HierarchyData[];
}

const HierarchyChart: React.FC<HierarchyChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !data.length) return;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    // Process data into hierarchical structure
    const hierarchyData = {
      name: "Root",
      children: data.map(item => ({
        name: item.procedureFunctionName,
        package: item.packageName,
        children: [
          ...(item.internalFunctionsDtos || [])
            .filter(fn => fn.calledFunctionName)
            .map(fn => ({
              name: fn.calledFunctionName,
              type: 'internal'
            })),
          ...(item.externalFunctionsDtos || []).map(fn => ({
            name: fn.calledFunctionName,
            package: fn.calledPackageName,
            type: 'external'
          }))
        ]
      }))
    };

    const width = 1600;
    const height = 1000;
    const margin = { top: 40, right: 160, bottom: 40, left: 160 };

    // Create tree layout with more spacing
    const tree = d3.tree()
      .size([height - margin.top - margin.bottom, width - margin.left - margin.right])
      .separation((a, b) => (a.parent === b.parent ? 2 : 3));

    const root = d3.hierarchy(hierarchyData);
    
    // Calculate tree layout
    const treeData = tree(root);

    // Create SVG with zoom support
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Add zoom behavior
    const zoom = d3.zoom()
      .scaleExtent([0.5, 2])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom as any);

    // Create main group for the tree
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Add grid lines
    const grid = g.append('g')
      .attr('class', 'grid')
      .style('opacity', 0.1);

    for (let i = 0; i < width; i += 50) {
      grid.append('line')
        .attr('x1', i)
        .attr('y1', 0)
        .attr('x2', i)
        .attr('y2', height)
        .attr('stroke', '#000')
        .attr('stroke-width', 0.5);
    }

    for (let i = 0; i < height; i += 50) {
      grid.append('line')
        .attr('x1', 0)
        .attr('y1', i)
        .attr('x2', width)
        .attr('y2', i)
        .attr('stroke', '#000')
        .attr('stroke-width', 0.5);
    }

    // Create links with curved paths
    g.selectAll('.link')
      .data(treeData.links())
      .join('path')
      .attr('class', 'link')
      .attr('fill', 'none')
      .attr('stroke', '#cbd5e1')
      .attr('stroke-width', 1.5)
      .attr('d', d3.linkHorizontal()
        .x(d => d.y)
        .y(d => d.x)
      );

    // Create nodes
    const nodes = g.selectAll('.node')
      .data(treeData.descendants())
      .join('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.y},${d.x})`);

    // Add node circles with hover effect
    nodes.append('circle')
      .attr('r', 6)
      .attr('fill', d => {
        if (d.data.type === 'internal') return '#4CAF50';
        if (d.data.type === 'external') return '#2196F3';
        return '#9C27B0';
      })
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .style('cursor', 'pointer')
      .on('mouseover', function() {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('r', 8);
      })
      .on('mouseout', function() {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('r', 6);
      });

    // Add labels with improved styling
    nodes.append('text')
      .attr('dy', '.31em')
      .attr('x', d => d.children ? -10 : 10)
      .attr('text-anchor', d => d.children ? 'end' : 'start')
      .text(d => d.data.name)
      .attr('class', 'text-sm font-medium')
      .attr('fill', '#1f2937')
      .style('font-family', 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont')
      .style('font-size', '12px');

    // Add package name labels
    nodes.filter(d => d.data.package)
      .append('text')
      .attr('dy', '1.31em')
      .attr('x', d => d.children ? -10 : 10)
      .attr('text-anchor', d => d.children ? 'end' : 'start')
      .text(d => d.data.package)
      .attr('class', 'text-xs text-gray-500')
      .attr('fill', '#6B7280')
      .style('font-family', 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont')
      .style('font-size', '10px');

  }, [data]);

  return (
    <div className="w-full h-full overflow-auto bg-white">
      <svg ref={svgRef} className="w-full h-full" />
    </div>
  );
};

export default HierarchyChart;