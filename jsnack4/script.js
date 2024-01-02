//Snack 4: In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.



const user_list = [`Anthony` , `Arnaldo` , `Mihai` , `Francesco` , `Girella`];

let my_name = prompt(`inserisci il tuo nome`);

for (let i = 0 ; i < user_list.length ; i++) {
    
    if ( my_name = user_list[i] ) {
        Id = true;
    } else {
        Id = false;
    }

    console.log(user_list[i]);
    console.log(Id);

}