export interface WinWheelData {
  id: string;
  name: string;
  version: number;
  spinSegments: Array<Segment>;
}

export interface Segment {
  id: string;
  segmentContent: string;
  obtainContent: string;
  color: string;
}
