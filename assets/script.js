function init() {

    const currentYear = new Date().getFullYear();
    //creating the table
    for (let i = 0; i < bondFilms.length; i++) {

        let backgroundColor;
        let actorName = bondFilms[i].actor;

        if (actorName === 'Sean Connery') {
            backgroundColor = '#d9534f';
        } else if (actorName === 'Roger Moore') {
            backgroundColor = '#5cb85c';
        } else if (actorName === 'Pierce Brosnan') {
            backgroundColor = '#c9c9ff';
        } else if (actorName === 'Daniel Craig') {
            backgroundColor = '#ffbdbd';
        } else if (actorName === 'Timothy Dalton') {
            backgroundColor = '#6497b1';
        }

        let years = bondFilms[i].year;
        let yearsAgo = ' made ' + (currentYear - years) + ' years ago';

        let table =
            '<tr class="change-color" style ="background-color: ' + backgroundColor + '">' +
            '<td scope="row">'+ (i+1) +'</td>' +
            '<td class="movie">'+ bondFilms[i].title +'</td>' +
            '<td class="year">'+ bondFilms[i].year + yearsAgo +'</td>' +
            '<td class="actor">'+ bondFilms[i].actor +'</td>' +
            '</tr>';

        document.getElementById('tableBody').insertAdjacentHTML('beforeend', table);
    }

  console.log('DOMContentLoaded');
  console.log(bondFilms)
}

document.addEventListener('DOMContentLoaded', init);
