export interface DanMu {
  id: string;
  time: string;
  cardLevel: number;
  cardName: string;
  level: number;
  userName: string;
  text: string;
  roomId: number;
}

export class HomeUtil {
  public static PAGE_DANMU_SIZE = 24;
  public static DANMU_QUERY_URL = 'search';
  public static RANDOM_NAME_URL = 'random';
}
