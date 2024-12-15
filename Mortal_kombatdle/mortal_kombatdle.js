
// Character template:
// EMPTY: { Gender: "EMPTY", Race: "EMPTY", Faction: "EMPTY", Realm: "EMPTY", Debut: "EMPTY"},

const characterDatabase = {
    Sub_Zero: { Gender: "Male", Race: "Human", Faction: "Lin Kuei", Realm: "Earthrealm", Debut: "Mortal Kombat" },
    Goro: { Gender: "Male", Race: "Shokan", Faction: "Outworld Empire", Realm: "Outworld, Earthrealm", Debut: "Mortal Kombat" },
    Johnny_Cage: { Gender: "Male", Race: "Human", Faction: "Special Forces", Realm: "Earthrealm", Debut: "Mortal Kombat" },
    Kano: { Gender: "Male", Race: "Human, Cyborg", Faction: "Black Dragon", Realm: "Earthrealm", Debut: "Mortal Kombat" },
    Liu_Kang: { Gender: "Male", Race: "Human", Faction: "White Lotus", Realm: "Earthrealm", Debut: "Mortal Kombat" },
};

const guess = characterDatabase.Liu_Kang;

// Access and print Sub_Zero's data
const answer = characterDatabase.Sub_Zero;

let list = []

let correct_counter = 0

function compare(Character1, Character2) {
    // Loop through each key in Character1
    for (let key in Character1) {
        if (Character1[key] === Character2[key]) {
            list.push(`${key}: Green`);
            correct_counter += 1
        } else {
            list.push(`${key}: Red`);
        }
    }
    console.log(list)
    if (correct_counter == 5) {
        console.log("You guessed correctly!")
    } else {
        console.log("You guessed wrong!")
        console.log(correct_counter)
    }
}

compare(guess, answer)

/*
Goro
Johnny Cage
Kano
Liu Kang
Raiden
Reptile
Scorpion
Shang Tsung
Sonya Blade
Sub - Zero
Baraka
Jade
Jax
Kintaro
Kitana
Kung Lao
Mileena
Noob Saibot
Shao Kahn
Smoke
Chameleon
Cyrax
Ermac
Kabal
Khameleon
Motaro
Nightwolf
Rain
Sektor
Sheeva
Sindel
Stryker
Fujin
Quan Chi
Kia
Jataaka
Sareena
Shinnok
Jarek
Kai
Meat
Reiko
Tanya
Blaze
Tremor
Bo'Rai Cho
Drahmin
Frost
Hsu Hao
Kenshi
Li Mei
Mavado
Mokap
Moloch
Nitara
Ashrah
Dairou
Darrius
Havik
Hotaru
Kira
Kobra
Monster
Onaga
Shujinko
Daegon
Taven
Freddy Krueger
Kratos
Skarlet
Cassie Cage
D'Vorah
Erron Black
Ferra / Torr
Jacqui Briggs
Kotal Kahn
Kung Jin
Takahashi Takeda
Triborg
Leatherface
Alien
Predator
Jason Voorhees
Cetrion
Geras
Kollector
T-800
Joker
Rambo
Spawn
Robocop
Omni-man
Homelander
Ghostface
T-1000
Conan the Barbarian
*/