export interface DanMu {
  card: string;
  name: string;
  text: string;
  time: string;
  room: number;
  streamer: string;
}
export class HomeUtil {
  public static PAGE_DANMU_SIZE = 24;
  public static DANMU_QUERY_URL = 'danmu/query';
}