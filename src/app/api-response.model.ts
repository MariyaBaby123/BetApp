import {Match, Odds} from './match-list/match.model';
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

export class ChampionData {
  message: string;
  statusCode: string;
  champion: Champion[];
}
