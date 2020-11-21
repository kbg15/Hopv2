
//Prófaði let url first en það er þægilegra að vinna með const url
const url = '.../.././videos.json';


//Notum let response hér, því það er léttara að gera breytingar ef þess þarf á kóðanum með let staðinn fyrir const
export async function fetchVideo() {
    let response;
    try {
        response = await fetch(url);
    } catch (error) {
        console.error('Villa við að sækja', error);
        return null;
    }

    if (!response.ok) {
        console.error('Ekki tókst að sækja gögn');
        return null;
    }

    response = await response.json();
    return response;
}
