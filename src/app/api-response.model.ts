import {Match, Odds , Prediction} from './match-list/match.model';
import {User} from './leader-board/user.model';
import {Champion} from './predict-final/champion.model';

export interface MatchData {
  message: string;
  statusCode: string;
  matches: Match[];
}

export class UserData {
  message: string;
  statusCode: string;
  users: User[];
}

export class OddsData {
  message: string;
  statusCode: string;
  matches: Odds[];
}

export class OddsDataForJackpot {
  message: string;
  statusCode: string;
  predictions: Prediction[];
}

export class ChampionData {
  message: string;
  statusCode: string;
  champion: Champion[];
}
