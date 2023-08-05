export default function CheckmarkCircleIcon({
  width,
  height,
  fill,
}: {
  width: number;
  height: number;
  fill: string;
}) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', `${width}`);
  svg.setAttribute('height', `${height}`);
  svg.setAttribute('fill', fill);
  svg.setAttribute('viewBox', `0 0 16 16`);

  const firstPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  firstPath.setAttribute(
    'd',
    'M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z'
  );

  const secondPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  secondPath.setAttribute(
    'd',
    'M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z'
  );

  svg.appendChild(firstPath);
  svg.appendChild(secondPath);

  return svg;
}
