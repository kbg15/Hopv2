const url = '.../.././videos.json';

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
    // console.log(response);
    return response;
}
