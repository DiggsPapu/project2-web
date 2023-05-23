import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

export const PLAYER_TABLE = 'player'
export const TEAM_TABLE = 'team'
export const ALL = '*'

@Injectable({
  providedIn: 'root'
})
export class FifaserviceService {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    )
   }
  async getAllPlayers() {
    let { data: player, error } = await this.supabase.from(PLAYER_TABLE).select(ALL).limit(25)
    return player || []
  }
  async getPlayer(player_id: number) {
    const player = await this.supabase.from(PLAYER_TABLE).select(ALL).eq('player_id', player_id)
    return player || null
  }
  async getAllTeam(team_id: number) {
    const team = await this.supabase.from(TEAM_TABLE).select(ALL).eq('team_id', team_id)
    return team || null
  }
  async getPlayersFromTeam(team_id:number) {
    const players = await this.supabase.from(PLAYER_TABLE).select(ALL).eq('team_id', team_id)
    return players || null
  }
}
