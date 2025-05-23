interface Feature {
  id: number;
  feature: string;
}

let features: Feature[] = [
  { id: 1, feature: 'tumor growth' },
  { id: 2, feature: 'tumor heterogeneity' },
  { id: 3, feature: 'car-t cell therapy' },
  { id: 4, feature: 'ctl therapy' },
  { id: 5, feature: 'ctl + cd4 response' },
];

export function GET(request: Request) {
  return Response.json({ name: "lux", features });
}
