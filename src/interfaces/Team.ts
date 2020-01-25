export default interface Team {
    venue_name?: string
    franchise_code?: string           
    sport_code: string        //req    
    city?: string
    name_display_full: string            
    sport_id: string
    venue_id?: string
    mlb_org_id: string //req            
    mlb_org?: string            
    league_full: string //req            
    league_id: string //req
    name_abbrev?: string
    bis_team_code?: string
    league: string //req            
    base_url?: string
    address_zip?: string
    sport_code_display?: string
    mlb_org_short?: string            
    mlb_org_brief?: string            
    name_display_short: string //req
    team_id: string            //req
    state?: string            
    mlb_org_abbrev?: string
    division?: string
    team_code?: string
    name?: string
    sport_code_name?: string
    first_year_of_play?: string
    league_abbrev?: string
    name_display_long: string //req
    store_url?: string
    name_short?: string
    division_full?: string
    file_code?: string
    division_id: string //req
}