import {Match} from './match-list/match.model';
import {User} from './leader-board/user.model';

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
