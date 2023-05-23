import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

export const PLAYER_TABLE = 'player'
export const TEAM_TABLE = 'club'
export const COUNTRY_TABLE = 'country'
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
  async getAllTeams() {
    let {data: teams, error} = await this.supabase.from(TEAM_TABLE).select(ALL).limit(50)
    return teams || null
  }
  async getAllCountries() {
    let { data: countries, error } = await this.supabase.from(COUNTRY_TABLE).select(ALL)
    console.log(countries)
    return countries || null
  }
  async getAPlayer(player_name: string) {
    const player = await this.supabase.from(PLAYER_TABLE).select(ALL).eq('name', player_name)
    return player || null
  }
  async getATeam(team_name: string) {
    let { error, data: player, ...datos } = await this.supabase.from(TEAM_TABLE).select(ALL).eq('club_name', team_name).limit(25)
    return player || null
  }
  async getPlayersFromTeam(team_name:string) {
    let { data: teamResponse, error } = await this.supabase.from('club').select(`player (*)`).eq('club_name',team_name)
    if (teamResponse !== null) {return teamResponse[0]['player']}
    return null
  }
  async getPlayersFromCountry(country_name:string) {
    let { data: countryResponse, error } = await this.supabase.from('country').select(`player (*)`).eq('country_name',country_name)
    if (countryResponse !== null) {return countryResponse[0]['player']}
    return null
  }
}
