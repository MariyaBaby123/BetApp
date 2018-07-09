export class Match {
   matchId: number;
   team1Name: string;
   team2Name: string;
   bounty: number;
   matchTime: string;
   openForVote: boolean;
   creditToPlay: number;
   voted: boolean;
   winner: string;
   resultOfUser: string;
   userPointsEarned: string;
 }

 export class Odds {
  team1Name: string;
  team2Name: string;
  numberOfBetForTeam1: number;
  numberOfBetForTeam2: number;
  numberOfBetForDraw: number;
 }

export class Prediction {
  prediction: string;
  jackpotBets: number;
  totalJackPotBets: number;
}
